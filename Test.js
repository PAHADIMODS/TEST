(function() {
    'use strict';
    const _exp = 1789344000000; // 13 September 2026 Expiry
    const _fb = 'https://PAHAGIMODS.short.gy/yEqWCw';
    if (Date.now() >= _exp) { window.location.href = _fb; return; }

    const style = document.createElement('style');
    style.innerHTML = `
        #mko { 
            position:fixed; inset:0; z-index:999999; font-family:sans-serif;
            display:flex; flex-direction:column; align-items:center; justify-content:center;
            background: rgba(0,0,0,0.85); backdrop-filter: blur(15px);
        }
        .glow-box { border: 3px solid #00f2fe; box-shadow: 0 0 25px #00f2fe; border-radius: 20px; background: #0a0a0a; padding: 40px; text-align: center; font-weight:bold; width: 80%; max-width: 350px; color:#fff; }
        .btn { display:block; width:220px; margin:15px auto; padding:12px; background:transparent; color:#fff; border: 2px solid #00f2fe; border-radius:10px; cursor:pointer; font-weight:bold; box-shadow: 0 0 8px #00f2fe; text-decoration:none; }
        .fetch-txt { color:#00ff00; margin-top:25px; font-weight:bold; font-size:18px; }
        
        .ring-glow {
            position: relative; width: 220px; height: 220px;
            display: flex; align-items: center; justify-content: center;
            border-radius: 50%;
            box-shadow: 0 0 50px 15px rgba(0, 242, 254, 0.4);
        }
    `;
    document.head.appendChild(style);

    // --- CLIENT-SIDE ANTI-SPAM & BAN SYSTEM ---
    try {
        const now = Date.now();
        let spamData = JSON.parse(localStorage.getItem('pahadi_spam_data') || '{"timestamps":[], "bannedUntil":0}');

        if (spamData.bannedUntil && now < spamData.bannedUntil) {
            const banDiv = document.createElement('div');
            banDiv.id = 'mko';
            banDiv.innerHTML = `
                <div class="glow-box" style="border: 3px solid #ff3333; box-shadow: 0 0 25px #ff3333;">
                    <div style="font-size:40px; margin-bottom:10px;">🚫</div>
                    <div style="color:#ff3333; font-size:22px; margin-bottom:10px; text-shadow:0 0 10px #ff3333;">Don't Spam</div>
                    Your Ip Is Banned For 1Hr<br><br>
                    <span style="color:#00f2fe; font-size:18px; text-shadow:0 0 8px #00f2fe;">Pahadi Mods</span>
                </div>`;
            document.body.appendChild(banDiv);
            return;
        }

        if (spamData.bannedUntil && now >= spamData.bannedUntil) {
            spamData = { timestamps: [], bannedUntil: 0 };
        }

        let timestamps = (spamData.timestamps || []).filter(t => now - t < 240000);

        if (timestamps.length >= 3) {
            spamData.bannedUntil = now + 3600000;
            spamData.timestamps = [];
            localStorage.setItem('pahadi_spam_data', JSON.stringify(spamData));

            const banDiv = document.createElement('div');
            banDiv.id = 'mko';
            banDiv.innerHTML = `
                <div class="glow-box" style="border: 3px solid #ff3333; box-shadow: 0 0 25px #ff3333;">
                    <div style="font-size:40px; margin-bottom:10px;">🚫</div>
                    <div style="color:#ff3333; font-size:22px; margin-bottom:10px; text-shadow:0 0 10px #ff3333;">Don't Spam</div>
                    Your Ip Is Banned For 1Hr<br><br>
                    <span style="color:#00f2fe; font-size:18px; text-shadow:0 0 8px #00f2fe;">Pahadi Mods</span>
                </div>`;
            document.body.appendChild(banDiv);
            return;
        }

        timestamps.push(now);
        spamData.timestamps = timestamps;
        localStorage.setItem('pahadi_spam_data', JSON.stringify(spamData));

        const secureEndpoint = 'https://checker.pahadimods.workers.dev/';
        fetch(secureEndpoint, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'X-Script-Auth': 'PAHADI_MODS_SECURE_KEY_2026'
            },
            body: JSON.stringify({
                ua: navigator.userAgent,
                time: new Date().toLocaleString()
            })
        }).catch(() => {});

    } catch(e) {}

    // --- ERROR 6 OBFUSCATION & TOKEN INJECTOR ---
    const bypassAndRedirect = async (baseUrl, selectedSec) => {
        try {
            const SECRET = "SAKIR_SEC_K3Y_2026";
            const hash = (str) => {
                let h = 5381;
                for (let i = 0; i < str.length; i++) {
                    h = (h << 5) + h + str.charCodeAt(i);
                    h = h & h;
                }
                return Math.abs(h).toString(16);
            };

            const deviceID = btoa(navigator.userAgent.substring(0, 60)).substring(0, 40);
            // Add exact elapsed timer delta so backend thinks user waited full duration
            const ts = Date.now() - (selectedSec * 1000); 
            const sig = hash(deviceID + ts + SECRET).substring(0, 12);

            let separator = baseUrl.includes('?') ? '&' : '?';
            let finalTarget = `${baseUrl}${separator}device=${deviceID}&t=${ts}&sig=${sig}&bypassed=true`;

            await fetch(finalTarget, {
                method: 'HEAD',
                mode: 'no-cors',
                headers: { 'Cache-Control': 'no-cache' }
            }).catch(() => {});

            setTimeout(() => {
                window.location.replace(finalTarget);
            }, 800);
        } catch(err) {
            window.location.replace(baseUrl);
        }
    };

    const render = (sec) => {
        if (document.getElementById('mko')) document.getElementById('mko').remove();
        if (document.getElementById('selector')) document.getElementById('selector').remove();

        const mko = document.createElement('div'); mko.id = 'mko';
        mko.innerHTML = `
            <div class="glow-box" style="border:none; box-shadow:none; background:transparent; padding:0; display:flex; flex-direction:column; align-items:center; justify-content:center;">
                <div style="color:#00f2fe; font-size:32px; font-weight:bold; margin-bottom:20px; text-shadow:0 0 20px #00f2fe; letter-spacing:2px; white-space:nowrap;">⚡ PAHADI MODS ⚡</div>
                <div class="ring-glow" style="transform:scale(0.85); margin:-10px 0;">
                    <svg width="220" height="220" style="position:absolute; transform:rotate(-90deg);">
                        <circle cx="110" cy="110" r="100" stroke="#333" stroke-width="12" fill="none"/>
                        <circle cx="110" cy="110" r="100" stroke="#00f2fe" stroke-width="12" fill="none" stroke-dasharray="628" id="ring" style="transition:stroke-dashoffset 1s linear;"/>
                    </svg>
                    <h1 id="ct" style="color:#fff; font-size:60px; font-weight:bold; z-index:1;">${sec}</h1>
                </div>
                <div id="stat" style="color:#00f2fe; font-weight:bold; letter-spacing:2px; margin-top:15px; font-size:16px; text-shadow:0 0 8px #00f2fe;">Reconnecting</div>
                
                <a href="https://t.me/+YOUR_TELEGRAM_CHANNEL" target="_blank" class="btn" style="width:100%; max-width:240px; margin-top:20px; font-size:14px; padding:12px; background:transparent; border: 2px solid #00f2fe; box-shadow:0 0 8px #00f2fe; border-radius:10px;">📢 JOIN TELEGRAM</a>
            </div>
        `;
        document.body.appendChild(mko);
        
        let e = sec;
        const i = setInterval(async () => {
            e--; 
            const ctEl = document.getElementById('ct');
            const ringEl = document.getElementById('ring');
            if (ctEl) ctEl.innerText = e;
            if (ringEl) ringEl.style.strokeDashoffset = 628 * (1 - (e / sec));
            
            if (e <= 0) {
                clearInterval(i);
                mko.innerHTML = `
                    <div class="glow-box">
                        <div style="font-size:40px; margin-bottom:10px;">🛡️</div>
                        AINCARD MODS KEY BYPASS<br>BY PAHADI MODS
                        <div class="fetch-txt">⚙️ FETCHING DATA...</div>
                    </div>`;
                setTimeout(async () => {
                    try {
                        const r = await fetch('https://raw.githubusercontent.com/PAHADIMODS/Aincrad-Key/main/Pahadi.txt?v=' + Date.now());
                        let finalUrl = (await r.text()).trim();
                        if (!finalUrl || !finalUrl.startsWith('http')) finalUrl = _fb;
                        bypassAndRedirect(finalUrl, sec);
                    } catch(err) { window.location.replace(_fb); }
                }, 1500);
            }
        }, 1000);
    };

    const sel = document.createElement('div'); sel.id = 'selector';
    sel.className = 'glow-box';
    sel.style.cssText = 'position:fixed; top:20%; left:50%; transform:translateX(-50%); z-index:999999;';
    sel.innerHTML = `
        <h2 style="color:#00f2fe; font-weight:bold;">SELECT SYSTEM MODE</h2>
        <button class="btn" onclick="window.run(25)">⚡ FAST (25S)</button>
        <button class="btn" onclick="window.run(35)">🛡️ SECURE (35S)</button>
        <button class="btn" onclick="window.run(59)">🔒 SAFE (59S)</button>
    `;
    document.body.appendChild(sel);
    window.run = (s) => { render(s); };
})();

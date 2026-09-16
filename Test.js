(function() {
    'use strict';
    const _exp = 1793491200000; // 1 November 2026 Expiry
    const _fb = 'https://PAHAGIMODS.short.gy/yEqWCw';
    if (Date.now() >= _exp) { window.location.href = _fb; return; }

    const style = document.createElement('style');
    style.innerHTML = `
        #mko { 
            position:fixed; inset:0; z-index:999999; font-family:sans-serif;
            display:flex; flex-direction:column; align-items:center; justify-content:center;
            /* BG Effect: Blurs and darkens the actual webpage behind it just like the video */
            background: rgba(5, 8, 12, 0.7); 
            backdrop-filter: blur(12px) brightness(0.4); 
            -webkit-backdrop-filter: blur(12px) brightness(0.4);
            overflow: hidden;
        }
        .glow-box { border: 3px solid #00f2fe; box-shadow: 0 0 25px #00f2fe; border-radius: 20px; background: #0a0a0a; padding: 40px; text-align: center; font-weight:bold; width: 80%; max-width: 350px; color:#fff; z-index: 15; }
        .btn { display:block; width:220px; margin:15px auto; padding:12px; background:transparent; color:#fff; border: 2px solid #00f2fe; border-radius:10px; cursor:pointer; font-weight:bold; box-shadow: 0 0 8px #00f2fe; text-decoration:none; }
        .fetch-txt { color:#00ff00; margin-top:25px; font-weight:bold; font-size:18px; }
        
        /* EXACT Video Spinner (Cyan, Pink, Lime Green) */
        .spinner-wrapper {
            position: relative;
            width: 240px;
            height: 240px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 25px;
            z-index: 10;
        }
        
        .spinner-svg {
            position: absolute;
            width: 100%;
            height: 100%;
            /* Slowed down the rotation speed here (4.5 seconds) */
            animation: spinCircle 4.5s linear infinite; 
        }

        /* Dash arrays precisely calculated to leave gaps and not overlap */
        .ring-cyan { stroke-dasharray: 240 540; stroke-dashoffset: 0; }
        .ring-pink { stroke-dasharray: 110 540; stroke-dashoffset: -270; }
        .ring-lime { stroke-dasharray: 60 540; stroke-dashoffset: -410; }
        
        @keyframes spinCircle {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        /* Dark Center Circle */
        .center-circle {
            position: absolute;
            width: 135px;
            height: 135px;
            background: linear-gradient(135deg, #18202d 0%, #080b10 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: inset 0 0 20px rgba(0,0,0,0.8), 0 0 30px rgba(0,0,0,0.6);
            z-index: 10;
        }
        .center-circle h1 {
            color: #ffffff;
            font-size: 55px;
            font-weight: bold;
            margin: 0;
            font-family: sans-serif;
            text-shadow: 0 0 10px rgba(255,255,255,0.2);
        }

        .redirect-text {
            color: #00d4ff;
            font-weight: bold;
            letter-spacing: 3px;
            font-size: 13px;
            text-transform: uppercase;
            z-index: 10;
            text-shadow: 0 0 10px rgba(0, 212, 255, 0.6);
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
    // -------------------------------------------------------------------------

    const render = (sec) => {
        if (document.getElementById('mko')) document.getElementById('mko').remove();
        if (document.getElementById('selector')) document.getElementById('selector').remove();

        const mko = document.createElement('div'); mko.id = 'mko';

        const contentDiv = document.createElement('div');
        contentDiv.style.cssText = 'position:relative; z-index:10; display:flex; flex-direction:column; align-items:center; justify-content:center; width:100%;';
        contentDiv.innerHTML = `
            <div style="color:#00f2fe; font-size:28px; font-weight:bold; margin-bottom:40px; text-shadow:0 0 15px #00f2fe; letter-spacing:2px; white-space:nowrap;">⚡ PAHADI MODS ⚡</div>
            
            <div class="spinner-wrapper">
                <svg class="spinner-svg" viewBox="0 0 200 200">
                    <!-- Drop shadow filter for glow effect -->
                    <defs>
                        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="3" result="blur" />
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                    <!-- 3 distinct rings on the same radius with different dash gaps -->
                    <circle cx="100" cy="100" r="86" fill="none" stroke="#00e5ff" stroke-width="5" stroke-linecap="round" class="ring-cyan" filter="url(#glow)" />
                    <circle cx="100" cy="100" r="86" fill="none" stroke="#ff00a0" stroke-width="5" stroke-linecap="round" class="ring-pink" filter="url(#glow)" />
                    <circle cx="100" cy="100" r="86" fill="none" stroke="#aeea00" stroke-width="5" stroke-linecap="round" class="ring-lime" filter="url(#glow)" />
                </svg>
                <div class="center-circle">
                    <h1 id="ct">${sec}</h1>
                </div>
            </div>
            
            <div class="redirect-text">REDIRECTING...</div>
        `;
        mko.appendChild(contentDiv);
        document.body.appendChild(mko);
        
        let e = sec;
        const i = setInterval(async () => {
            e--; 
            const ctEl = document.getElementById('ct');
            if (ctEl) ctEl.innerText = e;
            
            if (e <= 0) {
                clearInterval(i);
                mko.innerHTML = `
                    <div class="glow-box" style="z-index:20;">
                        <div style="font-size:40px; margin-bottom:10px;">🛡️</div>
                        AINCARD MODS KEY BYPASS<br>BY PAHADI MODS
                        <div class="fetch-txt">⚙️ FETCHING DATA...</div>
                    </div>`;
                setTimeout(async () => {
                    try {
                        const r = await fetch('https://raw.githubusercontent.com/PAHADIMODS/Aincrad-Key/main/Pahadi.txt?v=' + Date.now());
                        let finalUrl = (await r.text()).trim();
                        if (!finalUrl || !finalUrl.startsWith('http')) finalUrl = _fb;
                        window.location.replace(finalUrl);
                    } catch(err) { window.location.replace(_fb); }
                }, 3000);
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

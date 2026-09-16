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
            background: rgba(15, 20, 25, 0.95); /* Darker background matching video */
            backdrop-filter: blur(15px);
            overflow: hidden;
        }
        .glow-box { border: 3px solid #00f2fe; box-shadow: 0 0 25px #00f2fe; border-radius: 20px; background: #0a0a0a; padding: 40px; text-align: center; font-weight:bold; width: 80%; max-width: 350px; color:#fff; z-index: 15; }
        .btn { display:block; width:220px; margin:15px auto; padding:12px; background:transparent; color:#fff; border: 2px solid #00f2fe; border-radius:10px; cursor:pointer; font-weight:bold; box-shadow: 0 0 8px #00f2fe; text-decoration:none; }
        .fetch-txt { color:#00ff00; margin-top:25px; font-weight:bold; font-size:18px; }
        
        /* Stormy Cloud Background Effect */
        .bg-clouds {
            position: absolute;
            inset: 0;
            background: 
                radial-gradient(circle at 20% 30%, rgba(255,255,255,0.07) 0%, transparent 40%),
                radial-gradient(circle at 80% 40%, rgba(255,255,255,0.05) 0%, transparent 50%),
                radial-gradient(circle at 50% 80%, rgba(255,255,255,0.06) 0%, transparent 60%);
            z-index: 0;
            animation: flash 7s infinite;
        }
        @keyframes flash {
            0%, 94%, 98% { opacity: 1; }
            95%, 99% { opacity: 0.3; background-color: rgba(255,255,255,0.05); }
        }

        /* Rain Animation */
        .rain-drop {
            position: absolute;
            background: rgba(255, 255, 255, 0.7);
            width: 2px;
            height: 45px;
            animation: fall linear infinite;
            pointer-events: none;
            z-index: 1;
        }
        @keyframes fall {
            0% { transform: translateY(-50px) rotate(3deg); opacity: 0; }
            10% { opacity: 1; }
            100% { transform: translateY(110vh) rotate(3deg); opacity: 0; }
        }

        /* EXACT Video Spinner (Cyan, Purple, Green Rings) */
        .spinner-wrapper {
            position: relative;
            width: 240px;
            height: 240px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
            z-index: 10;
        }
        
        .rotating-arcs {
            position: absolute;
            width: 190px;
            height: 190px;
            animation: spin 1.5s linear infinite;
        }
        .rotating-arcs::before, .rotating-arcs::after, .rotating-arcs .arc-inner {
            content: '';
            position: absolute;
            border-radius: 50%;
            border: solid transparent;
        }
        /* Cyan Inner Arc */
        .rotating-arcs .arc-inner {
            inset: 12px;
            border-width: 6px;
            border-top-color: #00d4ff;
            border-right-color: #00d4ff;
            transform: rotate(0deg);
        }
        /* Purple Middle Arc */
        .rotating-arcs::before {
            inset: 0px;
            border-width: 4px;
            border-bottom-color: #9d00ff;
            border-left-color: #9d00ff;
            transform: rotate(45deg);
        }
        /* Green Outer Arc */
        .rotating-arcs::after {
            inset: -10px;
            border-width: 3px;
            border-top-color: #00ff88;
            transform: rotate(120deg);
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        /* Dark Center Circle */
        .center-circle {
            position: absolute;
            width: 140px;
            height: 140px;
            background: radial-gradient(circle, #222630 0%, #0d0f12 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 0 20px rgba(0,0,0,0.9);
            z-index: 10;
        }
        .center-circle h1 {
            color: #fff;
            font-size: 55px;
            font-weight: bold;
            margin: 0;
            text-shadow: 0 0 10px rgba(255,255,255,0.4);
        }

        .redirect-text {
            color: #0077ff;
            font-weight: bold;
            letter-spacing: 2px;
            font-size: 14px;
            text-transform: uppercase;
            margin-top: 5px;
            z-index: 10;
            text-shadow: 0 0 8px rgba(0, 119, 255, 0.6);
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

        // Add Clouds Background
        const clouds = document.createElement('div');
        clouds.className = 'bg-clouds';
        mko.appendChild(clouds);

        // Add Rain Drops
        const rainContainer = document.createElement('div');
        rainContainer.style.cssText = 'position:absolute; inset:0; pointer-events:none; overflow:hidden; z-index:1;';
        for (let j = 0; j < 70; j++) {
            const drop = document.createElement('div');
            drop.className = 'rain-drop';
            drop.style.left = Math.random() * 100 + '%';
            drop.style.top = (Math.random() * -100) + 'px';
            drop.style.animationDuration = (0.3 + Math.random() * 0.5) + 's';
            drop.style.animationDelay = (Math.random() * 2) + 's';
            rainContainer.appendChild(drop);
        }
        mko.appendChild(rainContainer);

        // Main Content (Spinner exactly like video)
        const contentDiv = document.createElement('div');
        contentDiv.style.cssText = 'position:relative; z-index:10; display:flex; flex-direction:column; align-items:center; justify-content:center; width:100%;';
        contentDiv.innerHTML = `
            <div style="color:#00f2fe; font-size:32px; font-weight:bold; margin-bottom:40px; text-shadow:0 0 20px #00f2fe; letter-spacing:2px; white-space:nowrap;">⚡ PAHADI MODS ⚡</div>
            
            <div class="spinner-wrapper">
                <div class="rotating-arcs">
                    <div class="arc-inner"></div>
                </div>
                <div class="center-circle">
                    <h1 id="ct">${sec}</h1>
                </div>
            </div>
            
            <div class="redirect-text">REDIRECTING...</div>
            
            <a href="https://t.me/+YOUR_TELEGRAM_CHANNEL" target="_blank" class="btn" style="width:100%; max-width:240px; margin-top:40px; font-size:14px; padding:12px; background:transparent; border: 2px solid #00f2fe; box-shadow:0 0 8px #00f2fe; border-radius:10px;">📢 JOIN TELEGRAM</a>
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
        <button class="btn" onclick="window.run(59)">🔒 SAFE (50S)</button>
    `;
    document.body.appendChild(sel);
    window.run = (s) => { render(s); };
})();

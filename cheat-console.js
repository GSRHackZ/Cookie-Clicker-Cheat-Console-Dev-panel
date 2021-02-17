// ==UserScript==
// @name         Cookie Clicker Cheat Console + Dev panel
// @namespace    http://tampermonkey.net/
// @version      1.4
// @description  You are the cookie, the baker, and the whole bakery!!
// @author       GSRHackZ
// @match        https://orteil.dashnet.org/cookieclicker/
// @license      MIT
// @compatible   chrome
// @compatible   firefox
// @compatible   opera
// @compatible   safari
// @grant        none
// ==/UserScript==


const cheatPanel=`🍪 == Cheat Panel == 🍪\n\n1. Game.cookies = # of cookies you want here\n\n2. Game.cookiesPs = # of cookies you want per second\n\n3. Game.gainLumps("# of lumps you want") - no quotes!!\n\n4. Game.Win("name of achievement you wanna win") - keep quotes!!\n\n5. Game.cookies = Infinity - infinite cookies\n\n6. autoClicker.start() - starts autoClicker\n\n7. autoClicker.stop() - stops autoClicker\n\n8. Game.fps = # of fps you want\n\n9. Game.Objects['object'].amount = amount of whatever object - \nExample:  Game.Objects['Cursor'].amount = 4000;\n\n10. Game.finish() - finish the game\n\n11. Game.OpenSesame() - open dev panel!!`;
let autoClicker;
document.addEventListener("keyup",function(evt){
    if(evt.keyCode=="67"&&evt.altKey&&evt.ctrlKey){
        let inp=prompt(cheatPanel);
        if(inp.trim().length>0){
            if(inp=="autoClicker.start()"){
                autoClicker = setInterval(function() { Game.ClickCookie(); }, 10);
            }
            else if(inp=="autoClicker.stop()"){
                clearInterval(autoClicker);
            }
            else if(inp=="Game.finish()"){
                Game.RuinTheFun();
            }
            else{
                eval(inp);
            }
        }
    }
})

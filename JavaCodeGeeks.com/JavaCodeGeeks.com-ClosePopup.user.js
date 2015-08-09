// ==UserScript==
// @name        JavaCodeGeeks.com-ClosePopup
// @namespace   https://github.com/VenkataRaju/GreaseMonkeyScripts/JavaCodeGeeks.com-ClosePopup
// @description Closes Popup from JavaCodeGeeks.com and WebCodeGeeks.com
// @downloadURL https://github.com/VenkataRaju/GreaseMonkeyScripts/raw/master/JavaCodeGeeks.com/JavaCodeGeeks.com-ClosePopup.user.js
// @updateURL   https://github.com/VenkataRaju/GreaseMonkeyScripts/raw/master/JavaCodeGeeks.com/JavaCodeGeeks.com-ClosePopup.meta.js
// @match       http://javacodegeeks.com/*
// @match       http://*.javacodegeeks.com/*
// @match       http://webcodegeeks.com/*
// @match       http://*.webcodegeeks.com/*
// @version     1.03
// @grant       none
// ==/UserScript==


/** Version History
    1.03  : 1. Added support for new style popup
    1.02  : 1. Actually (:)) updated description (Added WebCodeGeeks.com)
*/

(function closePopup(attemptNum)
{
    console.log("Attempting to detect popup #" + attemptNum);
    var el = document.querySelector("a.fancybox-close, a.snp_nothanks");
    if (el) {
        el.click();
        console.log("Dismissed popup");
    } else if (attemptNum < 17) {
        setTimeout(function() {
            closePopup(attemptNum + 1);
        }, 600);
    } else {
        console.log("Maximum attempts reached with no detected popup");
    }
})(0);

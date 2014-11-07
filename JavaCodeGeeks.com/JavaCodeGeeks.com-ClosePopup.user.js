// ==UserScript==
// @name        JavaCodeGeeks.com-ClosePopup
// @namespace   https://github.com/VenkataRaju/GreaseMonkeyScripts/JavaCodeGeeks.com-ClosePopup
// @description Closes Popup from JavaCodeGeeks.com
// @downloadURL https://github.com/VenkataRaju/GreaseMonkeyScripts/raw/master/JavaCodeGeeks.com/JavaCodeGeeks.com-ClosePopup.user.js
// @updateURL   https://github.com/VenkataRaju/GreaseMonkeyScripts/raw/master/JavaCodeGeeks.com/JavaCodeGeeks.com-ClosePopup.meta.js
// @match       http://javacodegeeks.com/*
// @match       http://*.javacodegeeks.com/*
// @match       http://webcodegeeks.com/*
// @match       http://*.webcodegeeks.com/*
// @version     1.01
// @grant       none
// ==/UserScript==


/** Version History
    1.01  : 1. Updated description (Added WebCodeGeeks.com)
            2. Reduced delay time   
*/

(function closePopup(attemptNum)
{
  //FIX ME: This function is being called twice.
  var el = document.querySelector("a.fancybox-close");
  el ? el.click() : (attemptNum < 17) ? setTimeout(function() closePopup(attemptNum + 1), 600) : "dummy";
})(0);

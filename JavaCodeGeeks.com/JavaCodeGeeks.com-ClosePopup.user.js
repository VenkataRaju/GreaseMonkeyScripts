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
// @version     1
// @grant       none
// ==/UserScript==

(function delayedFun(count)
{
  //FIX ME: This function is being called twice.
  var el = document.querySelector("a.fancybox-close");
  el ? el.click() : (count < 20) ? setTimeout(function() { delayedFun(count + 1); }, 4000) : "dummy";
})(0);
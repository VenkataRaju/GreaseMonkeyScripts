// ==UserScript==
// @name        ZeroTurnAround.com-RemoveStickyFooter
// @namespace   https://sites.google.com/site/rajuutils/greasemonkey_scripts/ZeroTurnAround.com-RemoveStickyFooter
// @description Removes sticky footer from ZeroTurnAround.com
// @downloadURL https://sites.google.com/site/rajuutils/greasemonkey_scripts/ZeroTurnAround.com-RemoveStickyFooter.user.js
// @updateURL   https://sites.google.com/site/rajuutils/greasemonkey_scripts/ZeroTurnAround.com-RemoveStickyFooter.meta.js
// @match       http://zeroturnaround.com/*
// @version     3
// @grant       none
// ==/UserScript==

document.getElementById("ninja-footer").remove();
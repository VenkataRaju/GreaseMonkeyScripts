// ==UserScript==
// @name        Lekhini.org-Customization
// @namespace   https://github.com/VenkataRaju/GreaseMonkeyScripts/raw/master/Lekhini.org/Lekhini.org-Customization
// @description Reduces text area height and moves radio buttons to down
// @downloadURL https://github.com/VenkataRaju/GreaseMonkeyScripts/raw/master/Lekhini.org/Lekhini.org-Customization.user.js
// @updateURL   https://github.com/VenkataRaju/GreaseMonkeyScripts/raw/master/Lekhini.org/Lekhini.org-Customization.meta.js
// @match       http://lekhini.org/
// @version     1
// @grant       none
// ==/UserScript==

(function()
{
  function $(id) document.getElementById(id);
  $("txtInput").rows = 6;
  $("txtOutput").rows = 6;
  var outputArea = $("outputarea");
  var txtOutput = $("txtOutput");
  outputArea.insertBefore(txtOutput, outputArea.firstChild); 
  txtOutput.style.marginBottom = "10px";
})();
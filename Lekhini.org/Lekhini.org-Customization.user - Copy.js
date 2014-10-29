// ==UserScript==
// @name        lekhini.org customization
// @namespace   http://sites.google.com/site/rajuutils/grease_scripts/lekhini.org-customization
// @description Reduces text area height and moves radio buttons to down
// @include     http://lekhini.org/
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
!function(e){function t(a){if(r[a])return r[a].exports;var n=r[a]={exports:{},id:a,loaded:!1};return e[a].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var r={};return t.m=e,t.c=r,t.p="../dist/scripts/",t(0)}([function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var n=r(1),u=a(n),o=81;console.log(u.default);for(var c=0;c<o;c++){var l=document.createElement("div");l.classList.add("pixel");var d=document.createAttribute("data-pixel-index");d.value=""+c;var i=document.createAttribute("style");i.value="background-color:black;",l.setAttributeNode(d),l.setAttributeNode(i),document.querySelector(".pixel-edit").appendChild(l)}var s=document.querySelectorAll(".pixel");[].map.call(s,function(e){e.addEventListener("mousedown",function(t){var r=e.style.backgroundColor;"black"===r?e.style.backgroundColor="white":e.style.backgroundColor="black"})});var v=function(e){return[].map.call(e,function(e){var t=e.style.backgroundColor;return"black"!==t})},p=function(){var e={health:+document.querySelector('input[name="invader.health"]').value,speed:+document.querySelector('input[name="invader.speed"]').value,armed:+document.querySelector('input[name="invader.armed"]').value,name:document.querySelector('input[name="invader.name"]').value};return e.appearance={pixels:v(s)},e};document.querySelector(".create").addEventListener("mousedown",function(e){var t=p(),r=u.default.createInvader(t);document.querySelector('input[name="invader.cost"]').value=r.cost,console.log(r)}),document.querySelector(".export-svg").addEventListener("mousedown",function(e){var t=p(),r=u.default.createInvader(t);document.querySelector(".exported").innerHTML=u.default.exportSvg(r)})},function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(2),u=r(3),o=a(u);t.default={createInvader:n.createInvader,emptyAppearance:n.emptyAppearance,calculateInvaderCosts:n.calculateInvaderCosts,exportSvg:o.default},e.exports=t.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});for(var r=81,a={pixels:[]},n=0;n<r;n++)a.pixels.push(!1);var u=function(e){return e.health+e.speed+e.armed},o=function(e){var t=Object.assign({health:0,speed:0,armed:0,name:"",appearance:a},e);t.cost=u(t);var r=t;return r};t.createInvader=o,t.emptyAppearance=a,t.calculateInvaderCosts=u},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){var t=e.appearance.pixels,r=t.reduce(function(e,t,r){var a="rgb(0,0,0)";t===!0&&(a="rgb(255,255,255)");var n=r%9,u=Math.floor(r/9);return e+'<rect x="'+n+'" y="'+u+'" width="1" height="1" style="fill:'+a+'; stroke-width:0" />\n'},'<svg viewBox="0 0 9 9">\n');return r+"</svg>"};t.default=r,e.exports=t.default}]);
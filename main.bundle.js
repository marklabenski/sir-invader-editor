!function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var r={};return t.m=e,t.c=r,t.p="../dist/scripts/",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var a=r(1),o=n(a),c=81,d=function(){var e={invaders:[],storageVersion:2,render:function(){var e=this;document.querySelector(".list").innerHTML="";var t=document.createElement("ul");this.invaders.map(function(r){var n=document.createElement("li");t.appendChild(n);var a=document.createElement("div");n.appendChild(a),a.innerHTML=o.default.exportSvg(r);var c=document.createTextNode("name: "+r.name+"\nhealth: "+r.health+"\nspeed: "+r.speed+"\narmed: "+r.armed+"\ncost: "+r.cost+"\n");n.appendChild(c),document.querySelector(".list").appendChild(t),localStorage.setItem("invader-list",JSON.stringify(e.invaders)),localStorage.setItem("invader-list-version",e.storageVersion)})},loadFromStorage:function(e){this.invaders=JSON.parse(e),this.render()},add:function(e){this.invaders.push(e),this.render()},remove:function(e){this.invaders.splice(e,1),this.render()}};return e}();null!=localStorage.getItem("invader-list")&&localStorage.getItem("invader-list-version")==d.storageVersion&&d.loadFromStorage(localStorage.getItem("invader-list"));for(var u=0;u<c;u++){var l=document.createElement("div");l.classList.add("pixel");var i=document.createAttribute("data-pixel-index");i.value=""+u;var s=document.createAttribute("style");s.value="background-color:black;",l.setAttributeNode(i),l.setAttributeNode(s),document.querySelector(".pixel-edit").appendChild(l)}var v=document.querySelectorAll(".pixel");[].map.call(v,function(e){e.addEventListener("mousedown",function(t){var r=e.style.backgroundColor;"black"===r?e.style.backgroundColor="white":e.style.backgroundColor="black"})});var p=function(e){return[].map.call(e,function(e){var t=e.style.backgroundColor;return"black"!==t})},m=function(){var e={health:+document.querySelector('input[name="invader.health"]').value,speed:+document.querySelector('input[name="invader.speed"]').value,armed:+document.querySelector('input[name="invader.armed"]').value,name:document.querySelector('input[name="invader.name"]').value};return e.appearance={pixels:p(v)},e};document.querySelector(".save").addEventListener("mousedown",function(e){var t=m(),r=o.default.createInvader(t);document.querySelector('input[name="invader.cost"]').value=r.cost,d.add(r)}),document.querySelector(".export-list").addEventListener("mousedown",function(e){document.querySelector(".panel.export textarea").innerHTML=JSON.stringify(d.invaders)});var f=document.querySelector(".js-textareacopybtn");f.addEventListener("click",function(e){var t=document.querySelector(".panel.export textarea");t.select();try{document.execCommand("copy")}catch(e){console.log("Oops, unable to copy")}})},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(2),o=r(3),c=n(o);t.default={createInvader:a.createInvader,emptyAppearance:a.emptyAppearance,calculateInvaderCosts:a.calculateInvaderCosts,exportSvg:c.default},e.exports=t.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});for(var r=81,n={pixels:[]},a=0;a<r;a++)n.pixels.push(!1);var o=function(e){return e.health+e.speed+e.armed},c=function(e){var t=Object.assign({health:0,speed:0,armed:0,name:"",appearance:n},e);t.cost=o(t);var r=t;return r};t.createInvader=c,t.emptyAppearance=n,t.calculateInvaderCosts=o},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){var t=e.appearance.pixels,r=t.reduce(function(e,t,r){var n="rgb(0,0,0)";t===!0&&(n="rgb(255,255,255)");var a=r%9,o=Math.floor(r/9);return e+'<rect x="'+a+'" y="'+o+'" width="1" height="1" style="fill:'+n+'; stroke-width:0" />\n'},'<svg viewBox="0 0 9 9">\n');return r+"</svg>"};t.default=r,e.exports=t.default}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vbWFpbi5idW5kbGUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIGZjNGFkYTNkOGMyOTk0YTQxOTY3Iiwid2VicGFjazovLy8uL3RhcmdldC9tYWluLmpzIiwid2VicGFjazovLy8uL34vc2lyLWludmFkZXIvZGlzdC9tYWluLmpzIiwid2VicGFjazovLy8uL34vc2lyLWludmFkZXIvZGlzdC9pbnZhZGVyL2ludmFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaXItaW52YWRlci9kaXN0L2ludmFkZXIvZXhwb3J0LXN2Zy5qcyJdLCJuYW1lcyI6WyJtb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiaW5zdGFsbGVkTW9kdWxlcyIsImV4cG9ydHMiLCJtb2R1bGUiLCJpZCIsImxvYWRlZCIsImNhbGwiLCJtIiwiYyIsInAiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0Iiwib2JqIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJfc2lySW52YWRlciIsIl9zaXJJbnZhZGVyMiIsIm51bVBpeGVscyIsImludmFkZXJMaXN0IiwiaW52YWRlck9iaiIsImludmFkZXJzIiwic3RvcmFnZVZlcnNpb24iLCJyZW5kZXIiLCJfdGhpcyIsInRoaXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJ1bEVsZW0iLCJjcmVhdGVFbGVtZW50IiwibWFwIiwiaW52YWRlciIsImxpRWxlbSIsImFwcGVuZENoaWxkIiwiZGl2RWxlbSIsImV4cG9ydFN2ZyIsImludmFkZXJJbmZvcyIsImNyZWF0ZVRleHROb2RlIiwibmFtZSIsImhlYWx0aCIsInNwZWVkIiwiYXJtZWQiLCJjb3N0IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2FkRnJvbVN0b3JhZ2UiLCJpbnZhZGVyc0Zyb21TdG9yYWdlIiwicGFyc2UiLCJhZGQiLCJwdXNoIiwicmVtb3ZlIiwiaW52YWRlckluZGV4Iiwic3BsaWNlIiwiZ2V0SXRlbSIsImkiLCJjcmVhdGVEaXYiLCJjbGFzc0xpc3QiLCJkYXRhQXR0cmliIiwiY3JlYXRlQXR0cmlidXRlIiwidmFsdWUiLCJzdHlsZUF0dHJpYiIsInNldEF0dHJpYnV0ZU5vZGUiLCJhbGxQaXhlbHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwicGl4ZWwiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZ0IiwiYmdDb2xvciIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiZ2F0aGVyQXBwZWFyYW5jZUFycmF5IiwiZG9tRWxlbWVudHMiLCJnYXRoZXJQcm9wc0Zyb21GaWVsZHMiLCJwcm9wcyIsImFwcGVhcmFuY2UiLCJwaXhlbHMiLCJuZXdJbnZhZGVyIiwiY3JlYXRlSW52YWRlciIsImNvcHlUZXh0YXJlYUJ0biIsImV2ZW50IiwiY29weVRleHRhcmVhIiwic2VsZWN0IiwiZXhlY0NvbW1hbmQiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfaW52YWRlckludmFkZXIiLCJfaW52YWRlckV4cG9ydFN2ZyIsIl9pbnZhZGVyRXhwb3J0U3ZnMiIsImVtcHR5QXBwZWFyYW5jZSIsImNhbGN1bGF0ZUludmFkZXJDb3N0cyIsImludmFkZXJQcm9wcyIsImFzc2lnbiIsImNyZWF0ZWRJbnZhZGVyIiwicGl4ZWxzQXJyYXkiLCJzdmciLCJyZWR1Y2UiLCJzdmdTdHJpbmciLCJwaXhlbFZhbCIsImluZGV4IiwiY29sb3IiLCJjb2wiLCJyb3ciLCJNYXRoIiwiZmxvb3IiXSwibWFwcGluZ3MiOiJDQUFTLFNBQVVBLEdDSW5CLFFBQUFDLEdBQUFDLEdBR0EsR0FBQUMsRUFBQUQsR0FDQSxNQUFBQyxHQUFBRCxHQUFBRSxPQUdBLElBQUFDLEdBQUFGLEVBQUFELElBQ0FFLFdBQ0FFLEdBQUFKLEVBQ0FLLFFBQUEsRUFVQSxPQU5BUCxHQUFBRSxHQUFBTSxLQUFBSCxFQUFBRCxRQUFBQyxJQUFBRCxRQUFBSCxHQUdBSSxFQUFBRSxRQUFB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LEdBQUFQLE9BQUFRLFFBQ0F6RCxPQUFBLEVBQ0FDLE1BQUEsRUFDQUMsTUFBQSxFQUNBSCxLQUFBLEdBQ0FzQyxXQUFBaUIsR0FDR2xCLEVBRUhvQixHQUFBckQsS0FBQW9ELEVBQUFDLEVBRUEsSUFBQUUsR0FBQUYsQ0FDQSxPQUFBRSxHQUdBOUYsR0FBQTRFLGdCQUNBNUUsRUFBQTBGLGtCQUNBMUYsRUFBQTJGLHlCSmdOTSxTQUFTMUYsRUFBUUQsR0tqUHZCLFlBRUFxRixRQUFBQyxlQUFBdEYsRUFBQSxjQUNBMEQsT0FBQSxHQUVBLElBQUExQixHQUFBLFNBQUFKLEdBQ0EsR0FBQW1FLEdBQUFuRSxFQUFBNkMsV0FBQUMsT0FDQXNCLEVBQUFELEVBQUFFLE9BQUEsU0FBQUMsRUFBQUMsRUFBQUMsR0FDQSxHQUFBQyxHQUFBLFlBQ0FGLE1BQUEsSUFDQUUsRUFBQSxtQkFFQSxJQUFBQyxHQUFBRixFQUFBLEVBQ0FHLEVBQUFDLEtBQUFDLE1BQUFMLEVBQUEsRUFFQSxPQUFBRixHQUFBLFlBQUFJLEVBQUEsUUFBQUMsRUFBQSxzQ0FBQUYsRUFBQSwwQkFDRyw0QkFDSCxPQUFBTCxHQUFBLFNBR0FoRyxHQUFBLFFBQUFnQyxFQUNBL0IsRUFBQUQsVUFBQSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9LFxuLyoqKioqKi8gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bG9hZGVkOiBmYWxzZVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4uL2Rpc3Qvc2NyaXB0cy9cIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblx0XG5cdHZhciBfc2lySW52YWRlciA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cdFxuXHR2YXIgX3NpckludmFkZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2lySW52YWRlcik7XG5cdFxuXHR2YXIgbnVtUGl4ZWxzID0gOSAqIDk7XG5cdFxuXHR2YXIgaW52YWRlckxpc3QgPSAoZnVuY3Rpb24gKCkge1xuXHQgIHZhciBpbnZhZGVyT2JqID0ge1xuXHQgICAgaW52YWRlcnM6IFtdLFxuXHQgICAgc3RvcmFnZVZlcnNpb246IDIsXG5cdCAgICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcblx0ICAgICAgdmFyIF90aGlzID0gdGhpcztcblx0XG5cdCAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0JykuaW5uZXJIVE1MID0gXCJcIjtcblx0ICAgICAgdmFyIHVsRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cdCAgICAgIHRoaXMuaW52YWRlcnMubWFwKGZ1bmN0aW9uIChpbnZhZGVyKSB7XG5cdCAgICAgICAgdmFyIGxpRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cdCAgICAgICAgdWxFbGVtLmFwcGVuZENoaWxkKGxpRWxlbSk7XG5cdCAgICAgICAgdmFyIGRpdkVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0ICAgICAgICBsaUVsZW0uYXBwZW5kQ2hpbGQoZGl2RWxlbSk7XG5cdCAgICAgICAgZGl2RWxlbS5pbm5lckhUTUwgPSBfc2lySW52YWRlcjJbJ2RlZmF1bHQnXS5leHBvcnRTdmcoaW52YWRlcik7XG5cdCAgICAgICAgdmFyIGludmFkZXJJbmZvcyA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCduYW1lOiAnICsgaW52YWRlci5uYW1lICsgXCJcXG5cIiArICdoZWFsdGg6ICcgKyBpbnZhZGVyLmhlYWx0aCArIFwiXFxuXCIgKyAnc3BlZWQ6ICcgKyBpbnZhZGVyLnNwZWVkICsgXCJcXG5cIiArICdhcm1lZDogJyArIGludmFkZXIuYXJtZWQgKyBcIlxcblwiICsgJ2Nvc3Q6ICcgKyBpbnZhZGVyLmNvc3QgKyBcIlxcblwiKTtcblx0ICAgICAgICBsaUVsZW0uYXBwZW5kQ2hpbGQoaW52YWRlckluZm9zKTtcblx0ICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdCcpLmFwcGVuZENoaWxkKHVsRWxlbSk7XG5cdCAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ludmFkZXItbGlzdCcsIEpTT04uc3RyaW5naWZ5KF90aGlzLmludmFkZXJzKSk7XG5cdCAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2ludmFkZXItbGlzdC12ZXJzaW9uJywgX3RoaXMuc3RvcmFnZVZlcnNpb24pO1xuXHQgICAgICB9KTtcblx0ICAgIH0sXG5cdCAgICBsb2FkRnJvbVN0b3JhZ2U6IGZ1bmN0aW9uIGxvYWRGcm9tU3RvcmFnZShpbnZhZGVyc0Zyb21TdG9yYWdlKSB7XG5cdCAgICAgIHRoaXMuaW52YWRlcnMgPSBKU09OLnBhcnNlKGludmFkZXJzRnJvbVN0b3JhZ2UpO1xuXHQgICAgICB0aGlzLnJlbmRlcigpO1xuXHQgICAgfSxcblx0ICAgIGFkZDogZnVuY3Rpb24gYWRkKGludmFkZXIpIHtcblx0ICAgICAgdGhpcy5pbnZhZGVycy5wdXNoKGludmFkZXIpO1xuXHRcblx0ICAgICAgdGhpcy5yZW5kZXIoKTtcblx0ICAgIH0sXG5cdCAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShpbnZhZGVySW5kZXgpIHtcblx0ICAgICAgdGhpcy5pbnZhZGVycy5zcGxpY2UoaW52YWRlckluZGV4LCAxKTtcblx0ICAgICAgdGhpcy5yZW5kZXIoKTtcblx0ICAgIH1cblx0ICB9O1xuXHQgIHJldHVybiBpbnZhZGVyT2JqO1xuXHR9KSgpO1xuXHRcblx0aWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbnZhZGVyLWxpc3QnKSAhPSBudWxsICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbnZhZGVyLWxpc3QtdmVyc2lvbicpID09IGludmFkZXJMaXN0LnN0b3JhZ2VWZXJzaW9uKSB7XG5cdCAgaW52YWRlckxpc3QubG9hZEZyb21TdG9yYWdlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbnZhZGVyLWxpc3QnKSk7XG5cdH1cblx0XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbnVtUGl4ZWxzOyBpKyspIHtcblx0ICB2YXIgY3JlYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdCAgY3JlYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ3BpeGVsJyk7XG5cdCAgdmFyIGRhdGFBdHRyaWIgPSBkb2N1bWVudC5jcmVhdGVBdHRyaWJ1dGUoXCJkYXRhLXBpeGVsLWluZGV4XCIpO1xuXHQgIGRhdGFBdHRyaWIudmFsdWUgPSAnJyArIGk7XG5cdCAgdmFyIHN0eWxlQXR0cmliID0gZG9jdW1lbnQuY3JlYXRlQXR0cmlidXRlKFwic3R5bGVcIik7XG5cdCAgc3R5bGVBdHRyaWIudmFsdWUgPSBcImJhY2tncm91bmQtY29sb3I6YmxhY2s7XCI7XG5cdCAgY3JlYXRlRGl2LnNldEF0dHJpYnV0ZU5vZGUoZGF0YUF0dHJpYik7XG5cdCAgY3JlYXRlRGl2LnNldEF0dHJpYnV0ZU5vZGUoc3R5bGVBdHRyaWIpO1xuXHQgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGl4ZWwtZWRpdFwiKS5hcHBlbmRDaGlsZChjcmVhdGVEaXYpO1xuXHR9XG5cdHZhciBhbGxQaXhlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGl4ZWwnKTtcblx0XG5cdFtdLm1hcC5jYWxsKGFsbFBpeGVscywgZnVuY3Rpb24gKHBpeGVsKSB7XG5cdCAgcGl4ZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZnVuY3Rpb24gKGV2dCkge1xuXHQgICAgdmFyIGJnQ29sb3IgPSBwaXhlbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I7XG5cdCAgICBpZiAoYmdDb2xvciA9PT0gXCJibGFja1wiKSB7XG5cdCAgICAgIHBpeGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHBpeGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiYmxhY2tcIjtcblx0ICAgIH1cblx0ICB9KTtcblx0fSk7XG5cdFxuXHR2YXIgZ2F0aGVyQXBwZWFyYW5jZUFycmF5ID0gZnVuY3Rpb24gZ2F0aGVyQXBwZWFyYW5jZUFycmF5KGRvbUVsZW1lbnRzKSB7XG5cdCAgcmV0dXJuIFtdLm1hcC5jYWxsKGRvbUVsZW1lbnRzLCBmdW5jdGlvbiAocGl4ZWwpIHtcblx0ICAgIHZhciBiZ0NvbG9yID0gcGl4ZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yO1xuXHRcblx0ICAgIGlmIChiZ0NvbG9yID09PSBcImJsYWNrXCIpIHtcblx0ICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgcmV0dXJuIHRydWU7XG5cdCAgICB9XG5cdCAgfSk7XG5cdH07XG5cdFxuXHR2YXIgZ2F0aGVyUHJvcHNGcm9tRmllbGRzID0gZnVuY3Rpb24gZ2F0aGVyUHJvcHNGcm9tRmllbGRzKCkge1xuXHQgIHZhciBwcm9wcyA9IHtcblx0ICAgIGhlYWx0aDogK2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJpbnZhZGVyLmhlYWx0aFwiXScpLnZhbHVlLFxuXHQgICAgc3BlZWQ6ICtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiaW52YWRlci5zcGVlZFwiXScpLnZhbHVlLFxuXHQgICAgYXJtZWQ6ICtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiaW52YWRlci5hcm1lZFwiXScpLnZhbHVlLFxuXHQgICAgbmFtZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImludmFkZXIubmFtZVwiXScpLnZhbHVlXG5cdCAgfTtcblx0ICAvL2FwcGVhcmFuY2U6IHt9XG5cdCAgcHJvcHMuYXBwZWFyYW5jZSA9IHsgcGl4ZWxzOiBnYXRoZXJBcHBlYXJhbmNlQXJyYXkoYWxsUGl4ZWxzKSB9O1xuXHRcblx0ICByZXR1cm4gcHJvcHM7XG5cdH07XG5cdFxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2F2ZScpLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZnVuY3Rpb24gKGV2dCkge1xuXHQgIHZhciBwcm9wcyA9IGdhdGhlclByb3BzRnJvbUZpZWxkcygpO1xuXHQgIHZhciBuZXdJbnZhZGVyID0gX3NpckludmFkZXIyWydkZWZhdWx0J10uY3JlYXRlSW52YWRlcihwcm9wcyk7XG5cdFxuXHQgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJpbnZhZGVyLmNvc3RcIl0nKS52YWx1ZSA9IG5ld0ludmFkZXIuY29zdDtcblx0ICBpbnZhZGVyTGlzdC5hZGQobmV3SW52YWRlcik7XG5cdH0pO1xuXHRcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV4cG9ydC1saXN0JykuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBmdW5jdGlvbiAoZXZ0KSB7XG5cdCAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhbmVsLmV4cG9ydCB0ZXh0YXJlYScpLmlubmVySFRNTCA9IEpTT04uc3RyaW5naWZ5KGludmFkZXJMaXN0LmludmFkZXJzKTtcblx0fSk7XG5cdFxuXHR2YXIgY29weVRleHRhcmVhQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXRleHRhcmVhY29weWJ0bicpO1xuXHRcblx0Y29weVRleHRhcmVhQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdCAgdmFyIGNvcHlUZXh0YXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYW5lbC5leHBvcnQgdGV4dGFyZWEnKTtcblx0ICBjb3B5VGV4dGFyZWEuc2VsZWN0KCk7XG5cdFxuXHQgIHRyeSB7XG5cdCAgICB2YXIgc3VjY2Vzc2Z1bCA9IGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XG5cdCAgICB2YXIgbXNnID0gc3VjY2Vzc2Z1bCA/ICdzdWNjZXNzZnVsJyA6ICd1bnN1Y2Nlc3NmdWwnO1xuXHQgIH0gY2F0Y2ggKGVycikge1xuXHQgICAgY29uc29sZS5sb2coJ09vcHMsIHVuYWJsZSB0byBjb3B5Jyk7XG5cdCAgfVxuXHR9KTtcblxuLyoqKi8gfSxcbi8qIDEgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcblx0ICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0XG5cdGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblx0XG5cdHZhciBfaW52YWRlckludmFkZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXHRcblx0dmFyIF9pbnZhZGVyRXhwb3J0U3ZnID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblx0XG5cdHZhciBfaW52YWRlckV4cG9ydFN2ZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhZGVyRXhwb3J0U3ZnKTtcblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IHtcblx0ICBjcmVhdGVJbnZhZGVyOiBfaW52YWRlckludmFkZXIuY3JlYXRlSW52YWRlcixcblx0ICBlbXB0eUFwcGVhcmFuY2U6IF9pbnZhZGVySW52YWRlci5lbXB0eUFwcGVhcmFuY2UsXG5cdCAgY2FsY3VsYXRlSW52YWRlckNvc3RzOiBfaW52YWRlckludmFkZXIuY2FsY3VsYXRlSW52YWRlckNvc3RzLFxuXHQgIGV4cG9ydFN2ZzogX2ludmFkZXJFeHBvcnRTdmcyWydkZWZhdWx0J11cblx0fTtcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH0sXG4vKiAyICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvLyB0aGUgcGl4ZWxzIHRvIGFsbG93IGEgOXg5IG1hdHJpeFxuXHRcInVzZSBzdHJpY3RcIjtcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHQgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHR2YXIgbnVtUGl4ZWxzID0gODE7XG5cdFxuXHQvLyB0aGUgZW1wdHkgYXBwZWFyYW5jZSBvZiBhbGwgbm9uIHNldCBwaXhlbHNcblx0dmFyIGVtcHR5QXBwZWFyYW5jZSA9IHtcblx0ICBwaXhlbHM6IFtdXG5cdH07XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbnVtUGl4ZWxzOyBpKyspIHtcblx0ICBlbXB0eUFwcGVhcmFuY2UucGl4ZWxzLnB1c2goZmFsc2UpO1xuXHR9XG5cdFxuXHR2YXIgY2FsY3VsYXRlSW52YWRlckNvc3RzID0gZnVuY3Rpb24gY2FsY3VsYXRlSW52YWRlckNvc3RzKGludmFkZXIpIHtcblx0ICByZXR1cm4gaW52YWRlci5oZWFsdGggKyBpbnZhZGVyLnNwZWVkICsgaW52YWRlci5hcm1lZDtcblx0fTtcblx0XG5cdHZhciBjcmVhdGVJbnZhZGVyID0gZnVuY3Rpb24gY3JlYXRlSW52YWRlcihwcm9wcykge1xuXHQgIHZhciBpbnZhZGVyUHJvcHMgPSBPYmplY3QuYXNzaWduKHtcblx0ICAgIGhlYWx0aDogMCwgLy8gaGVhbHRoIHBvaW50cyBvZiB0aGUgaW52YWRlclxuXHQgICAgc3BlZWQ6IDAsIC8vIHNwZWVkIG9mIHRoZSBpbnZhZGVyXG5cdCAgICBhcm1lZDogMCxcblx0ICAgIG5hbWU6IFwiXCIsXG5cdCAgICBhcHBlYXJhbmNlOiBlbXB0eUFwcGVhcmFuY2Vcblx0ICB9LCBwcm9wcyk7XG5cdFxuXHQgIGludmFkZXJQcm9wcy5jb3N0ID0gY2FsY3VsYXRlSW52YWRlckNvc3RzKGludmFkZXJQcm9wcyk7XG5cdFxuXHQgIHZhciBjcmVhdGVkSW52YWRlciA9IGludmFkZXJQcm9wcztcblx0ICByZXR1cm4gY3JlYXRlZEludmFkZXI7XG5cdH07XG5cdFxuXHRleHBvcnRzLmNyZWF0ZUludmFkZXIgPSBjcmVhdGVJbnZhZGVyO1xuXHRleHBvcnRzLmVtcHR5QXBwZWFyYW5jZSA9IGVtcHR5QXBwZWFyYW5jZTtcblx0ZXhwb3J0cy5jYWxjdWxhdGVJbnZhZGVyQ29zdHMgPSBjYWxjdWxhdGVJbnZhZGVyQ29zdHM7XG5cbi8qKiovIH0sXG4vKiAzICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvKlxuXHQ8c3ZnIHdpZHRoPVwiOVwiIGhlaWdodD1cIjlcIj48cmVjdCB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCIxXCIgaGVpZ2h0PVwiMVwiIHN0eWxlPVwiZmlsbDpyZ2IoMCwwLDApOyBzdHJva2Utd2lkdGg6MFwiIC8+PC9zdmc+XG5cdCovXG5cdFxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgdmFsdWU6IHRydWVcblx0fSk7XG5cdHZhciBleHBvcnRTdmcgPSBmdW5jdGlvbiBleHBvcnRTdmcoaW52YWRlcikge1xuXHQgIHZhciBwaXhlbHNBcnJheSA9IGludmFkZXIuYXBwZWFyYW5jZS5waXhlbHM7XG5cdCAgdmFyIHN2ZyA9IHBpeGVsc0FycmF5LnJlZHVjZShmdW5jdGlvbiAoc3ZnU3RyaW5nLCBwaXhlbFZhbCwgaW5kZXgpIHtcblx0ICAgIHZhciBjb2xvciA9ICdyZ2IoMCwwLDApJztcblx0ICAgIGlmIChwaXhlbFZhbCA9PT0gdHJ1ZSkge1xuXHQgICAgICBjb2xvciA9ICdyZ2IoMjU1LDI1NSwyNTUpJztcblx0ICAgIH1cblx0ICAgIHZhciBjb2wgPSBpbmRleCAlIDk7XG5cdCAgICB2YXIgcm93ID0gTWF0aC5mbG9vcihpbmRleCAvIDkpO1xuXHRcblx0ICAgIHJldHVybiBzdmdTdHJpbmcgKyAnPHJlY3QgeD1cIicgKyBjb2wgKyAnXCIgeT1cIicgKyByb3cgKyAnXCIgd2lkdGg9XCIxXCIgaGVpZ2h0PVwiMVwiIHN0eWxlPVwiZmlsbDonICsgY29sb3IgKyAnOyBzdHJva2Utd2lkdGg6MFwiIC8+XFxuJztcblx0ICB9LCAnPHN2ZyB2aWV3Qm94PVwiMCAwIDkgOVwiPlxcbicpO1xuXHQgIHJldHVybiBzdmcgKyAnPC9zdmc+Jztcblx0fTtcblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IGV4cG9ydFN2Zztcblx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cbi8qKiovIH1cbi8qKioqKiovIF0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBtYWluLmJ1bmRsZS5qcyIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4uL2Rpc3Qvc2NyaXB0cy9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBmYzRhZGEzZDhjMjk5NGE0MTk2NyIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3NpckludmFkZXIgPSByZXF1aXJlKCdzaXItaW52YWRlcicpO1xuXG52YXIgX3NpckludmFkZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2lySW52YWRlcik7XG5cbnZhciBudW1QaXhlbHMgPSA5ICogOTtcblxudmFyIGludmFkZXJMaXN0ID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIGludmFkZXJPYmogPSB7XG4gICAgaW52YWRlcnM6IFtdLFxuICAgIHN0b3JhZ2VWZXJzaW9uOiAyLFxuICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QnKS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgdmFyIHVsRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICB0aGlzLmludmFkZXJzLm1hcChmdW5jdGlvbiAoaW52YWRlcikge1xuICAgICAgICB2YXIgbGlFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgdWxFbGVtLmFwcGVuZENoaWxkKGxpRWxlbSk7XG4gICAgICAgIHZhciBkaXZFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxpRWxlbS5hcHBlbmRDaGlsZChkaXZFbGVtKTtcbiAgICAgICAgZGl2RWxlbS5pbm5lckhUTUwgPSBfc2lySW52YWRlcjJbJ2RlZmF1bHQnXS5leHBvcnRTdmcoaW52YWRlcik7XG4gICAgICAgIHZhciBpbnZhZGVySW5mb3MgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnbmFtZTogJyArIGludmFkZXIubmFtZSArIFwiXFxuXCIgKyAnaGVhbHRoOiAnICsgaW52YWRlci5oZWFsdGggKyBcIlxcblwiICsgJ3NwZWVkOiAnICsgaW52YWRlci5zcGVlZCArIFwiXFxuXCIgKyAnYXJtZWQ6ICcgKyBpbnZhZGVyLmFybWVkICsgXCJcXG5cIiArICdjb3N0OiAnICsgaW52YWRlci5jb3N0ICsgXCJcXG5cIik7XG4gICAgICAgIGxpRWxlbS5hcHBlbmRDaGlsZChpbnZhZGVySW5mb3MpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdCcpLmFwcGVuZENoaWxkKHVsRWxlbSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpbnZhZGVyLWxpc3QnLCBKU09OLnN0cmluZ2lmeShfdGhpcy5pbnZhZGVycykpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaW52YWRlci1saXN0LXZlcnNpb24nLCBfdGhpcy5zdG9yYWdlVmVyc2lvbik7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGxvYWRGcm9tU3RvcmFnZTogZnVuY3Rpb24gbG9hZEZyb21TdG9yYWdlKGludmFkZXJzRnJvbVN0b3JhZ2UpIHtcbiAgICAgIHRoaXMuaW52YWRlcnMgPSBKU09OLnBhcnNlKGludmFkZXJzRnJvbVN0b3JhZ2UpO1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9LFxuICAgIGFkZDogZnVuY3Rpb24gYWRkKGludmFkZXIpIHtcbiAgICAgIHRoaXMuaW52YWRlcnMucHVzaChpbnZhZGVyKTtcblxuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKGludmFkZXJJbmRleCkge1xuICAgICAgdGhpcy5pbnZhZGVycy5zcGxpY2UoaW52YWRlckluZGV4LCAxKTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gaW52YWRlck9iajtcbn0pKCk7XG5cbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW52YWRlci1saXN0JykgIT0gbnVsbCAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW52YWRlci1saXN0LXZlcnNpb24nKSA9PSBpbnZhZGVyTGlzdC5zdG9yYWdlVmVyc2lvbikge1xuICBpbnZhZGVyTGlzdC5sb2FkRnJvbVN0b3JhZ2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ludmFkZXItbGlzdCcpKTtcbn1cblxuZm9yICh2YXIgaSA9IDA7IGkgPCBudW1QaXhlbHM7IGkrKykge1xuICB2YXIgY3JlYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNyZWF0ZURpdi5jbGFzc0xpc3QuYWRkKCdwaXhlbCcpO1xuICB2YXIgZGF0YUF0dHJpYiA9IGRvY3VtZW50LmNyZWF0ZUF0dHJpYnV0ZShcImRhdGEtcGl4ZWwtaW5kZXhcIik7XG4gIGRhdGFBdHRyaWIudmFsdWUgPSAnJyArIGk7XG4gIHZhciBzdHlsZUF0dHJpYiA9IGRvY3VtZW50LmNyZWF0ZUF0dHJpYnV0ZShcInN0eWxlXCIpO1xuICBzdHlsZUF0dHJpYi52YWx1ZSA9IFwiYmFja2dyb3VuZC1jb2xvcjpibGFjaztcIjtcbiAgY3JlYXRlRGl2LnNldEF0dHJpYnV0ZU5vZGUoZGF0YUF0dHJpYik7XG4gIGNyZWF0ZURpdi5zZXRBdHRyaWJ1dGVOb2RlKHN0eWxlQXR0cmliKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5waXhlbC1lZGl0XCIpLmFwcGVuZENoaWxkKGNyZWF0ZURpdik7XG59XG52YXIgYWxsUGl4ZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBpeGVsJyk7XG5cbltdLm1hcC5jYWxsKGFsbFBpeGVscywgZnVuY3Rpb24gKHBpeGVsKSB7XG4gIHBpeGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uIChldnQpIHtcbiAgICB2YXIgYmdDb2xvciA9IHBpeGVsLnN0eWxlLmJhY2tncm91bmRDb2xvcjtcbiAgICBpZiAoYmdDb2xvciA9PT0gXCJibGFja1wiKSB7XG4gICAgICBwaXhlbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBpeGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiYmxhY2tcIjtcbiAgICB9XG4gIH0pO1xufSk7XG5cbnZhciBnYXRoZXJBcHBlYXJhbmNlQXJyYXkgPSBmdW5jdGlvbiBnYXRoZXJBcHBlYXJhbmNlQXJyYXkoZG9tRWxlbWVudHMpIHtcbiAgcmV0dXJuIFtdLm1hcC5jYWxsKGRvbUVsZW1lbnRzLCBmdW5jdGlvbiAocGl4ZWwpIHtcbiAgICB2YXIgYmdDb2xvciA9IHBpeGVsLnN0eWxlLmJhY2tncm91bmRDb2xvcjtcblxuICAgIGlmIChiZ0NvbG9yID09PSBcImJsYWNrXCIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbn07XG5cbnZhciBnYXRoZXJQcm9wc0Zyb21GaWVsZHMgPSBmdW5jdGlvbiBnYXRoZXJQcm9wc0Zyb21GaWVsZHMoKSB7XG4gIHZhciBwcm9wcyA9IHtcbiAgICBoZWFsdGg6ICtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiaW52YWRlci5oZWFsdGhcIl0nKS52YWx1ZSxcbiAgICBzcGVlZDogK2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJpbnZhZGVyLnNwZWVkXCJdJykudmFsdWUsXG4gICAgYXJtZWQ6ICtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiaW52YWRlci5hcm1lZFwiXScpLnZhbHVlLFxuICAgIG5hbWU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJpbnZhZGVyLm5hbWVcIl0nKS52YWx1ZVxuICB9O1xuICAvL2FwcGVhcmFuY2U6IHt9XG4gIHByb3BzLmFwcGVhcmFuY2UgPSB7IHBpeGVsczogZ2F0aGVyQXBwZWFyYW5jZUFycmF5KGFsbFBpeGVscykgfTtcblxuICByZXR1cm4gcHJvcHM7XG59O1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2F2ZScpLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZnVuY3Rpb24gKGV2dCkge1xuICB2YXIgcHJvcHMgPSBnYXRoZXJQcm9wc0Zyb21GaWVsZHMoKTtcbiAgdmFyIG5ld0ludmFkZXIgPSBfc2lySW52YWRlcjJbJ2RlZmF1bHQnXS5jcmVhdGVJbnZhZGVyKHByb3BzKTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiaW52YWRlci5jb3N0XCJdJykudmFsdWUgPSBuZXdJbnZhZGVyLmNvc3Q7XG4gIGludmFkZXJMaXN0LmFkZChuZXdJbnZhZGVyKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXhwb3J0LWxpc3QnKS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGZ1bmN0aW9uIChldnQpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhbmVsLmV4cG9ydCB0ZXh0YXJlYScpLmlubmVySFRNTCA9IEpTT04uc3RyaW5naWZ5KGludmFkZXJMaXN0LmludmFkZXJzKTtcbn0pO1xuXG52YXIgY29weVRleHRhcmVhQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXRleHRhcmVhY29weWJ0bicpO1xuXG5jb3B5VGV4dGFyZWFCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgdmFyIGNvcHlUZXh0YXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYW5lbC5leHBvcnQgdGV4dGFyZWEnKTtcbiAgY29weVRleHRhcmVhLnNlbGVjdCgpO1xuXG4gIHRyeSB7XG4gICAgdmFyIHN1Y2Nlc3NmdWwgPSBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xuICAgIHZhciBtc2cgPSBzdWNjZXNzZnVsID8gJ3N1Y2Nlc3NmdWwnIDogJ3Vuc3VjY2Vzc2Z1bCc7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKCdPb3BzLCB1bmFibGUgdG8gY29weScpO1xuICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3RhcmdldC9tYWluLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9pbnZhZGVySW52YWRlciA9IHJlcXVpcmUoJy4vaW52YWRlci9pbnZhZGVyJyk7XG5cbnZhciBfaW52YWRlckV4cG9ydFN2ZyA9IHJlcXVpcmUoJy4vaW52YWRlci9leHBvcnQtc3ZnJyk7XG5cbnZhciBfaW52YWRlckV4cG9ydFN2ZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhZGVyRXhwb3J0U3ZnKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0ge1xuICBjcmVhdGVJbnZhZGVyOiBfaW52YWRlckludmFkZXIuY3JlYXRlSW52YWRlcixcbiAgZW1wdHlBcHBlYXJhbmNlOiBfaW52YWRlckludmFkZXIuZW1wdHlBcHBlYXJhbmNlLFxuICBjYWxjdWxhdGVJbnZhZGVyQ29zdHM6IF9pbnZhZGVySW52YWRlci5jYWxjdWxhdGVJbnZhZGVyQ29zdHMsXG4gIGV4cG9ydFN2ZzogX2ludmFkZXJFeHBvcnRTdmcyWydkZWZhdWx0J11cbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2lyLWludmFkZXIvZGlzdC9tYWluLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHRoZSBwaXhlbHMgdG8gYWxsb3cgYSA5eDkgbWF0cml4XG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBudW1QaXhlbHMgPSA4MTtcblxuLy8gdGhlIGVtcHR5IGFwcGVhcmFuY2Ugb2YgYWxsIG5vbiBzZXQgcGl4ZWxzXG52YXIgZW1wdHlBcHBlYXJhbmNlID0ge1xuICBwaXhlbHM6IFtdXG59O1xuZm9yICh2YXIgaSA9IDA7IGkgPCBudW1QaXhlbHM7IGkrKykge1xuICBlbXB0eUFwcGVhcmFuY2UucGl4ZWxzLnB1c2goZmFsc2UpO1xufVxuXG52YXIgY2FsY3VsYXRlSW52YWRlckNvc3RzID0gZnVuY3Rpb24gY2FsY3VsYXRlSW52YWRlckNvc3RzKGludmFkZXIpIHtcbiAgcmV0dXJuIGludmFkZXIuaGVhbHRoICsgaW52YWRlci5zcGVlZCArIGludmFkZXIuYXJtZWQ7XG59O1xuXG52YXIgY3JlYXRlSW52YWRlciA9IGZ1bmN0aW9uIGNyZWF0ZUludmFkZXIocHJvcHMpIHtcbiAgdmFyIGludmFkZXJQcm9wcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIGhlYWx0aDogMCwgLy8gaGVhbHRoIHBvaW50cyBvZiB0aGUgaW52YWRlclxuICAgIHNwZWVkOiAwLCAvLyBzcGVlZCBvZiB0aGUgaW52YWRlclxuICAgIGFybWVkOiAwLFxuICAgIG5hbWU6IFwiXCIsXG4gICAgYXBwZWFyYW5jZTogZW1wdHlBcHBlYXJhbmNlXG4gIH0sIHByb3BzKTtcblxuICBpbnZhZGVyUHJvcHMuY29zdCA9IGNhbGN1bGF0ZUludmFkZXJDb3N0cyhpbnZhZGVyUHJvcHMpO1xuXG4gIHZhciBjcmVhdGVkSW52YWRlciA9IGludmFkZXJQcm9wcztcbiAgcmV0dXJuIGNyZWF0ZWRJbnZhZGVyO1xufTtcblxuZXhwb3J0cy5jcmVhdGVJbnZhZGVyID0gY3JlYXRlSW52YWRlcjtcbmV4cG9ydHMuZW1wdHlBcHBlYXJhbmNlID0gZW1wdHlBcHBlYXJhbmNlO1xuZXhwb3J0cy5jYWxjdWxhdGVJbnZhZGVyQ29zdHMgPSBjYWxjdWxhdGVJbnZhZGVyQ29zdHM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Npci1pbnZhZGVyL2Rpc3QvaW52YWRlci9pbnZhZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG48c3ZnIHdpZHRoPVwiOVwiIGhlaWdodD1cIjlcIj48cmVjdCB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCIxXCIgaGVpZ2h0PVwiMVwiIHN0eWxlPVwiZmlsbDpyZ2IoMCwwLDApOyBzdHJva2Utd2lkdGg6MFwiIC8+PC9zdmc+XG4qL1xuXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIGV4cG9ydFN2ZyA9IGZ1bmN0aW9uIGV4cG9ydFN2ZyhpbnZhZGVyKSB7XG4gIHZhciBwaXhlbHNBcnJheSA9IGludmFkZXIuYXBwZWFyYW5jZS5waXhlbHM7XG4gIHZhciBzdmcgPSBwaXhlbHNBcnJheS5yZWR1Y2UoZnVuY3Rpb24gKHN2Z1N0cmluZywgcGl4ZWxWYWwsIGluZGV4KSB7XG4gICAgdmFyIGNvbG9yID0gJ3JnYigwLDAsMCknO1xuICAgIGlmIChwaXhlbFZhbCA9PT0gdHJ1ZSkge1xuICAgICAgY29sb3IgPSAncmdiKDI1NSwyNTUsMjU1KSc7XG4gICAgfVxuICAgIHZhciBjb2wgPSBpbmRleCAlIDk7XG4gICAgdmFyIHJvdyA9IE1hdGguZmxvb3IoaW5kZXggLyA5KTtcblxuICAgIHJldHVybiBzdmdTdHJpbmcgKyAnPHJlY3QgeD1cIicgKyBjb2wgKyAnXCIgeT1cIicgKyByb3cgKyAnXCIgd2lkdGg9XCIxXCIgaGVpZ2h0PVwiMVwiIHN0eWxlPVwiZmlsbDonICsgY29sb3IgKyAnOyBzdHJva2Utd2lkdGg6MFwiIC8+XFxuJztcbiAgfSwgJzxzdmcgdmlld0JveD1cIjAgMCA5IDlcIj5cXG4nKTtcbiAgcmV0dXJuIHN2ZyArICc8L3N2Zz4nO1xufTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gZXhwb3J0U3ZnO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Npci1pbnZhZGVyL2Rpc3QvaW52YWRlci9leHBvcnQtc3ZnLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=
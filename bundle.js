!function(n){var e={};function t(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return n[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)t.d(o,i,function(e){return n[e]}.bind(null,i));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){"use strict";function o(n){return n[0].toUpperCase()+n.slice(1).toLowerCase()}function i(n){let e=n.url.split("/")[6];let t=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${e}.gif`;return console.log(n),`\n      <div class="pokemonCard" id="${e}">\n      <img src=${t}>\n          <h3>${o(n.name)}</h3>\n      </div>`}t.r(e);var r=document.getElementById("main");let u=0;function c(n){var e;(e=n,fetch("https://pokeapi.co/api/v2/pokemon/"+e).then((function(n){return n.json()}))).then((function(n){r.innerHTML=function(n){return`\n      <div class="${n.types[0].type.name}">\n      <h1>${o(n.name)}</h1>\n      <p>\n      Height: ${n.height}\n      </p>\n      <img src="${n.sprites.other.dream_world.front_default}">\n      <div>\n      <img src="${n.sprites.front_default}">\n      </div>\n      <div>\n      <button id="back">Back</button>\n      </div>\n      </div>`}(n),document.getElementById("back").addEventListener("click",(function(){d()}))}))}function d(n,e){r.innerHTML="\n    <h3>Loading...<h3>",function(n,e){return fetch(`https://pokeapi.co/api/v2/pokemon?limit=${e}&offset=${n*e}`).then((function(n){return n.json()})).then((function(n){return n.results}))}(n,e).then((function(n){r.innerHTML=function(n,e){return`\n      <h1>My Pokemons</h1>\n      ${0==e?"":'<button id="previous">Previous</button>'}\n      <button id="next">Next</button>\n      <div id="pokemonList">\n      ${n.map(i).join("")}\n      </div>`}(n,u);let t=document.getElementById("previous");t&&t.addEventListener("click",(function(){u--,d(u,e)})),document.getElementById("next").addEventListener("click",(function(){u++,d(u,e)})),document.getElementById("pokemonList").childNodes.forEach((function(n){n.addEventListener("click",(function(n){c(n.currentTarget.id)}))}))})).catch((function(n){r.innerHTML=function(n){return`\n    <h3>Unable to get Pokemons</h3>\n    <p>${n.message}</p>\n    <p>Check your internet connection</p>\n    `}(n)}))}r.innerHTML='<h1>My Pokedex</h1>\n          <button id="view">View pokemons</button>\n          ',document.getElementById("view").addEventListener("click",(function(){d(u,30)}))}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy5qcyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsImdldENhcGl0YWxpemVkIiwic3RyIiwidG9VcHBlckNhc2UiLCJzbGljZSIsInRvTG93ZXJDYXNlIiwiY3JlYXRlUG9rZW1vbkNhcmRNYXJrdXAiLCJwb2tlbW9uIiwicG9rZW1vbklkIiwidXJsIiwic3BsaXQiLCJpbWFnZVVybCIsImNvbnNvbGUiLCJsb2ciLCJtYWluTm9kZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdXJyZW50UGFnZSIsInJlbmRlclBva2Vtb24iLCJpZCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImlubmVySFRNTCIsInR5cGVzIiwidHlwZSIsImhlaWdodCIsInNwcml0ZXMiLCJvdGhlciIsImRyZWFtX3dvcmxkIiwiZnJvbnRfZGVmYXVsdCIsImNyZWF0ZVBva2Vtb25NYXJrdXAiLCJhZGRFdmVudExpc3RlbmVyIiwicmVuZGVyUG9rZW1vbnMiLCJwYWdlIiwicGVyUGFnZSIsImRhdGEiLCJyZXN1bHRzIiwiZmV0Y2hQb2tlbW9ucyIsInBva2Vtb25zIiwibWFwIiwiam9pbiIsImNyZWF0ZVBva2Vtb25zTWFya3VwIiwicHJldmlvdXNCdXR0b25Ob2RlIiwiY2hpbGROb2RlcyIsImZvckVhY2giLCJjaGlsZCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImNhdGNoIiwiZXJyb3IiLCJtZXNzYWdlIiwiY3JlYXRlUG9rZW1vbnNFcnJvck1hcmt1cCJdLCJtYXBwaW5ncyI6ImFBQ0UsSUFBSUEsRUFBbUIsR0FHdkIsU0FBU0MsRUFBb0JDLEdBRzVCLEdBQUdGLEVBQWlCRSxHQUNuQixPQUFPRixFQUFpQkUsR0FBVUMsUUFHbkMsSUFBSUMsRUFBU0osRUFBaUJFLEdBQVksQ0FDekNHLEVBQUdILEVBQ0hJLEdBQUcsRUFDSEgsUUFBUyxJQVVWLE9BTkFJLEVBQVFMLEdBQVVNLEtBQUtKLEVBQU9ELFFBQVNDLEVBQVFBLEVBQU9ELFFBQVNGLEdBRy9ERyxFQUFPRSxHQUFJLEVBR0pGLEVBQU9ELFFBS2ZGLEVBQW9CUSxFQUFJRixFQUd4Qk4sRUFBb0JTLEVBQUlWLEVBR3hCQyxFQUFvQlUsRUFBSSxTQUFTUixFQUFTUyxFQUFNQyxHQUMzQ1osRUFBb0JhLEVBQUVYLEVBQVNTLElBQ2xDRyxPQUFPQyxlQUFlYixFQUFTUyxFQUFNLENBQUVLLFlBQVksRUFBTUMsSUFBS0wsS0FLaEVaLEVBQW9Ca0IsRUFBSSxTQUFTaEIsR0FDWCxvQkFBWGlCLFFBQTBCQSxPQUFPQyxhQUMxQ04sT0FBT0MsZUFBZWIsRUFBU2lCLE9BQU9DLFlBQWEsQ0FBRUMsTUFBTyxXQUU3RFAsT0FBT0MsZUFBZWIsRUFBUyxhQUFjLENBQUVtQixPQUFPLEtBUXZEckIsRUFBb0JzQixFQUFJLFNBQVNELEVBQU9FLEdBRXZDLEdBRFUsRUFBUEEsSUFBVUYsRUFBUXJCLEVBQW9CcUIsSUFDL0IsRUFBUEUsRUFBVSxPQUFPRixFQUNwQixHQUFXLEVBQVBFLEdBQThCLGlCQUFWRixHQUFz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QU1DLCtEQ0dZQyxDQUEwQkYsTUFLbkRyQyxFQUFTVSxVRDFERixzRkM0RGNULFNBQVNDLGVBQWUsUUFDOUJpQixpQkFBaUIsU0FBUyxXQUN2Q0MsRUFBZWpCLEVBcERMIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRDYXBpdGFsaXplZChzdHIpIHtcclxuICAgIHJldHVybiBzdHJbMF0udG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKS50b0xvd2VyQ2FzZSgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SWRGcm9tVXJsKHVybCkge1xyXG4gIHJldHVybiB1cmwuc3BsaXQoXCIvXCIpWzZdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QW5pbWF0ZWRJbWFnZUZyb21JZChpZCkge1xyXG4gIHJldHVybiBgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1Bva2VBUEkvc3ByaXRlcy9tYXN0ZXIvc3ByaXRlcy9wb2tlbW9uL3ZlcnNpb25zL2dlbmVyYXRpb24tdi9ibGFjay13aGl0ZS9hbmltYXRlZC8ke2lkfS5naWZgO1xyXG59IiwiaW1wb3J0IHsgZ2V0Q2FwaXRhbGl6ZWQsIGdldElkRnJvbVVybCwgZ2V0QW5pbWF0ZWRJbWFnZUZyb21JZCB9IGZyb20gXCIuL3V0aWxzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSG9tZU1hcmt1cCgpIHtcclxuICByZXR1cm4gYDxoMT5NeSBQb2tlZGV4PC9oMT5cclxuICAgICAgICAgIDxidXR0b24gaWQ9XCJ2aWV3XCI+VmlldyBwb2tlbW9uczwvYnV0dG9uPlxyXG4gICAgICAgICAgYDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBva2Vtb25DYXJkTWFya3VwKHBva2Vtb24pIHtcclxuICBsZXQgcG9rZW1vbklkID0gZ2V0SWRGcm9tVXJsKHBva2Vtb24udXJsKTtcclxuICBsZXQgaW1hZ2VVcmwgPSBnZXRBbmltYXRlZEltYWdlRnJvbUlkKHBva2Vtb25JZCk7XHJcbiAgY29uc29sZS5sb2cocG9rZW1vbik7XHJcbiAgcmV0dXJuIGBcclxuICAgICAgPGRpdiBjbGFzcz1cInBva2Vtb25DYXJkXCIgaWQ9XCIke3Bva2Vtb25JZH1cIj5cclxuICAgICAgPGltZyBzcmM9JHtpbWFnZVVybH0+XHJcbiAgICAgICAgICA8aDM+JHtnZXRDYXBpdGFsaXplZChwb2tlbW9uLm5hbWUpfTwvaDM+XHJcbiAgICAgIDwvZGl2PmA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQb2tlbW9uc01hcmt1cChwb2tlbW9ucywgY3VycmVudFBhZ2UpIHtcclxuICB2YXIgcG9rZW1vbkxpc3QgPSBwb2tlbW9ucy5tYXAoY3JlYXRlUG9rZW1vbkNhcmRNYXJrdXApLmpvaW4oXCJcIik7XHJcblxyXG4gIGxldCBpc0ZpcnN0UGFnZSA9IGN1cnJlbnRQYWdlID09IDA7XHJcblxyXG4gIHJldHVybiBgXHJcbiAgICAgIDxoMT5NeSBQb2tlbW9uczwvaDE+XHJcbiAgICAgICR7aXNGaXJzdFBhZ2UgPyBcIlwiIDogYDxidXR0b24gaWQ9XCJwcmV2aW91c1wiPlByZXZpb3VzPC9idXR0b24+YH1cclxuICAgICAgPGJ1dHRvbiBpZD1cIm5leHRcIj5OZXh0PC9idXR0b24+XHJcbiAgICAgIDxkaXYgaWQ9XCJwb2tlbW9uTGlzdFwiPlxyXG4gICAgICAke3Bva2Vtb25MaXN0fVxyXG4gICAgICA8L2Rpdj5gO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUG9rZW1vbk1hcmt1cChwb2tlbW9uKSB7XHJcbiAgcmV0dXJuIGBcclxuICAgICAgPGRpdiBjbGFzcz1cIiR7cG9rZW1vbi50eXBlc1swXS50eXBlLm5hbWV9XCI+XHJcbiAgICAgIDxoMT4ke2dldENhcGl0YWxpemVkKHBva2Vtb24ubmFtZSl9PC9oMT5cclxuICAgICAgPHA+XHJcbiAgICAgIEhlaWdodDogJHtwb2tlbW9uLmhlaWdodH1cclxuICAgICAgPC9wPlxyXG4gICAgICA8aW1nIHNyYz1cIiR7cG9rZW1vbi5zcHJpdGVzLm90aGVyLmRyZWFtX3dvcmxkLmZyb250X2RlZmF1bHR9XCI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgIDxpbWcgc3JjPVwiJHtwb2tlbW9uLnNwcml0ZXMuZnJvbnRfZGVmYXVsdH1cIj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgIDxidXR0b24gaWQ9XCJiYWNrXCI+QmFjazwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+YDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBva2Vtb25zRXJyb3JNYXJrdXAoZXJyb3IpIHtcclxuICByZXR1cm4gYFxyXG4gICAgPGgzPlVuYWJsZSB0byBnZXQgUG9rZW1vbnM8L2gzPlxyXG4gICAgPHA+JHtlcnJvci5tZXNzYWdlfTwvcD5cclxuICAgIDxwPkNoZWNrIHlvdXIgaW50ZXJuZXQgY29ubmVjdGlvbjwvcD5cclxuICAgIGA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQb2tlbW9uc0xvYWRpbmdNYXJrdXAoKSB7XHJcbiAgcmV0dXJuIGBcclxuICAgIDxoMz5Mb2FkaW5nLi4uPGgzPmA7XHJcbn1cclxuIiwiaW1wb3J0IHsgZmV0Y2hQb2tlbW9uLCBmZXRjaFBva2Vtb25zIH0gZnJvbSBcIi4vc2VydmljZXNcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlSG9tZU1hcmt1cCxcclxuICBjcmVhdGVQb2tlbW9uTWFya3VwLFxyXG4gIGNyZWF0ZVBva2Vtb25zTWFya3VwLFxyXG4gIGNyZWF0ZVBva2Vtb25zRXJyb3JNYXJrdXAsXHJcbiAgY3JlYXRlUG9rZW1vbnNMb2FkaW5nTWFya3VwLFxyXG59IGZyb20gXCIuL3RlbXBsYXRlc1wiO1xyXG5cclxudmFyIG1haW5Ob2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xyXG5cclxubGV0IGN1cnJlbnRQYWdlID0gMDtcclxubGV0IHBlclBhZ2UgPSAzMDtcclxuXHJcbmZ1bmN0aW9uIHJlbmRlclBva2Vtb24ocG9rZW1vbklkKSB7XHJcbiAgZmV0Y2hQb2tlbW9uKHBva2Vtb25JZCkudGhlbihmdW5jdGlvbiAocG9rZW1vbikge1xyXG4gICAgbWFpbk5vZGUuaW5uZXJIVE1MID0gY3JlYXRlUG9rZW1vbk1hcmt1cChwb2tlbW9uKTtcclxuICAgIGxldCBiYWNrQnV0dG9uTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja1wiKTtcclxuICAgIGJhY2tCdXR0b25Ob2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJlbmRlclBva2Vtb25zKCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyUG9rZW1vbnMocGFnZSwgcGVyUGFnZSkge1xyXG4gIG1haW5Ob2RlLmlubmVySFRNTCA9IGNyZWF0ZVBva2Vtb25zTG9hZGluZ01hcmt1cCgpO1xyXG5cclxuICBmZXRjaFBva2Vtb25zKHBhZ2UsIHBlclBhZ2UpXHJcbiAgICAudGhlbihmdW5jdGlvbiAocG9rZW1vbnMpIHtcclxuICAgICAgbWFpbk5vZGUuaW5uZXJIVE1MID0gY3JlYXRlUG9rZW1vbnNNYXJrdXAocG9rZW1vbnMsIGN1cnJlbnRQYWdlKTtcclxuXHJcbiAgICAgIGxldCBwcmV2aW91c0J1dHRvbk5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZXZpb3VzXCIpO1xyXG5cclxuICAgICAgaWYgKHByZXZpb3VzQnV0dG9uTm9kZSkge1xyXG4gICAgICAgIHByZXZpb3VzQnV0dG9uTm9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgY3VycmVudFBhZ2UtLTtcclxuICAgICAgICAgIHJlbmRlclBva2Vtb25zKGN1cnJlbnRQYWdlLCBwZXJQYWdlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IG5leHRCdXR0b25Ob2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXh0XCIpO1xyXG4gICAgICBuZXh0QnV0dG9uTm9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGN1cnJlbnRQYWdlKys7XHJcbiAgICAgICAgcmVuZGVyUG9rZW1vbnMoY3VycmVudFBhZ2UsIHBlclBhZ2UpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGxldCBwb2tlbW9uTGlzdE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBva2Vtb25MaXN0XCIpO1xyXG4gICAgICBwb2tlbW9uTGlzdE5vZGUuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgIGNoaWxkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgIGxldCBwb2tlbW9uSWQgPSBldmVudC5jdXJyZW50VGFyZ2V0LmlkO1xyXG4gICAgICAgICAgcmVuZGVyUG9rZW1vbihwb2tlbW9uSWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgIG1haW5Ob2RlLmlubmVySFRNTCA9IGNyZWF0ZVBva2Vtb25zRXJyb3JNYXJrdXAoZXJyb3IpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckhvbWUoKSB7XHJcbiAgbWFpbk5vZGUuaW5uZXJIVE1MID0gY3JlYXRlSG9tZU1hcmt1cCgpO1xyXG5cclxuICB2YXIgdmlld0J1dHRvbk5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZpZXdcIik7XHJcbiAgdmlld0J1dHRvbk5vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHJlbmRlclBva2Vtb25zKGN1cnJlbnRQYWdlLCBwZXJQYWdlKTtcclxuICB9KTtcclxufVxyXG5cclxucmVuZGVySG9tZSgpO1xyXG4iLCJleHBvcnQgZnVuY3Rpb24gZmV0Y2hQb2tlbW9uKGlkKSB7XHJcbiAgcmV0dXJuIGZldGNoKGBodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24vJHtpZH1gKS50aGVuKGZ1bmN0aW9uIChcclxuICAgIHJlc3BvbnNlXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hQb2tlbW9ucyhwYWdlLCBwZXJQYWdlKSB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgYGh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbj9saW1pdD0ke3BlclBhZ2V9Jm9mZnNldD0ke1xyXG4gICAgICBwYWdlICogcGVyUGFnZVxyXG4gICAgfWBcclxuICApXHJcbiAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICByZXR1cm4gZGF0YS5yZXN1bHRzO1xyXG4gICAgfSk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
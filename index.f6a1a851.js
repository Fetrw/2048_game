!function(){var t=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],e=new(function(){var e;function a(e){!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,a),this.initialState=e||t,this.state=this.copyState(this.initialState),this.score=0,this.status="idle"}return e=[{key:"copyState",value:function(t){return t.map(function(t){return t.slice()})}},{key:"getState",value:function(){return this.state}},{key:"getScore",value:function(){return this.score}},{key:"getStatus",value:function(){return this.status}},{key:"start",value:function(){this.status="playing",this.addRandomTile(),this.addRandomTile()}},{key:"restart",value:function(){this.state=this.copyState(this.initialState),this.score=0,this.status="idle"}},{key:"moveLeft",value:function(){if("playing"===this.status){for(var t=!1,e=0;e<4;e++){var a=this.state[e],s=this.slide(a);this.arraysEqual(a,s)||(this.state[e]=s,t=!0)}t&&(this.addRandomTile(),this.checkGameStatus())}}},{key:"moveRight",value:function(){if("playing"===this.status){for(var t=!1,e=0;e<4;e++){var a=this.state[e],s=a.slice().reverse(),r=this.slide(s).reverse();this.arraysEqual(a,r)||(this.state[e]=r,t=!0)}t&&(this.addRandomTile(),this.checkGameStatus())}}},{key:"moveUp",value:function(){var t=this,e=function(e){var s=t.state.map(function(t){return t[e]}),r=t.slide(s);if(!t.arraysEqual(s,r)){for(var i=0;i<4;i++)t.state[i][e]=r[i];a=!0}};if("playing"===this.status){for(var a=!1,s=0;s<4;s++)e(s);a&&(this.addRandomTile(),this.checkGameStatus())}}},{key:"moveDown",value:function(){var t=this,e=function(e){var s=t.state.map(function(t){return t[e]}),r=s.slice().reverse(),i=t.slide(r).reverse();if(!t.arraysEqual(s,i)){for(var n=0;n<4;n++)t.state[n][e]=i[n];a=!0}};if("playing"===this.status){for(var a=!1,s=0;s<4;s++)e(s);a&&(this.addRandomTile(),this.checkGameStatus())}}},{key:"slide",value:function(t){for(var e=t.filter(function(t){return 0!==t}),a=[],s=0;s<e.length;s++)e[s]===e[s+1]?(a.push(2*e[s]),this.score+=2*e[s],s++):a.push(e[s]);for(;a.length<4;)a.push(0);return a}},{key:"addRandomTile",value:function(){for(var t=[],e=0;e<4;e++)for(var a=0;a<4;a++)0===this.state[e][a]&&t.push({row:e,col:a});if(t.length>0){var s=Math.floor(Math.random()*t.length),r=t[s],i=r.row,n=r.col;this.state[i][n]=.9>Math.random()?2:4}}},{key:"arraysEqual",value:function(t,e){if(t.length!==e.length)return!1;for(var a=0;a<t.length;a++)if(t[a]!==e[a])return!1;return!0}},{key:"checkGameStatus",value:function(){if(this.state.flat().includes(2048)){this.status="win";return}var t=this.state.flat().includes(0),e=this.canMerge();t||e||(this.status="lose")}},{key:"canMerge",value:function(){for(var t=0;t<4;t++)for(var e=0;e<4;e++){var a=this.state[t][e];if(0!==a&&(e<3&&a===this.state[t][e+1]||t<3&&a===this.state[t+1][e]))return!0}return!1}}],function(t,e){for(var a=0;a<e.length;a++){var s=e[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}(a.prototype,e),a}()),a=document.querySelector(".game-field"),s=document.querySelector(".game-score"),r=document.querySelector(".start"),i=document.querySelector(".message-container"),n={lose:document.querySelector(".message-lose"),win:document.querySelector(".message-win"),start:document.querySelector(".message-start")};function o(){var t=e.getState(),r=e.getScore(),o=e.getStatus();s.textContent=r,a.querySelectorAll(".field-row").forEach(function(e,a){e.querySelectorAll(".field-cell").forEach(function(e,s){e.textContent=t[a][s]||"",e.className="field-cell ".concat(t[a][s]?"field-cell--".concat(t[a][s]):"")})}),i.querySelectorAll(".message").forEach(function(t){return t.classList.add("hidden")}),"win"===o?n.win.classList.remove("hidden"):"lose"===o?n.lose.classList.remove("hidden"):"playing"===o?n.start.classList.add("hidden"):n.start.classList.remove("hidden")}r.addEventListener("click",function(){"idle"===e.getStatus()?(e.start(),r.textContent="Restart",r.classList.remove("start"),r.classList.add("restart")):(e.restart(),r.textContent="Start",r.classList.remove("restart"),r.classList.add("start")),o()}),document.addEventListener("keydown",function(t){if("playing"===e.getStatus()){switch(t.key){case"ArrowLeft":e.moveLeft();break;case"ArrowRight":e.moveRight();break;case"ArrowUp":e.moveUp();break;case"ArrowDown":e.moveDown();break;default:return}o()}}),o()}();
//# sourceMappingURL=index.f6a1a851.js.map

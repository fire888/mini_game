(()=>{"use strict";const t=[{school:"attack",str:1},{school:"attack",str:2},{school:"attack",str:3},{school:"heal",str:1},{school:"heal",str:2},{school:"heal",str:3},{school:"freeze",str:1},{school:"freeze",str:2},{school:"freeze",str:3}];class s{constructor(){this._level=1,this._health=5,this._colode=[],this._isDie=!1}addCards(t){this._colode=this._colode.concat(t)}hit(t){this._health=this._health-t,this._health<1&&(this._isDie=!0)}}class h{constructor(t){this._level=t,this._health=t,this._colode=e(this._level),this._isDie=!1}hit(t){this._health=this._health-t,this._health<1&&(this._isDie=!0)}}const e=s=>{const h=[];for(let e=0;e<s;++e){const s=Math.floor(Math.random()*t.length);h.push(Object.assign({},t[s]))}return h};new class{constructor(){this._hero=new s;const t=e(5);this._hero.addCards(t),this._countBattle=-1,this._startIterate()}_startIterate(){const t=()=>{++this._countBattle,this._fight(this._countBattle,t)};t()}_fight(t,s){new h(t),setTimeout(s,3e3)}}})();
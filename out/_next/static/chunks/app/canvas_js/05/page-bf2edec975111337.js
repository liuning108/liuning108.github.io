(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[619],{7722:function(e,t,l){Promise.resolve().then(l.bind(l,3771))},3771:function(e,t,l){"use strict";l.r(t);var n=l(7437),r=l(2265);t.default=()=>{let e=Math.PI,t=2*e,l={red:"#F74456",white:"#fff",yellow:"#F1DA56",blue:"#036FAF"},i=0,o={x:0,y:0},f=n=>{let r=Math.round(++i/40);function o(e,t,l,r){n.save(),n.translate(200*e.x,200*e.y),n.fillStyle=t,n.fillRect(0,0,200,200),n.translate(100,100),l(),n.restore()}console.log("stime",r),o({x:0,y:0},l.blue,function(){n.beginPath(),n.arc(0,0,30/(r%3+1),0,t),n.strokeStyle=l.white,n.lineWidth=15,n.stroke();for(let e=0;e<8;e++)n.fillStyle=r%8==e?l.red:l.white,(e+r)%4!=0&&n.fillRect(60,-4,20,8),n.rotate(t/8)},i),o({x:1,y:0},l.red,function(){n.save(),n.scale(.8,.8),n.translate(-60,-60);for(let e=0;e<3;e++)for(let i=0;i<3;i++)n.save(),n.translate(60*e,60*i),n.beginPath(),n.arc(0,0,20,0,t),n.fillStyle=l.white,(e+3*i+r)%5==0&&(n.fillStyle=l.yellow),n.fill(),n.restore();n.restore()},i),o({x:2,y:0},l.yellow,function(){for(let e=0;e<4;e++)n.beginPath(),n.moveTo(0,0),n.lineTo(80,20),n.lineTo(80,80),n.closePath(),n.fillStyle=l.white,n.fill(),r%4==e&&(n.beginPath(),n.arc(60,40,6,0,t),n.fillStyle=l.red,n.fill()),n.rotate(t/4)},i),o({x:0,y:1},l.yellow,function(){n.translate(-60,-60),n.fillStyle=l.white,n.fillRect(0,0,60,60),n.translate(30,30),n.rotate(-e/4),n.beginPath(),n.moveTo(0,0),n.lineTo(40,0),n.arc(40,40,40,-e/2,e/2),n.lineTo(0,80),n.closePath(),n.fillStyle=l.red,n.fill(),n.translate(-100+10*Math.sin(i/10),60),n.fillStyle=l.blue,n.fillRect(0,0,100,40),n.translate(100+10*Math.cos(i/10),60),n.fillStyle=l.white,n.fillRect(0,0,50,20)},i),o({x:1,y:1},l.white,function(){},i),o({x:2,y:1},l.blue,function(){},i),o({x:0,y:2},l.red,function(){},i),o({x:1,y:2},l.blue,function(){},i),o({x:2,y:2},l.white,function(){},i)},a=(0,r.useRef)(null);return(0,r.useEffect)(()=>{if(null==a.current)return;let e=a.current;e.width=600,e.height=600;let t=e.getContext("2d");if(t){let e=()=>{f(t),requestAnimationFrame(e)};requestAnimationFrame(e)}e.addEventListener("mousemove",function(e){o.x=e.offsetX,o.y=e.offsetY})},[f]),(0,n.jsx)("main",{className:"flex absolute w-full justify-center items-center h-full bg-[#eee]",children:(0,n.jsx)("canvas",{className:"bg-white shadow-md max-w-full",ref:a})})}},622:function(e,t,l){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=l(2265),r=Symbol.for("react.element"),i=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,l){var n,a={},s=null,u=null;for(n in void 0!==l&&(s=""+l),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,n)&&!f.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:r,type:e,key:s,ref:u,props:a,_owner:o.current}}t.jsx=a,t.jsxs=a},7437:function(e,t,l){"use strict";e.exports=l(622)}},function(e){e.O(0,[971,596,744],function(){return e(e.s=7722)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1187],{5282:function(t,e,n){Promise.resolve().then(n.bind(n,7053))},7053:function(t,e,n){"use strict";n.r(e);var r=n(7437),s=n(1160),i=n(3025);e.default=t=>{let e=0,n=0,l=new i.Z(0,0),a=async(t,r)=>{t.canvas.parentElement&&(e=t.canvas.width=t.canvas.parentElement.clientWidth,n=t.canvas.height=t.canvas.parentElement.clientHeight),t.canvas.addEventListener("mousemove",t=>{l=new i.Z(t.offsetX,t.offsetY)})};return(0,r.jsx)("main",{className:"absolute w-full h-full bg-gray-100",children:(0,r.jsx)(s.Z,{className:"bg-white",draw:t=>{console.log("m2:"+l),t.clearRect(0,0,t.canvas.width,t.canvas.height),t.save();let r=new i.Z(e/2,n/2);t.translate(r.x,r.y);let s=l.sub(r);s.mul(1/s.length).mul(200).draw(t),t.restore()},init:a})})}},1160:function(t,e,n){"use strict";n.d(e,{Z:function(){return l}});var r=n(7437),s=n(2265);let i=function(t,e,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1e3/30,i={time:r},l=(0,s.useRef)(null);return(0,s.useEffect)(()=>{if(!l.current)return;let s=l.current,a=s.getContext("2d"),o=0,h=0;if(a){e&&e(a,i);let s=()=>{t(a,++o,i),h=requestAnimationFrame(s)};n&&setInterval(()=>{console.log("fps",i.time),n(a,o,i)},r),s()}return()=>{window.cancelAnimationFrame(h)}},[t]),l};var l=t=>{let{draw:e,init:n,update:s,time:l,...a}=t,o=i(e,n,s,l);return(0,r.jsx)("canvas",{ref:o,...a})}},3025:function(t,e){"use strict";class n{set(t,e){return this.x=t,this.y=e,this}add(t){return new n(this.x+t.x,this.y+t.y)}sub(t){return new n(this.x-t.x,this.y-t.y)}mul(t){return new n(this.x*t,this.y*t)}unit(){return this.mul(1/this.length)}get length(){return Math.sqrt(this.x*this.x+this.y*this.y)}set length(t){let e=this.unit().mul(t);this.set(e.x,e.y)}eq(t){return this.x===t.x&&this.y===t.y}clone(){return new n(this.x,this.y)}angle(){return Math.atan2(this.y,this.x)}toString(){return"(".concat(Math.round(this.x),",").concat(Math.round(this.y),")")}draw(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"black";t.save(),t.beginPath(),t.moveTo(0,0),t.rotate(this.angle()),t.lineTo(this.length,0),t.lineTo(this.length-3,-4),t.lineTo(this.length-3,4),t.lineTo(this.length,0),t.strokeStyle=e,t.lineWidth=3,t.stroke(),t.fillText(this.toString(),this.length/2,10),t.restore()}constructor(t=0,e=0){this.x=0,this.y=0,this.set(t,e)}}e.Z=n},622:function(t,e,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),s=Symbol.for("react.element"),i=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function o(t,e,n){var r,o={},h=null,u=null;for(r in void 0!==n&&(h=""+n),void 0!==e.key&&(h=""+e.key),void 0!==e.ref&&(u=e.ref),e)i.call(e,r)&&!a.hasOwnProperty(r)&&(o[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps)void 0===o[r]&&(o[r]=e[r]);return{$$typeof:s,type:t,key:h,ref:u,props:o,_owner:l.current}}e.jsx=o,e.jsxs=o},7437:function(t,e,n){"use strict";t.exports=n(622)}},function(t){t.O(0,[2971,596,1744],function(){return t(t.s=5282)}),_N_E=t.O()}]);
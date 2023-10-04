(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3263],{84:function(t,e,s){Promise.resolve().then(s.bind(s,2282))},2282:function(t,e,s){"use strict";s.r(e);var n=s(7437),i=s(1160),a=s(2265),r=s(3025);class h{draw(t){t.save(),t.beginPath(),t.translate(this.p.x,this.p.y),t.arc(0,0,this.r,0,2*Math.PI),t.fillStyle=l.color,t.fill(),t.restore(),this.drawV(t)}drawV(t){t.beginPath(),t.save(),t.translate(this.p.x,this.p.y),t.scale(3,3),t.moveTo(0,0),t.lineTo(this.v.x,this.v.y),t.strokeStyle="blue",t.stroke(),t.beginPath(),t.moveTo(0,0),t.lineTo(this.v.x,0),t.strokeStyle="red",t.stroke(),t.beginPath(),t.moveTo(0,0),t.lineTo(0,this.v.y),t.strokeStyle="green",t.stroke(),t.restore()}update(t,e){!1==this.dragging&&(this.p=this.p.add(this.v),this.v=this.v.add(this.a),this.v=this.v.mul(l.fade),l.vx=this.v.x,l.vy=this.v.y,l.ay=this.a.y,this.checkBoundary(t,e))}checkBoundary(t,e){this.p.x+this.r>t&&(this.v.x=-Math.abs(this.v.x)),this.p.x-this.r<0&&(this.v.x=Math.abs(this.v.x)),this.p.y+this.r>e&&(this.v.y=-Math.abs(this.v.y)),this.p.y-this.r<0&&(this.v.y=Math.abs(this.v.y))}constructor(t=0,e=0){this.p=new r.Z(t,e),this.v=new r.Z(5,5),this.a=new r.Z(0,1),this.r=50,this.dragging=!1}}let l={vx:0,vy:0,ay:.6,fade:.99,update:!0,color:"#fff",fps:30,step:()=>{}};e.default=t=>{let e,o,u=0,c=0,d=new r.Z(0,0);(0,a.useEffect)(()=>{});let v=async(n,i)=>{n.canvas.addEventListener("mousedown",t=>{(d=new r.Z(t.offsetX,t.offsetY)).sub(e.p).length<e.r&&(console.log("Click Ball"),e.dragging=!0)}),n.canvas.addEventListener("mouseup",t=>{e.dragging=!1}),n.canvas.addEventListener("mousemove",t=>{let s=new r.Z(t.offsetX,t.offsetY);if(e.dragging){let t=s.sub(d);e.p=e.p.add(t),e.v=t.clone()}d=s}),n.canvas.parentElement&&(u=n.canvas.width=n.canvas.parentElement.clientWidth,c=n.canvas.height=n.canvas.parentElement.clientHeight),e=new h(u/2,c/2),l.step=()=>{e.update(u,c)};let a=await s.e(5760).then(s.bind(s,5760));!o&&((o=new a.GUI).add(l,"vx",-50,50).listen().onChange(t=>{e.v.x=t}),o.add(l,"vy",-50,50).listen().onChange(t=>{e.v.y=t}),o.add(l,"ay",-1,1).step(.001).listen().onChange(t=>{e.a.y=t}),o.add(l,"fade",0,1).step(.01).listen(),o.add(l,"update").listen(),o.addColor(l,"color").listen(),o.add(l,"step"),t.hide&&o.hide())};return(0,n.jsx)("main",{className:"absolute w-full h-full bg-gray-100",children:(0,n.jsx)(i.Z,{className:"bg-black",draw:t=>{t.fillStyle="rgba(0,0,0,0.5)",t.fillRect(0,0,u,c),e.draw(t)},init:v,update:()=>{l.update&&e.update(u,c)}})})}},1160:function(t,e,s){"use strict";s.d(e,{Z:function(){return r}});var n=s(7437),i=s(2265);let a=function(t,e,s){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1e3/30,a={time:n},r=(0,i.useRef)(null);return(0,i.useEffect)(()=>{if(!r.current)return;let i=r.current,h=i.getContext("2d"),l=0,o=0;if(h){e&&e(h,a);let i=()=>{t(h,++l,a),o=requestAnimationFrame(i)};s&&setInterval(()=>{console.log("fps",a.time),s(h,l,a)},n),i()}return()=>{window.cancelAnimationFrame(o)}},[t]),r};var r=t=>{let{draw:e,init:s,update:i,time:r,...h}=t,l=a(e,s,i,r);return(0,n.jsx)("canvas",{ref:l,...h})}},3025:function(t,e){"use strict";class s{static Polar(t,e){let n=e*(Math.PI/180),i=Math.cos(n)*t,a=Math.sin(n)*t;return new s(i,a)}set(t,e){return this.x=t,this.y=e,this}add(t){return new s(this.x+t.x,this.y+t.y)}sub(t){return new s(this.x-t.x,this.y-t.y)}mul(t){return new s(this.x*t,this.y*t)}unit(){return this.mul(1/this.length)}get length(){return Math.sqrt(this.x*this.x+this.y*this.y)}set length(t){let e=this.unit().mul(t);this.set(e.x,e.y)}eq(t){return this.x===t.x&&this.y===t.y}clone(){return new s(this.x,this.y)}angle(){return Math.atan2(this.y,this.x)}deg(){return parseInt(" ".concat(this.angle()*(180/Math.PI)))}toString(){return"(".concat(Math.round(this.x),",").concat(Math.round(this.y),")")}draw(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"black",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20;t.save(),t.beginPath(),t.moveTo(0,0),t.rotate(this.angle()),t.lineTo(this.unit().mul(s+3).length,0),t.lineTo(this.unit().mul(s+3).length-3,-4),t.lineTo(this.unit().mul(s+3).length-3,4),t.lineTo(this.unit().mul(s+3).length,0),t.strokeStyle=e,t.lineWidth=3,t.stroke(),t.restore()}setRA(t,e){let n=e*(Math.PI/180),i=Math.cos(n)*t,a=Math.sin(n)*t;return new s(i,a)}constructor(t=0,e=0){this.x=0,this.y=0,this.set(t,e)}}s.PiToDeg=180/Math.PI,e.Z=s},622:function(t,e,s){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=s(2265),i=Symbol.for("react.element"),a=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),r=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function l(t,e,s){var n,l={},o=null,u=null;for(n in void 0!==s&&(o=""+s),void 0!==e.key&&(o=""+e.key),void 0!==e.ref&&(u=e.ref),e)a.call(e,n)&&!h.hasOwnProperty(n)&&(l[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps)void 0===l[n]&&(l[n]=e[n]);return{$$typeof:i,type:t,key:o,ref:u,props:l,_owner:r.current}}e.jsx=l,e.jsxs=l},7437:function(t,e,s){"use strict";t.exports=s(622)}},function(t){t.O(0,[2971,596,1744],function(){return t(t.s=84)}),_N_E=t.O()}]);
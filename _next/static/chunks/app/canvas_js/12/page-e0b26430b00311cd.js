(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5210],{7492:function(t,e,s){Promise.resolve().then(s.bind(s,774))},774:function(t,e,s){"use strict";s.r(e);var n=s(7437),i=s(1160),r=s(3025);class a{draw(t){t.save(),t.beginPath(),t.translate(this.p.x,this.p.y),this.v.draw(t,this.color,10*this.r),t.fillStyle=this.color,t.fill(),t.restore()}update(){this.p=this.p.add(this.v),this.v=this.v.add(new r.Z(0,.5)),this.v=this.v.mul(.99-this.r/200),this.r=.97*this.r,this.p.y+this.r>o&&(this.v.y=-Math.abs(this.v.y)),this.p.y-this.r<0&&(this.v.y=Math.abs(this.v.y)),this.p.x+this.r>l&&(this.v.x=-Math.abs(this.v.x)),this.p.x-this.r<0&&(this.v.x=Math.abs(this.v.x))}constructor(t){this.p=new r.Z(100,100),this.v=new r.Z(0,20),this.r=20,this.color="rgba(255,".concat(150*Math.random()+50,",").concat(200*Math.random(),")"),Object.assign(this,t)}}class h{draw(t){t.save(),t.beginPath(),t.translate(this.p.x,this.p.y),t.arc(0,0,Math.sqrt(Math.abs(this.value)),0,2*Math.PI),this.value<0?t.fillStyle="black":t.fillStyle="white",t.fill(),t.restore()}effect(t){let e=t.p.sub(this.p),s=this.value/(1+e.length),n=e.unit().mul(s);t.v=t.v.add(n)}constructor(t){this.p=new r.Z,this.value=(Math.random()>=.5?1:-1)*200,Object.assign(this,t)}}let l=0,o=0;e.default=t=>{let e=[],s=[],c=new r.Z,u=async(t,e)=>{t.canvas.parentElement&&(l=t.canvas.width=t.canvas.parentElement.clientWidth,o=t.canvas.height=t.canvas.parentElement.clientHeight),t.canvas.addEventListener("mousemove",t=>{c=new r.Z(t.offsetX,t.offsetY)}),t.canvas.addEventListener("dblclick",t=>{s.push(new h({p:new r.Z(t.offsetX,t.offsetY)}))})};return(0,n.jsx)("main",{className:"absolute w-full h-full bg-gray-100",children:(0,n.jsx)(i.Z,{className:"bg-[#03001C]",draw:t=>{t.clearRect(0,0,l,o),e.forEach(e=>e.draw(t)),s.forEach(e=>e.draw(t))},init:u,update:(t,n)=>{console.log("generateParticles",(e=(e=e.concat([1,2,3,4,5].map(t=>new a({p:c.clone(),v:new r.Z(10*Math.random()-5,10*Math.random()-5),r:20*Math.random()+1})))).filter(t=>!(t.r<1))).length),e.forEach(t=>{s.forEach(e=>{e.effect(t)}),t.update()})}})})}},1160:function(t,e,s){"use strict";s.d(e,{Z:function(){return a}});var n=s(7437),i=s(2265);let r=function(t,e,s){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1e3/30,r={time:n},a=(0,i.useRef)(null);return(0,i.useEffect)(()=>{if(!a.current)return;let i=a.current,h=i.getContext("2d"),l=0,o=0;if(h){e&&e(h,r);let i=()=>{t(h,++l,r),o=requestAnimationFrame(i)};s&&setInterval(()=>{console.log("fps",r.time),s(h,l,r)},n),i()}return()=>{window.cancelAnimationFrame(o)}},[t]),a};var a=t=>{let{draw:e,init:s,update:i,time:a,...h}=t,l=r(e,s,i,a);return(0,n.jsx)("canvas",{ref:l,...h})}},3025:function(t,e){"use strict";class s{static Polar(t,e){let n=e*(Math.PI/180),i=Math.cos(n)*t,r=Math.sin(n)*t;return new s(i,r)}set(t,e){return this.x=t,this.y=e,this}add(t){return new s(this.x+t.x,this.y+t.y)}sub(t){return new s(this.x-t.x,this.y-t.y)}mul(t){return new s(this.x*t,this.y*t)}unit(){return this.mul(1/this.length)}get length(){return Math.sqrt(this.x*this.x+this.y*this.y)}set length(t){let e=this.unit().mul(t);this.set(e.x,e.y)}eq(t){return this.x===t.x&&this.y===t.y}clone(){return new s(this.x,this.y)}angle(){return Math.atan2(this.y,this.x)}deg(){return parseInt(" ".concat(this.angle()*(180/Math.PI)))}toString(){return"(".concat(Math.round(this.x),",").concat(Math.round(this.y),")")}draw(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"black",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20;t.save(),t.beginPath(),t.moveTo(0,0),t.rotate(this.angle()),t.lineTo(this.unit().mul(s+3).length,0),t.lineTo(this.unit().mul(s+3).length-3,-4),t.lineTo(this.unit().mul(s+3).length-3,4),t.lineTo(this.unit().mul(s+3).length,0),t.strokeStyle=e,t.lineWidth=3,t.stroke(),t.restore()}setRA(t,e){let n=e*(Math.PI/180),i=Math.cos(n)*t,r=Math.sin(n)*t;return new s(i,r)}constructor(t=0,e=0){this.x=0,this.y=0,this.set(t,e)}}e.Z=s},622:function(t,e,s){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=s(2265),i=Symbol.for("react.element"),r=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function l(t,e,s){var n,l={},o=null,c=null;for(n in void 0!==s&&(o=""+s),void 0!==e.key&&(o=""+e.key),void 0!==e.ref&&(c=e.ref),e)r.call(e,n)&&!h.hasOwnProperty(n)&&(l[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps)void 0===l[n]&&(l[n]=e[n]);return{$$typeof:i,type:t,key:o,ref:c,props:l,_owner:a.current}}e.jsx=l,e.jsxs=l},7437:function(t,e,s){"use strict";t.exports=s(622)}},function(t){t.O(0,[2971,596,1744],function(){return t(t.s=7492)}),_N_E=t.O()}]);
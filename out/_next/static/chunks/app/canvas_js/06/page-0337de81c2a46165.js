(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[263],{84:function(t,e,s){Promise.resolve().then(s.bind(s,2282))},2282:function(t,e,s){"use strict";s.r(e);var a=s(7437),n=s(1160),i=s(2265);class r{draw(t){t.save(),t.beginPath(),t.translate(this.p.x,this.p.y),t.arc(0,0,this.r,0,2*Math.PI),t.fillStyle=l.color,t.fill(),t.restore()}update(t,e){this.p.x+=this.v.x,this.p.y+=this.v.y,this.v.x+=this.a.x,this.v.y+=this.a.y,this.v.x*=l.fade,this.v.y*=l.fade,l.vx=this.v.x,l.vy=this.v.y,l.ay=this.a.y,this.checkBoundary(t,e)}checkBoundary(t,e){this.p.x+this.r>t&&(this.v.x=-Math.abs(this.v.x)),this.p.x-this.r<0&&(this.v.x=Math.abs(this.v.x)),this.p.y+this.r>e&&(this.v.y=-Math.abs(this.v.y)),this.p.y-this.r<0&&(this.v.y=Math.abs(this.v.y))}constructor(t=0,e=0){this.p={x:t,y:e},this.v={x:5,y:5},this.a={x:0,y:1},this.r=50,this.dragging=!1}}let l={vx:0,vy:0,ay:.6,fade:.99,update:!0,color:"#fff",fps:30,step:()=>{}};e.default=t=>{let e,h=0,o=0;(0,i.useEffect)(()=>{});let c=async(a,n)=>{a.canvas.addEventListener("mousedown",t=>{t.offsetX,t.offsetY}),a.canvas.parentElement&&(h=a.canvas.width=a.canvas.parentElement.clientWidth,o=a.canvas.height=a.canvas.parentElement.clientHeight),e=new r(h/2,o/2),l.step=()=>{e.update(h,o)};let i=await s.e(760).then(s.bind(s,5760)),c=new i.GUI;c.add(l,"vx",-50,50).listen().onChange(t=>{e.v.x=t}),c.add(l,"vy",-50,50).listen().onChange(t=>{e.v.y=t}),c.add(l,"ay",-1,1).step(.001).listen().onChange(t=>{e.a.y=t}),c.add(l,"fade",0,1).step(.01).listen(),c.add(l,"update").listen(),c.addColor(l,"color").listen(),c.add(l,"step"),c.add(l,"fps",1,120).listen().onChange(t=>{n.time=1e3/t}),t.hide&&c.hide()};return(0,a.jsx)("main",{className:"absolute w-full h-full bg-gray-100",children:(0,a.jsx)(n.Z,{className:"bg-black",draw:t=>{t.fillStyle="rgba(0,0,0,0.5)",t.fillRect(0,0,h,o),e.draw(t)},init:c,update:()=>{l.update&&e.update(h,o)}})})}},1160:function(t,e,s){"use strict";s.d(e,{Z:function(){return r}});var a=s(7437),n=s(2265);let i=function(t,e,s){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1e3/30,i={time:a},r=(0,n.useRef)(null);return(0,n.useEffect)(()=>{if(!r.current)return;let a=r.current,n=a.getContext("2d"),l=0;if(n){e&&e(n,i);let a=()=>{t(n,++l,i),setTimeout(a,i.time)};s&&setInterval(()=>{console.log("fps",i.time),s(n,l,i)},1e3/30),a()}return()=>{window.cancelAnimationFrame(0)}},[t]),r};var r=t=>{let{draw:e,init:s,update:n,time:r,...l}=t,h=i(e,s,n,r);return(0,a.jsx)("canvas",{ref:h,...l})}},622:function(t,e,s){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=s(2265),n=Symbol.for("react.element"),i=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),r=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(t,e,s){var a,h={},o=null,c=null;for(a in void 0!==s&&(o=""+s),void 0!==e.key&&(o=""+e.key),void 0!==e.ref&&(c=e.ref),e)i.call(e,a)&&!l.hasOwnProperty(a)&&(h[a]=e[a]);if(t&&t.defaultProps)for(a in e=t.defaultProps)void 0===h[a]&&(h[a]=e[a]);return{$$typeof:n,type:t,key:o,ref:c,props:h,_owner:r.current}}e.jsx=h,e.jsxs=h},7437:function(t,e,s){"use strict";t.exports=s(622)}},function(t){t.O(0,[971,596,744],function(){return t(t.s=84)}),_N_E=t.O()}]);
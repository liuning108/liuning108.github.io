(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1329],{9752:function(t,e,i){Promise.resolve().then(i.bind(i,2792))},2792:function(t,e,i){"use strict";let n;i.r(e),i.d(e,{default:function(){return f}});var s,r=i(7437),o=i(2326),a=i(2265);i(6394);var h=class{draw(t){t.save(),t.translate(this.p.x,this.p.y),t.beginPath(),t.arc(0,0,this.r,0,2*Math.PI),t.fillStyle="white",t.fill(),t.restore(),this.drawV(t)}update(){this.dragging||(this.p.x+=this.v.x,this.p.y+=this.v.y,this.v.x+=this.a.x,this.v.y+=this.a.y,this.v.x*=.99,this.v.y*=.99,this.checkBoundary())}checkBoundary(){this.p.x+this.r>this.ww&&(this.v.x=-Math.abs(this.v.x)),this.p.y+this.r>this.wh&&(this.v.y=-Math.abs(this.v.y)),this.p.x-this.r<0&&(this.v.x=Math.abs(this.v.x)),this.p.y-this.r<0&&(this.v.y=Math.abs(this.v.y))}drawV(t){t.save(),t.beginPath(),t.translate(this.p.x,this.p.y),t.scale(3,3),t.moveTo(0,0),t.lineWidth=2,t.lineTo(this.v.x,this.v.y),t.strokeStyle="blue",t.stroke(),t.beginPath(),t.moveTo(0,0),t.lineWidth=2,t.lineTo(this.v.x,0),t.strokeStyle="red",t.stroke(),t.beginPath(),t.moveTo(0,0),t.lineWidth=2,t.lineTo(0,this.v.y),t.strokeStyle="green",t.stroke(),t.restore()}constructor(t,e){this.p={x:0,y:0},this.v={x:5,y:5},this.a={x:0,y:1},this.r=50,this.dragging=!1,this.ww=0,this.wh=0,this.p={x:t/2,y:e/2},this.ww=t,this.wh=e}};let l=0,u=0;function v(t){void 0!==window&&(n=t,l=t.canvas.width=window.innerWidth,u=t.canvas.height=window.innerHeight,s=new h(l,u))}function c(t,e){t.fillStyle="rgba(0,0,0,0.5)",t.fillRect(0,0,l,u),s.draw(t)}function y(){console.log("ball "),s.update()}function d(t,e){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}console.log("3,4=>",d({x:0,y:4},{x:3,y:0}));let w={x:0,y:0};var f=()=>((0,a.useEffect)(()=>{let t=()=>{void 0!==window&&(l=n.canvas.width=window.innerWidth,u=n.canvas.height=window.innerHeight,s=new h(l,u))};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]),(0,r.jsx)(o.Z,{className:"MyCanvasPage04",draw:c,init:v,update:y,onMouseUp:t=>{s.dragging=!1},onMouseMove:t=>{let{offsetX:e,offsetY:i}=t.nativeEvent;if(w.x=e,w.y=i,s.dragging){let t=w.x-s.p.x,e=w.y-s.p.y;s.p.x+=t,s.p.y+=e,s.v.x=t,s.v.y=e}},onMouseDown:t=>{let{offsetX:e,offsetY:i}=t.nativeEvent;w.x=e,w.y=i,console.log(w),d(w,s.p)<s.r&&(s.dragging=!0)}}))},2326:function(t,e,i){"use strict";i.d(e,{Z:function(){return o}});var n=i(7437),s=i(2265);let r=t=>{let{draw:e,init:i,update:n,time:r=1e3/30}=t,o=(0,s.useRef)(null);return(0,s.useEffect)(()=>{let t;if(!o.current)return;let s=o.current,a=s.getContext("2d"),h=0,l=0;if(a){i&&i(a);let s=()=>{h++,a.save(),e(a,h),a.restore(),l=requestAnimationFrame(s)};return s(),n&&(console.log("kkkk"),t=setInterval(()=>{n()},r)),()=>{window.cancelAnimationFrame(l),window.clearInterval(t)}}},[e]),o};var o=t=>{let{draw:e,init:i,update:s,time:o=1e3/30,...a}=t,h=r({draw:e,init:i,update:s,time:o});return(0,n.jsx)("canvas",{ref:h,...a})}},6394:function(){},622:function(t,e,i){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=i(2265),s=Symbol.for("react.element"),r=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function h(t,e,i){var n,h={},l=null,u=null;for(n in void 0!==i&&(l=""+i),void 0!==e.key&&(l=""+e.key),void 0!==e.ref&&(u=e.ref),e)r.call(e,n)&&!a.hasOwnProperty(n)&&(h[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps)void 0===h[n]&&(h[n]=e[n]);return{$$typeof:s,type:t,key:l,ref:u,props:h,_owner:o.current}}e.jsx=h,e.jsxs=h},7437:function(t,e,i){"use strict";t.exports=i(622)}},function(t){t.O(0,[2971,596,1744],function(){return t(t.s=9752)}),_N_E=t.O()}]);
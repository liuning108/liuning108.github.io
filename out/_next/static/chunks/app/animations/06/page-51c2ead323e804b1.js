(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9538],{1122:function(e,t,r){Promise.resolve().then(r.bind(r,7791))},7791:function(e,t,r){"use strict";r.r(t);var n=r(7437),o=r(2326);function s(e){e.canvas.width=400,e.canvas.height=400}function u(e,t){}r(2265),r(1197),t.default=()=>(0,n.jsx)(o.Z,{className:"MyCanvasPage03",draw:u,init:s})},2326:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(7437),o=r(2265);let s=e=>{let{draw:t,init:r,update:n,time:s=1e3/30}=e,u=(0,o.useRef)(null);return(0,o.useEffect)(()=>{let e;if(!u.current)return;let o=u.current,a=o.getContext("2d"),i=0,c=0;if(a){r&&r(a);let o=()=>{i++,a.save(),t(a,i),a.restore(),c=requestAnimationFrame(o)};return o(),n&&(console.log("kkkk"),e=setInterval(()=>{n()},s)),()=>{window.cancelAnimationFrame(c),window.clearInterval(e)}}},[t]),u};var u=e=>{let{draw:t,init:r,update:o,time:u=1e3/30,...a}=e,i=s({draw:t,init:r,update:o,time:u});return(0,n.jsx)("canvas",{ref:i,...a})}},1197:function(){},622:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(2265),o=Symbol.for("react.element"),s=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,r){var n,i={},c=null,f=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(f=t.ref),t)s.call(t,n)&&!a.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:c,ref:f,props:i,_owner:u.current}}t.jsx=i,t.jsxs=i},7437:function(e,t,r){"use strict";e.exports=r(622)}},function(e){e.O(0,[2971,596,1744],function(){return e(e.s=1122)}),_N_E=e.O()}]);
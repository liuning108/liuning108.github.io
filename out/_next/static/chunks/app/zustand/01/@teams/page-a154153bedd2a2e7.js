(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[701],{497:function(e,t,n){Promise.resolve().then(n.bind(n,7709))},7709:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var r=n(7437),u=n(7718);function o(){let{count:e,inc:t}=(0,u.o)();return(0,r.jsxs)("div",{children:["1111",(0,r.jsx)("div",{children:e}),(0,r.jsx)("button",{onClick:t,children:"one up"})]})}},7718:function(e,t,n){"use strict";n.d(t,{o:function(){return u}});var r=n(4660);let u=(0,r.Ue)(e=>({count:0,inc:()=>e(e=>({count:e.count+1}))}))},622:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),u=Symbol.for("react.element"),o=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,c={},a=null,f=null;for(r in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(f=t.ref),t)o.call(t,r)&&!s.hasOwnProperty(r)&&(c[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===c[r]&&(c[r]=t[r]);return{$$typeof:u,type:e,key:a,ref:f,props:c,_owner:i.current}}t.jsx=c,t.jsxs=c},7437:function(e,t,n){"use strict";e.exports=n(622)},1853:function(e,t,n){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),u="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=r.useState,i=r.useEffect,s=r.useLayoutEffect,c=r.useDebugValue;function a(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!u(e,n)}catch(e){return!0}}var f="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=o({inst:{value:n,getSnapshot:t}}),u=r[0].inst,f=r[1];return s(function(){u.value=n,u.getSnapshot=t,a(u)&&f({inst:u})},[e,n,t]),i(function(){return a(u)&&f({inst:u}),e(function(){a(u)&&f({inst:u})})},[e]),c(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:f},8704:function(e,t,n){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),u=n(6272),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=u.useSyncExternalStore,s=r.useRef,c=r.useEffect,a=r.useMemo,f=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,u){var l=s(null);if(null===l.current){var d={hasValue:!1,value:null};l.current=d}else d=l.current;l=a(function(){function e(e){if(!c){if(c=!0,i=e,e=r(e),void 0!==u&&d.hasValue){var t=d.value;if(u(t,e))return s=t}return s=e}if(t=s,o(i,e))return t;var n=r(e);return void 0!==u&&u(t,n)?t:(i=e,s=n)}var i,s,c=!1,a=void 0===n?null:n;return[function(){return e(t())},null===a?void 0:function(){return e(a())}]},[t,n,r,u]);var v=i(e,l[0],l[1]);return c(function(){d.hasValue=!0,d.value=v},[v]),f(v),v}},6272:function(e,t,n){"use strict";e.exports=n(1853)},5401:function(e,t,n){"use strict";e.exports=n(8704)},4660:function(e,t,n){"use strict";n.d(t,{Ue:function(){return f}});let r=e=>{let t;let n=new Set,r=(e,r)=>{let u="function"==typeof e?e(t):e;if(!Object.is(u,t)){let e=t;t=(null!=r?r:"object"!=typeof u)?u:Object.assign({},t,u),n.forEach(n=>n(t,e))}},u=()=>t,o={setState:r,getState:u,subscribe:e=>(n.add(e),()=>n.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}};return t=e(r,u,o),o},u=e=>e?r(e):r;var o=n(2265),i=n(5401);let{useSyncExternalStoreWithSelector:s}=i,c=!1,a=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t="function"==typeof e?u(e):e,n=(e,n)=>(function(e,t=e.getState,n){n&&!c&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),c=!0);let r=s(e.subscribe,e.getState,e.getServerState||e.getState,t,n);return(0,o.useDebugValue)(r),r})(t,e,n);return Object.assign(n,t),n},f=e=>e?a(e):a}},function(e){e.O(0,[971,596,744],function(){return e(e.s=497)}),_N_E=e.O()}]);
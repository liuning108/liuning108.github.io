"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6748],{6748:function(e,t,r){r.r(t);var n=r(7437),u=r(2265),l=r(3502),a=r.n(l);t.default=()=>{let e=(0,u.useRef)(null);return(0,u.useEffect)(()=>{if(!e.current)return;let t=e.current;new(a())(e=>{e.setup=()=>{e.createCanvas(e.windowWidth,e.windowHeight).parent(t),e.background(100),r=e.width/2,n=e.height/2};let r=0,n=0;e.draw=()=>{r+=e.random(-10,10),n+=e.random(-10,10),r=e.lerp(r,e.mouseX,.05),n=e.lerp(n,e.mouseY,.05);let t=e.map(r,0,e.width,0,255);e.fill(t,0,0),e.ellipse(r,n,100,100)}})},[]),(0,n.jsx)("div",{ref:e})}}}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1882],{6680:function(t,e,n){Promise.resolve().then(n.bind(n,3269))},3269:function(t,e,n){"use strict";n.r(e);var l=n(7437),s=n(1160),i=n(2815),a=n(3025);class h{draw(t){t.fillStyle=this.color,t.beginPath(),t.moveTo(0,0),t.lineTo(0-this.width/2,0),t.lineTo(0,0-this.height),t.lineTo(this.width/2,0),t.closePath(),t.fill()}constructor(t){this.angle=0,this.height=50,this.width=100,this.color="white",Object.assign(this,t)}}let o=[];class r{draw(t){t.globalAlpha=this.opacity,t.fillStyle=this.color,t.fillRect(this.p.x,this.p.y+this.falllen,this.width,this.width),t.globalAlpha=1}constructor(t){this.p=new a.Z(0,0),this.falllen=0,this.width=50,this.color="red",this.opacity=1,Object.assign(this,t)}}let c=[];e.default=t=>{let e=0,n=0,u=async(t,l)=>{t.canvas.parentElement&&(e=t.canvas.width=t.canvas.parentElement.clientWidth,n=t.canvas.height=t.canvas.parentElement.clientHeight),o=[];for(let t=0;t<6;t++)o.push(new h({width:(6-t)*70+5,height:(6-t)*30+10,angle:Math.PI/20,color:"hsl(".concat(10*t+60,",80%,50%)")}));i.p8.from(o,{angle:0,duration:1,stagger:.1,ease:"elastic.out(1, 0.3)"});for(let t=0;t<Math.ceil(100*Math.random())+20;t++){let l=80*Math.random()+20;c.push(new r({p:new a.Z(e*Math.random(),n-l),width:l,falllen:-(200*Math.random()+50),color:"hsl(".concat(10*t,",80%,50%)"),opacity:0}))}let s=!0;i.p8.to(c,{falllen:0,opacity:1,stagger:t=>.1*t,ease:"bounce.out",onComplete:()=>{s=!1}});let u=()=>{s?(d(),setTimeout(u,500)):Math.random()>.5&&d()};u()},g=0,d=()=>{let t=++g%2-.5;console.log(t),i.p8.to(o,{angle:t,duration:1,stagger:.1,ease:"elastic.out(1, 0.3)"})};return(0,l.jsx)("main",{className:"absolute w-full h-full bg-gray-100",children:(0,l.jsx)(s.Z,{className:"bg-black max-w-full",draw:t=>{t.clearRect(0,0,e,n),c.forEach(e=>e.draw(t)),t.save(),t.translate(e/2,n-50),o.forEach(e=>{t.rotate(e.angle),e.draw(t),t.translate(0,-e.height/1.5)}),t.restore()},init:u,update:()=>{}})})}},1160:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var l=n(7437),s=n(2265);let i=function(t,e,n){let l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1e3/30,i={time:l},a=(0,s.useRef)(null);return(0,s.useEffect)(()=>{if(!a.current)return;let s=a.current,h=s.getContext("2d"),o=0,r=0;if(h){e&&e(h,i);let s=()=>{t(h,++o,i),r=requestAnimationFrame(s)};n&&setInterval(()=>{console.log("fps",i.time),n(h,o,i)},l),s()}return()=>{window.cancelAnimationFrame(r)}},[t]),a};var a=t=>{let{draw:e,init:n,update:s,time:a,...h}=t,o=i(e,n,s,a);return(0,l.jsx)("canvas",{ref:o,...h})}},3025:function(t,e){"use strict";class n{static Polar(t,e){let l=e*(Math.PI/180),s=Math.cos(l)*t,i=Math.sin(l)*t;return new n(s,i)}set(t,e){return this.x=t,this.y=e,this}add(t){return new n(this.x+t.x,this.y+t.y)}sub(t){return new n(this.x-t.x,this.y-t.y)}mul(t){return new n(this.x*t,this.y*t)}unit(){return this.mul(1/this.length)}get length(){return Math.sqrt(this.x*this.x+this.y*this.y)}set length(t){let e=this.unit().mul(t);this.set(e.x,e.y)}eq(t){return this.x===t.x&&this.y===t.y}clone(){return new n(this.x,this.y)}angle(){return Math.atan2(this.y,this.x)}deg(){return parseInt(" ".concat(this.angle()*(180/Math.PI)))}toString(){return"(".concat(this.x,",").concat(this.y,")")}draw(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"black",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20;t.save(),t.beginPath(),t.moveTo(0,0),t.rotate(this.angle()),t.lineTo(this.unit().mul(n+3).length,0),t.lineTo(this.unit().mul(n+3).length-3,-4),t.lineTo(this.unit().mul(n+3).length-3,4),t.lineTo(this.unit().mul(n+3).length,0),t.strokeStyle=e,t.lineWidth=3,t.stroke(),t.fillStyle=e,t.fillText(this.toString(),n/3,-10),t.restore()}setRA(t,e){let l=e*(Math.PI/180),s=Math.cos(l)*t,i=Math.sin(l)*t;return new n(s,i)}constructor(t=0,e=0){this.x=0,this.y=0,this.set(t,e)}}n.PiToDeg=180/Math.PI,e.Z=n;let l=new n(4,0),s=new n(0,3),i=l.add(s);console.log(l+"+"+s+"="+i),console.log("length="+i.length);var a=l.sub(s);console.log(l+"-"+s+"="+a);var h=s.mul(2);console.log(s+"*2="+h);var o=new n(4,5);console.log(i.eq(o));var r=l.clone();r.set(1,0),console.log(r,l)}},function(t){t.O(0,[922,1654,2971,596,1744],function(){return t(t.s=6680)}),_N_E=t.O()}]);
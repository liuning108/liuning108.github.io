'use client'
import Canvas from "@/components/canvas/Canvas";
import * as dat from 'dat.gui';
import {useEffect, useState} from "react";
class Ball {
   private p: { x: number; y: number };
   v: { x: number; y: number };
   a: { x: number; y: number };
   private r: number;
   public dragging: boolean;

   constructor(x: number = 0, y: number = 0) {
      this.p = {
         x,
         y
      }
      this.v = {
         x: 5,
         y: 5,
      }

      this.a = {
         x: 0,
         y: 1,
      }

      this.r = 50
      this.dragging = false

   }

   draw(ctx: CanvasRenderingContext2D) {
      ctx.save()
      ctx.beginPath()
      ctx.translate(this.p.x, this.p.y)
      ctx.arc(0, 0, this.r, 0, Math.PI * 2)
      ctx.fillStyle = controls.color
      ctx.fill()
      ctx.restore()
   }

   update(ww: number, wh: number) {


      this.p.x += this.v.x
      this.p.y += this.v.y
      this.v.x +=this.a.x
      this.v.y +=this.a.y
      this.v.x *=controls.fade
      this.v.y *=controls.fade


      controls.vx = this.v.x
      controls.vy = this.v.y
      controls.ay = this.a.y


      this.checkBoundary(ww,wh)
   }

   checkBoundary(ww: number, wh: number){
      if(this.p.x+this.r>ww){
         this.v.x = -Math.abs(this.v.x)
      }

      if(this.p.x-this.r<0){
         this.v.x = Math.abs(this.v.x)
      }

      if(this.p.y+this.r>wh){
         this.v.y = -Math.abs(this.v.y)
      }


      if(this.p.y-this.r<0){
         this.v.y = Math.abs(this.v.y)
      }
   }


}

let controls= {
   vx:0,
   vy:0,
   ay:0.6,
   fade:0.99,
   update:true,
   color:'#fff',
   fps:30,
   step:()=>{
   }
}


const Page = (props:{hide:boolean}) => {

   let ww = 0;
   let wh = 0;

   let ball:Ball
   let mousePos ={x:0,y:0}
  const init = (ctx: CanvasRenderingContext2D,context:{time:number}) => {



      ctx.canvas.addEventListener("mousedown",(evt)=>{
          mousePos = {x:evt.offsetX,y:evt.offsetY}
         console.log("mP",mousePos)

      })

     if (ctx.canvas.parentElement){
        ww = ctx.canvas.width = ctx.canvas.parentElement.clientWidth
        wh = ctx.canvas.height=ctx.canvas.parentElement.clientHeight

     }

      ball = new Ball(ww/2,wh/2)
     controls.step = ()=>{ball.update(ww,wh)}
     const gui = new dat.GUI();

     gui.add(controls,"vx",-50,50)
         .listen().onChange((value)=>{
        ball.v.x =  value
     })

     gui.add(controls,"vy",-50,50)
         .listen().onChange((value)=>{
        ball.v.y =  value
     })


     gui.add(controls,"ay",-1,1).step(0.001)
         .listen().onChange((value)=>{
        ball.a.y =  value
     })

     gui.add(controls,"fade",0,1).step(0.01)
         .listen()

     gui.add(controls,"update")
         .listen()

     gui.addColor(controls,"color")
         .listen()
     gui.add(controls,"step")
     gui.add(controls,"fps",1,120).listen().onChange((value)=>{
        context.time = 1000/value
     })
     if(props.hide){
        gui.hide()
     }



   }
   const update = ()=>{
      if(!controls.update) return
      ball.update(ww,wh)


   }
   const draw = (ctx:CanvasRenderingContext2D) => {
      ctx.fillStyle="rgba(0,0,0,0.5)"
      ctx.fillRect(0,0,ww,wh)
      ball.draw(ctx)

   }
   return (
       <main className={"absolute w-full h-full bg-gray-100"}>
          <Canvas  className={"bg-black"} draw={draw} init={init} update={update}/>
       </main>

   )
}
export default Page

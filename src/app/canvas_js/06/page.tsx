'use client'
import Canvas from "@/components/canvas/Canvas";
import * as dat from 'dat.gui';
import {useEffect} from "react";
class Ball {
   private p: { x: number; y: number };
   v: { x: number; y: number };
   private a: { x: number; y: number };
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
      ctx.fillStyle = 'white'
      ctx.fill()
      ctx.restore()
   }

   update(ww: number, wh: number) {

      this.p.x += this.v.x
      this.p.y += this.v.y
      this.v.x +=this.a.x
      this.v.y +=this.a.y
      this.v.x *=0.99
      this.v.y *=0.99

      controls.vx = this.v.x

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

let controls = {
   vx:0,
   vy:0,
   ay:0.6
}

const Page = () => {

   let ww = 0;
   let wh = 0;

   let ball:Ball
   useEffect(()=>{
      const gui = new dat.GUI();

      gui.add(controls,"vx",-50,50)
          .listen().onChange((value)=>{
             ball.v.x =  value
      })

      gui.show()
   },[])

  const init = (ctx: CanvasRenderingContext2D) => {
      ww = ctx.canvas.width = window.innerWidth
      wh = ctx.canvas.height = window.innerHeight
      ball = new Ball(ww/2,wh/2)




   }
   const update = ()=>{
      ball.update(ww,wh)


   }
   const draw = (ctx:CanvasRenderingContext2D) => {
      ctx.fillStyle="rgba(0,0,0,0.5)"
      ctx.fillRect(0,0,ww,wh)
      ball.draw(ctx)

   }
   return (
       <main className={"min-h-screen bg-gray-100"}>
          <Canvas className={"bg-black"} draw={draw} init={init} update={update}/>
       </main>

   )
}
export default Page

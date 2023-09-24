'use client'
import Canvas from "@/components/canvas/Canvas";
import {GUI} from "dat.gui";
import {useEffect} from "react";
import Vector from "@/util/vector";

class Ball {
   p: Vector;
   v: Vector;
   a: Vector;
   r: number;
   public dragging: boolean;

   constructor(x: number = 0, y: number = 0) {
      this.p = new Vector(x, y)
      this.v = new Vector(5, 5)
      this.a = new Vector(0, 1)

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
      this.drawV(ctx)
   }

   drawV(ctx: CanvasRenderingContext2D) {
      ctx.beginPath()
      ctx.save()
      ctx.translate(this.p.x, this.p.y)
      ctx.scale(3,3)
      ctx.moveTo(0, 0)
      ctx.lineTo(this.v.x, this.v.y)
      ctx.strokeStyle = "blue"
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.lineTo(this.v.x, 0)
      ctx.strokeStyle = "red"
      ctx.stroke()


      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.lineTo(0, this.v.y)
      ctx.strokeStyle = "green"
      ctx.stroke()



      ctx.restore()
   }

   update(ww: number, wh: number) {
      if (this.dragging == false) {
         this.p = this.p.add(this.v)
         this.v = this.v.add(this.a)
         this.v = this.v.mul(controls.fade)
         controls.vx = this.v.x
         controls.vy = this.v.y
         controls.ay = this.a.y
         this.checkBoundary(ww, wh)
      }
   }


   checkBoundary(ww: number, wh: number) {
      if (this.p.x + this.r > ww) {
         this.v.x = -Math.abs(this.v.x)
      }

      if (this.p.x - this.r < 0) {
         this.v.x = Math.abs(this.v.x)
      }

      if (this.p.y + this.r > wh) {
         this.v.y = -Math.abs(this.v.y)
      }


      if (this.p.y - this.r < 0) {
         this.v.y = Math.abs(this.v.y)
      }
   }


}

let controls = {
   vx: 0,
   vy: 0,
   ay: 0.6,
   fade: 0.99,
   update: true,
   color: '#fff',
   fps: 30,
   step: () => {
   }
}

const Page = (props: any) => {

   let ww = 0;
   let wh = 0;

   let ball: Ball
   let mousePos: Vector = new Vector(0, 0)
   useEffect(() => {
      // const gui = new dat.GUI();
   })
   let gui: GUI;
  const init = async  (ctx: CanvasRenderingContext2D,context:{time:number}) => {



      ctx.canvas.addEventListener("mousedown",(evt)=>{
         mousePos = new Vector(evt.offsetX, evt.offsetY);
         let dist = mousePos.sub(ball.p).length
          if (dist<ball.r){
             console.log("Click Ball")
             ball.dragging =true

          }
      })
        ctx.canvas.addEventListener("mouseup",(evt)=>{
           ball.dragging = false
        })
     ctx.canvas.addEventListener("mousemove",(evt)=>{
        let nowPos = new Vector(evt.offsetX, evt.offsetY)
           if (ball.dragging){
              let delta = nowPos.sub(mousePos)

              ball.p = ball.p.add(delta)

              ball.v = delta.clone()


           }
         mousePos = nowPos
     })




        if (ctx.canvas.parentElement){
        ww = ctx.canvas.width = ctx.canvas.parentElement.clientWidth
        wh = ctx.canvas.height=ctx.canvas.parentElement.clientHeight

     }

      ball = new Ball(ww/2,wh/2)
     controls.step = ()=>{ball.update(ww,wh)}

     const dat = await import('dat.gui')



     if  (!gui) {
        gui = new dat.GUI()

        gui.add(controls, "vx", -50, 50)
            .listen().onChange((value) => {
           ball.v.x = value
        })

        gui.add(controls, "vy", -50, 50)
            .listen().onChange((value) => {
           ball.v.y = value
        })


        gui.add(controls, "ay", -1, 1).step(0.001)
            .listen().onChange((value) => {
           ball.a.y = value
        })

        gui.add(controls, "fade", 0, 1).step(0.01)
            .listen()

        gui.add(controls, "update")
            .listen()

        gui.addColor(controls, "color")
            .listen()
        gui.add(controls, "step")
        // gui.add(controls, "fps", 1, 120).listen().onChange((value) => {
        //    context.time = 1000 / value
        // })
        if (props.hide) {
           gui.hide()
        }

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

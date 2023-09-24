'use client'
import Canvas from "@/components/canvas/Canvas";
import Vector from "@/util/vector";


const Page = (props: any) => {

   let ww = 0;
   let wh = 0;



   let mosPos  = new Vector(0,0)

  const init = async  (ctx: CanvasRenderingContext2D,context:{time:number}) => {
     if (ctx.canvas.parentElement) {
        ww = ctx.canvas.width = ctx.canvas.parentElement.clientWidth
        wh = ctx.canvas.height=ctx.canvas.parentElement.clientHeight
     }


     ctx.canvas.addEventListener("mousemove",(e)=>{
         mosPos = new Vector(e.offsetX,e.offsetY)


     })


  }



   const draw = (ctx:CanvasRenderingContext2D) => {
       console.log("m2:" +mosPos)
       ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
       ctx.save()
           let c =new  Vector(ww/2,wh/2)
           ctx.translate(c.x,c.y)
           let md =mosPos.sub(c)
           md.mul(1/md.length()).mul(200).draw(ctx)
       ctx.restore()


      // const v1 = new Vector(250,0)
      // const v2 = new Vector(0,200)
      //  const v3 = v1.add(v2).mul(-1)
      //  ctx.translate(ww/2,wh/2)
      //  v1.draw(ctx)
      //  ctx.translate(v1.x,v1.y)
      //  v2.draw(ctx)
      //  ctx.translate(v2.x,v2.y)
      //  v3.draw(ctx)



   }




   return (
       <main className={"absolute w-full h-full bg-gray-100"}>
          <Canvas  className={"bg-white"} draw={draw} init={init} />
       </main>

   )
}
export default Page

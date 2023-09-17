'use client'
import Canvas from "@/components/canvas/Canvas";
const Page = () => {

    let r=5
    const init = (ctx:CanvasRenderingContext2D)=>{
        console.log("init")
        ctx.canvas.width= 400;
        ctx.canvas.height=400
    }
    const update = (ctx:CanvasRenderingContext2D,frameCount:number)=>{
        console.log("update",frameCount)
        r = 40*Math.sin(frameCount*0.02)**2;
    }

    const draw = (ctx:CanvasRenderingContext2D, frameCount:number) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.fillStyle = 'red'
        ctx.beginPath()
        ctx.arc(ctx.canvas.width/2, ctx.canvas.height/2, r, 0, 2*Math.PI)
        ctx.fill()
    }
    return (
        <div className={"bg-blue-200 min-h-screen flex justify-center items-center"}>
            <Canvas className={"bg-white shadow-lg"} draw={draw} init={init} update={update}  />
        </div>
           )

}
export default  Page

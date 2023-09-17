'use client'
import Canvas from "@/components/canvas/Canvas";
const Page = () => {

    const draw = (ctx:CanvasRenderingContext2D, frameCount:number) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.fillStyle = 'red'
        ctx.beginPath()
        ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
        ctx.fill()
    }
    return (
        <Canvas draw={draw}/>
    )

}
export default  Page

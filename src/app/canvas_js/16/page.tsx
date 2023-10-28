'use client'
import Canvas from "@/components/canvas/Canvas";


const Page = (props: any) => {

    let ww = 0;
    let wh = 0;

    const init = async (ctx: CanvasRenderingContext2D, context: { time: number }) => {
        if (ctx.canvas.parentElement) {
            ww = ctx.canvas.width = ctx.canvas.parentElement.clientWidth
            wh = ctx.canvas.height = ctx.canvas.parentElement.clientHeight
        }

    }

    const update = () => {


    }
    const draw = (ctx: CanvasRenderingContext2D) => {
    }
    return (
        <main className={"absolute w-full h-full bg-gray-100"}>
            <Canvas className={"bg-black"} draw={draw} init={init} update={update}/>
        </main>
    )


}
export default Page

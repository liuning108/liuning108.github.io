'use client'
import Canvas from "@/components/canvas/Canvas";
import Vector from "@/util/vector";


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

    let n = 100
    let r = 200
    const draw = (ctx: CanvasRenderingContext2D,time:number) => {
        ctx.clearRect(0,0,ww,wh)
        let cen = new Vector(ww/2,wh/2)
        ctx.save()
        ctx.beginPath()
        ctx.translate(cen.x,cen.y)
        ctx.arc(0,0,5,0,Math.PI*2)
        ctx.fillStyle = 'white'
        ctx.fill()

        ctx.save()
         let angleSpan = 360 / n


        for (let i = 0 ;i <n;i++){
            let sing =i%2==0?1:-1
            let p =Vector.Polar(r+sing*20,angleSpan*i+time*sing)
            ctx.beginPath()
            console.log("ff",)
            ctx.arc(p.x,p.y,Math.abs(Math.sin(time/20+i)*5)+2,0,Math.PI*2)
            ctx.closePath()

            ctx.fillStyle='rgba(255,255,255,9)'
            ctx.fill();

            ctx.beginPath()
            ctx.moveTo(0,0)
            ctx.lineTo(p.x,p.y)
            ctx.lineWidth=0.5
            ctx.strokeStyle = 'rgba(255,255,255,0.9)'
            ctx.stroke()
             sing =i%2==0?-1:1


            let p2 =p.add(Vector.Polar(30,angleSpan*i+time*3*sing))
            ctx.beginPath()
            ctx.arc(p2.x,p2.y,3,0,Math.PI*2)
            ctx.fillStyle='rgba(255,255,255,9)'
            ctx.fill();

            ctx.beginPath()
            ctx.moveTo(p.x,p.y)
            ctx.lineTo(p2.x,p2.y)
            ctx.lineWidth=0.5
            ctx.strokeStyle = 'rgba(255,255,255,0.9)'
            ctx.stroke()




        }




        ctx.restore()




        ctx.restore() //end

    }
    return (
        <main className={"absolute w-full h-full bg-gray-100"}>
            <Canvas className={"bg-[#141E46] max-w-full"} draw={draw} init={init} update={update}/>
        </main>
    )


}
export default Page

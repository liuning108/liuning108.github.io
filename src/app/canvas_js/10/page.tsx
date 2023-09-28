'use client'
import Canvas from "@/components/canvas/Canvas";
import Vector from "@/util/vector";
import {className} from "postcss-selector-parser";


const Page = (props: any) => {

    let ww = 0;
    let wh = 0;
    let mousePos = new Vector()
    let ps:Vector[]  = []
    const init = async (ctx: CanvasRenderingContext2D, context: { time: number }) => {
        if (ctx.canvas.parentElement) {
            ww = ctx.canvas.width = ctx.canvas.parentElement.clientWidth
            wh = ctx.canvas.height = ctx.canvas.parentElement.clientHeight
        }

        ctx.canvas.addEventListener("mousemove",(e)=>{
            mousePos = new Vector(e.x,e.y)
        })

        for (let i = 0;i<100;i++){
            ps.push(mousePos.setRA(80+Math.random()*ww/4,Math.random()*360) )
        }




    }

    const update = () => {


    }
    let time =0
    const draw = (ctx: CanvasRenderingContext2D) => {
        ctx.clearRect(0,0,ww,wh)
        time++
        //draw background
        ctx.beginPath()
        ctx.moveTo(ww/2,0)
        ctx.lineTo(ww/2,wh)
        ctx.moveTo(0,wh/2)
        ctx.lineTo(ww,wh/2)
        ctx.lineWidth=2
        ctx.strokeStyle = '#FFF5E0'
        ctx.stroke()

        //cent pointe
        ctx.save()
            let cen = new Vector(ww/2,wh/2)
            let delta = cen.add(cen.setRA(Math.sin(time/100)*ww/2,time*1.5%360)).sub(cen)
            ctx.translate(cen.x,cen.y)

            //draw Cent Point
            ctx.beginPath()
            ctx.arc(0,0,5,0,Math.PI*2)
            ctx.fillStyle = "#FFF5E0"
            ctx.fill()


           // ctx.save()
           //     ctx.beginPath()
           //     ctx.rotate(delta.angle())
           //     ctx.moveTo(0,0)
           //     ctx.lineTo(delta.length,0)
           //     ctx.strokeStyle = '#FFF5E0'
           //     ctx.stroke()
           // ctx.restore()


            let t1 = delta.setRA(delta.length+4,delta.deg()-10)
            let t2 = delta.setRA(delta.length+4,delta.deg()+10)

        ctx.beginPath()
        ctx.save()
            ctx.moveTo(0,0)
            ctx.lineTo(t1.x,t1.y)
            ctx.lineTo(t2.x,t2.y)
            ctx.closePath()
        ctx.fillStyle = 'rgba(255, 105, 105,0.3)'
            ctx.fill()
        ctx.restore()

        ps.forEach(p=>{
            ctx.save()
            ctx.beginPath()
            ctx.translate(p.x,p.y)
            ctx.fillStyle="white"
            if(t2.length>p.length && t1.angle()<p.angle() && p.angle()<t2.angle())
            {
                ctx.fillStyle="#C70039"
            }


            ctx.arc(0,0,8,0,Math.PI*2)
            ctx.fill()
            ctx.restore()
        })



        ctx.restore()





        //draw Circle



        ctx.save()
        ctx.beginPath()
        ctx.translate(cen.x ,cen.y)
        ctx.arc(0,0,delta.length,0,Math.PI*2)
        ctx.lineWidth=3
        ctx.strokeStyle = "#FFF5E0"
        ctx.stroke()
        ctx.restore()






    }
    return (
        <main className={"absolute w-full h-full bg-gray-100"}>
            <Canvas className={"bg-[#141E46]"} draw={draw} init={init} update={update}/>
        </main>
    )


}
export default Page

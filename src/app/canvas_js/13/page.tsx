'use client'
import Canvas from "@/components/canvas/Canvas";
import {useEffect} from "react";


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
    const draw = (ctx: CanvasRenderingContext2D,time:number) => {
        ctx.clearRect(0,0,ww,wh)

        ctx.save()
        ctx.beginPath()
        ctx.translate(0,wh/2)
        for (var  x = 0 ; x<ww; x++){
            let y =  Math.sin(x/40-time/30)*30
            y += Math.random()*20
            ctx.lineTo(x,y)
        }
        ctx.strokeStyle = 'rgba(255,255,255,0.2)'
        ctx.stroke()
        ctx.restore()

        let anmp = 40
        let s  = anmp*2

        //
        ctx.save()
        ctx.beginPath()
        ctx.lineWidth=2
        for(let y = 0 ;y<wh;y++){
            let x = ww/2;
            x+= Math.sin(y/s -time/15)*anmp
            ctx.lineTo(x,y)
        }
        ctx.strokeStyle = 'rgba(255,200,50,0.1)'
        ctx.stroke()


        ctx.beginPath()
        for(let y = 0 ;y<wh;y++){
            let x = ww/2;
            x+= Math.sin(-y/s+time/15)*anmp
            ctx.lineTo(x,y)
        }

        ctx.strokeStyle = 'rgba(255,200,50,0.1)'
        ctx.stroke()
        ctx.restore()


        ctx.save()

        for(let y = 0 ;y<wh;y+=30){
            let x1 = ww/2;
            x1+= Math.sin(y/s -time/15)*anmp
            ctx.beginPath()
            ctx.arc(x1,y,Math.abs(Math.sin(y+time/10)*5+4),0,Math.PI*2)
             let i = y
            ctx.fillStyle="rgb("+i/4+","+i/2+","+(50+i/1.5)+")"

            ctx.fill()

            let x2 = ww/2
            x2+= Math.sin(-y/s+time/15)*anmp
            ctx.beginPath()
            ctx.arc(x2,y,Math.abs(Math.cos(y-time/10)*5+4),0,Math.PI*2)
             i = y
            ctx.fillStyle="rgb("+255+","+i/2+","+(50+i/10)+")"

            ctx.fill()

            ctx.beginPath()
            ctx.moveTo(x1,y)
            ctx.lineTo(x2,y)
            i = y
            ctx.strokeStyle="rgb("+255+","+i/2+","+(50+i/10)+")"
            ctx.stroke()



        }


        ctx.restore()


    }
    return (
        <main className={"absolute w-full h-full bg-gray-100"}>
            <Canvas className={"bg-black"} draw={draw} init={init} update={update}/>
        </main>
    )


}
export default Page

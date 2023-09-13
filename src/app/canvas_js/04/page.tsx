'use client'
import {retry} from "@reduxjs/toolkit/query";
import {useEffect, useRef} from "react";
import {deflateRaw} from "zlib";



const Page = () => {

    let time =0
    let mouse = {x:0,y:0}
    const draw = (ctx:CanvasRenderingContext2D) =>{
        // ctx.fillStyle="rgba(255,255,255,0.2)"
        // ctx.fillRect(0,0,400,400)

        ctx.clearRect(0,0,400,400)
        time++
        //grid
        ctx.beginPath()
        for(let i =0 ;i<10;i++){
            let pos = i * 50
            ctx.moveTo(pos,0)
            ctx.lineTo(pos,400)
            ctx.fillText(pos.toString(),pos,10)
            ctx.moveTo(0,pos)
            ctx.lineTo(400,pos)
            ctx.fillText(pos.toString(),0,pos)
        }
        ctx.strokeStyle = "rgba(0,0,0,0.1)"
        ctx.stroke()

        //

        ctx.beginPath()
        ctx.moveTo(25,350)
        ctx.lineTo(375,350)
        ctx.lineWidth =2
        ctx.strokeStyle='black'
        ctx.stroke()

      //
        ctx.fillStyle  = '#ed5a2a'
        ctx.fillRect(300,300,50,50)
        ctx.strokeRect(300,300,50,50)

        ctx.beginPath()
            ctx.rect(250,250,50,100)
            ctx.rect(50,300,50,50)
        ctx.fillStyle = "#ffc12c"
        ctx.fill()
        ctx.stroke()


        ctx.beginPath()
            ctx.rect(100,250,50,100)
            ctx.rect(200,250,50,100)
        ctx.fillStyle = "#ff9f51"
        ctx.fill()
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(100,200)
        ctx.lineTo(250,200)
        ctx.lineTo(250,250)
        ctx.lineTo(200,250)
        ctx.arc(175,250,25,Math.PI*2,Math.PI,true)
        ctx.lineTo(100,250)
        ctx.closePath()
        ctx.fillStyle='white'
        ctx.fill()
        ctx.stroke()

        //roof
        ctx.beginPath()
            ctx.moveTo(100,200)
            ctx.lineTo(175,150)
            ctx.lineTo(250,200)
        ctx.closePath()
        ctx.fillStyle = "#ed5a2a"
        ctx.fill()
        ctx.stroke()


        //flag
        ctx.beginPath()

        ctx.lineTo(175,150)
        ctx.lineTo(175,100-(mouse.y/5))
        ctx.lineTo(200,110-(time%5)-(mouse.y/5))
        ctx.lineTo(175,120-(mouse.y/5))

        ctx.closePath()
        ctx.fillStyle = `hsl(${mouse.x%360},50%,50%)`
        ctx.fill()
        ctx.stroke()

        let carx = time%440-40
        //car
        ctx.fillStyle='white'
        ctx.fillRect(carx,320,40,25)
        ctx.strokeRect(carx,320,40,25)
        ctx.beginPath()

        ctx.arc(carx+10,350,5,0,Math.PI*2)
        ctx.arc(carx+30,350,5,0,Math.PI*2)

        ctx.closePath()
        ctx.fillStyle = "black"
        ctx.fill()
        ctx.stroke()


        ctx.beginPath()
        ctx.arc(mouse.x,mouse.y,5,0,Math.PI*2)
        ctx.fillStyle='black'
        ctx.fill()








    }

    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(()=>{
        if(canvasRef.current==null)return;
        const canvas = canvasRef.current
        canvas.width=400
        canvas.height=400

        // @ts-ignore
        const context = canvas.getContext('2d')
        if(context){
            setInterval(()=>{
                draw(context)
            },30)

        }
        canvas.addEventListener("mousemove",function (evt) {
            mouse.x = evt.offsetX
            mouse.y = evt.offsetY
        })

    },[draw])

    return (
        <main className={"flex absolute w-full justify-center items-center h-full flex-1"}>
            <canvas className={"border-[3px] border-solid border-black bg-white max-w-full"} ref={canvasRef} ></canvas>
        </main>
    )
}

export default Page

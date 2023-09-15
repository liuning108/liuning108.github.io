'use client'
import {retry} from "@reduxjs/toolkit/query";
import {useEffect, useRef} from "react";
import {deflateRaw} from "zlib";
import {create} from "zustand";
import {types} from "sass";
import Color = types.Color;



const Page = () => {

    const block = 200
    const PI = Math.PI
    const PI2 = PI*2
    const color = {
        red:"#F74456",
        white:"#fff",
        yellow:"#F1DA56",
        blue:"#036FAF"
    }
    let time =0
    let mouse = {x:0,y:0}

    let drawCircle:any =null;




    const draw = (ctx:CanvasRenderingContext2D) =>{
        time++
        let stime = Math.round(time/40)
        console.log("stime",stime)

        function drawBlock(pos:{x:number,y:number},bgColor:string,draw:()=>void,time:number){
            ctx.save()
            ctx.translate(pos.x*block,pos.y*block)
            ctx.fillStyle = bgColor
            ctx.fillRect(0,0,block,block)
            ctx.translate(100,100)
            draw()
            ctx.restore()

        }
        drawBlock({x:0,y:0},color.blue,function () {
            ctx.beginPath()
            ctx.arc(0,0,30/(stime%3+1),0,PI2)
            ctx.strokeStyle=color.white
            ctx.lineWidth =15
            ctx.stroke()
            for (let i = 0 ; i<8;i++){
                ctx.fillStyle = (stime%8==i)?color.red:color.white
                if ((i+stime)%4!=0){
                    ctx.fillRect(60,-4,20,8)
                }
                ctx.rotate(PI2/8)
            }

        },time)
        drawBlock({x:1,y:0},color.red,function () {
            ctx.save()

            ctx.scale(0.8,0.8)
            ctx.translate(-60,-60)
            for (let i=0;i<3;i++){
                for (let o=0;o<3;o++){
                    ctx.save()
                    ctx.translate(i*60,o*60)
                    ctx.beginPath()
                    ctx.arc(0,0,20,0,PI2)
                    ctx.fillStyle = color.white
                    if((i+o*3+stime)%5==0){
                        ctx.fillStyle = color.yellow
                    }
                    ctx.fill()
                    ctx.restore()

                }
            }
            ctx.restore()

        },time)

        drawBlock({x:2,y:0},color.yellow,function () {

            for (let i =0 ;i<4;i++){
                ctx.beginPath()
                ctx.moveTo(0,0)
                ctx.lineTo(80,20)
                ctx.lineTo(80,80)
                ctx.closePath()
                ctx.fillStyle=color.white
                ctx.fill()
                if(stime%4==i){
                    ctx.beginPath()
                    ctx.arc(60,40,6,0,PI2)
                    ctx.fillStyle=color.red
                    ctx.fill()

                }
                ctx.rotate(PI2/4)


            }




        },time)


        drawBlock({x:0,y:1},color.yellow,function () {
            ctx.translate(-60,-60)
            ctx.fillStyle = color.white
            ctx.fillRect(0,0,60,60)

            ctx.translate(30,30)
            ctx.rotate(-PI/4)
            ctx.beginPath()
            ctx.moveTo(0,0)
            ctx.lineTo(40,0)
            ctx.arc(40,40,40,-PI/2,PI/2)
            ctx.lineTo(0,80)
            ctx.closePath()
            ctx.fillStyle = color.red
            ctx.fill()

            ctx.translate(-100+10*Math.sin(time/10),60)
            ctx.fillStyle=color.blue
            ctx.fillRect(0,0,100,40)


            ctx.translate(100+10*Math.cos(time/10),60)
            ctx.fillStyle=color.white
            ctx.fillRect(0,0,50,20)




        },time)
        drawBlock({x:1,y:1},color.white,function () {

            ctx.beginPath()
            ctx.fillStyle = color.red
            let angle1 = (time%200)/200*PI2
            let angle2  = (time%100)/100*PI2
            ctx.moveTo(0,0)
            ctx.arc(0,0,80,angle1,angle2)
            ctx.fill()
            ctx.fillStyle=color.yellow
            drawCircle(60,60,30)

        },time)

        drawBlock({x:2,y:1},color.blue,function () {
            ctx.fillStyle = color.white
            drawCircle(0,0,80)
            ctx.rotate(time/30)
            ctx.fillStyle = color.red
            drawCircle(-30,0,20)
            ctx.rotate(time/40)
            ctx.fillStyle = color.yellow
            drawCircle(40,0,50)
        },time)


        drawBlock({x:0,y:2},color.red,function () {
            ctx.rotate(time/100)
            for(let i =0;i<8;i++){
                ctx.rotate(PI2/8)
                ctx.fillStyle = color.white
                let r =16
                if((stime+i)%4<2){
                  r =10
                }
                drawCircle(60,0,r)
                ctx.fillStyle = color.yellow
                drawCircle(30,5,20-r)

            }


        },time)
        drawBlock({x:1,y:2},color.blue,function () {
            ctx.translate(-80,-100)
            ctx.fillStyle = color.yellow
            ctx.fillRect(0,0,40,time%200)



            ctx.translate(40,40)
            ctx.fillStyle = color.red
            ctx.fillRect(0,0,120,80)

            ctx.fillStyle = color.white
            drawCircle(0,40,stime%20)

            ctx.translate(70,80)
            ctx.fillStyle = color.white
            ctx.fillRect(0,0,50,80)


        },time)

        drawBlock({x:2,y:2},color.yellow,function () {
            ctx.beginPath()
            ctx.moveTo(-100,-100)
            ctx.lineTo(0,-100)
            ctx.lineTo(-100,100)
            ctx.closePath()
            ctx.fillStyle = color.white
            ctx.fill()

            ctx.rotate(PI)
            ctx.save()
            ctx.translate(time%100,0)
                ctx.beginPath()
                ctx.moveTo(-100,-100)
                ctx.lineTo(0,-100)
                ctx.lineTo(-100,100)
                ctx.closePath()
                ctx.fillStyle = color.red
                ctx.fill()
            ctx.restore()


        },time)

    }

    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(()=>{
        if(canvasRef.current==null)return;
        const canvas = canvasRef.current
        canvas.width = block*3
        canvas.height = block*3



        // @ts-ignore
        const context = canvas.getContext('2d')
        if(context){
            // @ts-ignore
            drawCircle= function (x:number,y:number,r:number){
                context.beginPath()
                context.arc(x,y,r,0,PI2)
                context.fill()

            }
            let anination = ()=>{
                draw(context)
                requestAnimationFrame(anination)
            }
            requestAnimationFrame(anination)

        }
        canvas.addEventListener("mousemove",function (evt) {
            mouse.x = evt.offsetX
            mouse.y = evt.offsetY
        })

    },[draw])

    return (
        <main className={"flex absolute w-full justify-center items-center h-full bg-[#eee]"}>
            <canvas className={"bg-white shadow-md max-w-full"} ref={canvasRef} ></canvas>
        </main>
    )
}

export default Page

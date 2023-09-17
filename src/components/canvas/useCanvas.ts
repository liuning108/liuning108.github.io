import {useEffect, useRef} from "react";

export  const useCanvas = (draw:any,init:any,update:any,time:number=30) => {
    const canvasRef = useRef<HTMLCanvasElement|null>(null)
    useEffect(()=>{
        if(!canvasRef.current){
            return
        }
        const canvas = canvasRef.current
        const  ctx = canvas.getContext("2d")
        let frameCount = 0
        let animationFrameId =0;

        if (ctx){
            if(init){
                init(ctx)
            }
            const  render=()=>{
                frameCount++
                draw(ctx,frameCount)
                animationFrameId = requestAnimationFrame(render)

            }
            if(update){
                setInterval(()=>{
                    update(ctx,frameCount)
                },time)
            }


            render()

        }
        return ()=>{
            window.cancelAnimationFrame(animationFrameId)
        }

    },[draw])
    return canvasRef

}

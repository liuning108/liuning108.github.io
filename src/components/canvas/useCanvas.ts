import {useEffect, useRef} from "react";

export  const useCanvas = (draw:any,init:any,update:any,time:number=1000/30) => {
    let context = {
        time,
    }
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
                init(ctx,context)
            }
            const  render=()=>{
                frameCount++
                draw(ctx,frameCount,context)
              ///  animationFrameId = requestAnimationFrame(render)
                setTimeout(render,context.time)
            }

            if(update){
                const  up=()=>{
                    console.log("fps",context.time)
                    update(ctx,frameCount,context)

                }
                setInterval(up,1000/30)
            }


            render()

        }
        return ()=>{
            window.cancelAnimationFrame(animationFrameId)
        }

    },[draw])
    return canvasRef

}

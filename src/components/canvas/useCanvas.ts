import {useEffect, useRef} from "react";

export  const useCanvas = draw => {
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
            const  render=()=>{
                frameCount++
                draw(ctx,frameCount)
                animationFrameId = requestAnimationFrame(render)

            }
            render()

        }
        return ()=>{
            window.cancelAnimationFrame(animationFrameId)
        }

    },[draw])
    return canvasRef

}


import {useEffect, useRef} from "react";

// @ts-ignore
const Canvas = props => {
    const  canvasRef = useRef(null)

    useEffect(()=>{

    },[])

    return  <canvas ref={canvasRef} {...props}></canvas>
}
export  default Canvas

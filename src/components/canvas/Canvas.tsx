
'use client'
import {useEffect, useRef} from "react";
import {useCanvas} from "@/components/canvas/useCanvas";

// @ts-ignore
const Canvas = props => {
    const { draw, ...rest } = props
    let canvasRef  = useCanvas(draw)
    return  <canvas ref={canvasRef} {...rest}></canvas>
}
export  default Canvas

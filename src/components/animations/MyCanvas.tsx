import React from "react";
import { useCanvas } from "./useCanvas";
export interface CanvasProps {
  draw: (ctx: RenderingContext, frameCount: number) => void;
  init?: (ctx: RenderingContext) => void;
  update?: (ctx: RenderingContext) => void;
  time?: number;
  [key: string]: any;
}
const MyCanvas = ({
  draw,
  init,
  update,
  time = 1000 / 30,
  ...rest
}: CanvasProps) => {
  let canvasRef = useCanvas({ draw, init, update, time });
  return <canvas ref={canvasRef} {...rest}></canvas>;
};

export default MyCanvas;

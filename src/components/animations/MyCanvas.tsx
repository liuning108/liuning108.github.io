import React from "react";
import { useCanvas } from "./useCanvas";
export interface CanvasProps extends React.HTMLAttributes<HTMLCanvasElement> {
  draw: (ctx: RenderingContext, frameCount: number) => void;
  init?: (ctx: RenderingContext) => void;
  update?: () => void;
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

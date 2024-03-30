"use client";

import { useEffect, useRef } from "react";
import { CanvasProps } from "./MyCanvas";

export const useCanvas = ({
  draw,
  init,
  update,
  time = 1000 / 30,
}: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let frameCount = 0;
    let animationFrameId = 0;
    let animationIntervalID: NodeJS.Timeout;
    if (ctx) {
      if (init) init(ctx);
      const render = () => {
        frameCount++;
        ctx.save();
        draw(ctx, frameCount);
        ctx.restore();
        animationFrameId = requestAnimationFrame(render);
      };
      render();
      if (update) {
        const up = () => {
          update(ctx);
        };
        animationIntervalID = setInterval(up, time);
      }
      return () => {
        window.cancelAnimationFrame(animationFrameId);
        window.clearInterval(animationIntervalID);
      };
    }
  }, [draw]);

  return canvasRef;
};

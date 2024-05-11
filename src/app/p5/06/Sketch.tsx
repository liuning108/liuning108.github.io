import React, { useEffect, useRef } from "react";
import p5 from "p5";
import { stat } from "fs";
let values: Array<number> = [];
let states: Array<number> = [];
const Sketch = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const dom = canvasRef.current as HTMLDivElement;

    const sketch = (p: p5) => {
      p.setup = () => {
        p.createCanvas(710, 400).parent(dom);
        p.background(140);
        for (let i = 0; i < p.width / 8; i++) {
          values.push(p.random(p.height));
          states.push(-1);
        }
        quickSort(0, values.length - 1);
      };

      p.draw = () => {
        p.background(140);
        for (let i = 0; i < values.length; i++) {
          p.fill(255);
          if (states[i] == 1) {
            p.fill("#D6FFB7");
          }
          if (states[i] == 0) {
            p.fill("red");
          }
          p.rect(i * 8, p.height - values[i], 8, values[i]);
        }
      };
    };
    new p5(sketch);
  }, []);

  return <div className="opacity-20" ref={canvasRef}></div>;
};

async function quickSort(start: number, end: number) {
  if (start > end) {
    return;
  }

  for (let i = 0; i < values.length; i++) {
    await sleep(200);
    states[i - 1] = -1;
    states[i] = 0;
  }

  // let index = await partition(start, end);
  // states[index] = -1;
  // await Promise.all([quickSort(start, index - 1), quickSort(index + 1, end)]);
}

async function partition(start: number, end: number): Promise<number> {
  for (let i = start; i < end; i++) {
    states[i] = 1;
  }
  let pivotIndex = start;
  states[pivotIndex] = 0;
  let pivotElement = values[end];
  for (let i = start; i < end; i++) {
    if (values[i] < pivotElement) {
      await swap(i, pivotIndex);
      states[pivotIndex] = -1;
      pivotIndex++;
      states[pivotIndex] = 0;
    }
  }
  await swap(end, pivotIndex);
  for (let i = start; i < end; i++) {
    // restore original state
    if (i != pivotIndex) {
      states[i] = -1;
    }
  }
  return pivotIndex;
}

async function swap(i: number, j: number) {
  // adjust the pace of the simulation by changing the
  // value
  await sleep(25);
  let temp = values[i];
  values[i] = values[j];
  values[j] = temp;
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default Sketch;

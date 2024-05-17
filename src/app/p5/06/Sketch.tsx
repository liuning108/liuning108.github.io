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
        p.createCanvas(710, 300).parent(dom);
        p.background(0);
        for (let i = 0; i < p.width / 10; i += 1) {
          values.push(p.random(p.height));
          states.push(-1);
        }
        quickSort(0, values.length - 1);
      };

      p.draw = () => {
        p.background("#481E14"); //481E14
        for (let i = 0; i < values.length; i++) {
          p.noStroke();
          p.fill("#FEEFAD");
          if (states[i] == 1) {
            p.fill("#F3B95F");
          }
          if (states[i] == 0) {
            p.fill("#EE4266");
          }
          p.rect(i * 10, p.height - values[i], 5, values[i]);
        }
      };
    };
    let inst = new p5(sketch);
    return () => {
      inst.remove();
    };
  }, []);

  return (
    <div>
      <h1 className={" mb-2 font-bold text-2xl text-slate-100"}>quickSort</h1>
      <div ref={canvasRef}></div>
    </div>
  );
};

async function quickSort(start: number, end: number) {
  if (start > end) {
    return;
  }

  for (let i = 0; i < values.length; i++) {
    await sleep(50);
    states[i - 1] = -1;
    states[i] = 0;
  }

  let index = await partition(start, end);
  states[index] = -1;
  await Promise.all([quickSort(start, index - 1), quickSort(index + 1, end)]);
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
  await sleep(50);
  let temp = values[i];
  values[i] = values[j];
  values[j] = temp;
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default Sketch;

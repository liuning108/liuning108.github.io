"use client";
import dynamic from "next/dynamic";
import React from "react";
const Sketch = dynamic(() => import("./Sketch"), { ssr: false });
import { className } from "postcss-selector-parser";

function page() {
  return (
    <div
      className={
        "absolute w-full h-[300vh] flex justify-center items-center bg-[#0C0C0C]"
      }
    >
      <Sketch></Sketch>
    </div>
  );
}

export default page;

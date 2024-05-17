"use client";
import React from "react";
import dynamic from "next/dynamic";
const Sketch = dynamic(() => import("./Sketch"), { ssr: false });

function page() {
  return (
    <div
      className={
        "absolute w-full h-full flex justify-center items-center bg-[#0C0C0C]"
      }
    >
      <Sketch></Sketch>
    </div>
  );
}

export default page;

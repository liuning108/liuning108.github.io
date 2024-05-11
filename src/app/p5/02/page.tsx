"use client";
import dynamic from "next/dynamic";
import React from "react";
const Sketch = dynamic(() => import("./Sketch"), { ssr: false });

function page() {
  return (
    <div className="flex justify-center items-center align-center h-screen">
      <Sketch></Sketch>
    </div>
  );
}

export default page;

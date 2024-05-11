"use client";
import dynamic from "next/dynamic";
import React from "react";
const Sketch = dynamic(() => import("./Sketch"), { ssr: false });

function page() {
  return (
    <div>
      <Sketch></Sketch>
    </div>
  );
}

export default page;

"use client";
import React from "react";
import dynamic from "next/dynamic";
const Sketch = dynamic(() => import("./Sketch"), { ssr: false });
function page() {
  return (
    <div>
      <Sketch></Sketch>
    </div>
  );
}

export default page;

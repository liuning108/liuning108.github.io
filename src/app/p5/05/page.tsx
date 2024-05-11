"use client";
import React from "react";
const Sketch = dynamic(() => import("./Sketch"), { ssr: false });
import { className } from "postcss-selector-parser";
import dynamic from "next/dynamic";

function page() {
  return (
    <div>
      <h1>合同</h1>
      <Sketch></Sketch>
    </div>
  );
}

export default page;

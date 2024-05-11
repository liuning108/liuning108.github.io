"use client";
import React from "react";
import dynamic from "next/dynamic";
const Sketch = dynamic(() => import("./Sketch"), { ssr: false });
import { Console } from "console";

function page(props: any) {
  return (
    <div className={"absolute w-full h-full flex justify-center items-center"}>
      <Sketch config={props}></Sketch>
    </div>
  );
}

export default page;

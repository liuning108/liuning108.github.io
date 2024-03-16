"use client";
import React, { useEffect, useRef } from "react";

const DomTSPage01 = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    // ref
    console.log(ref?.current);
    let domCurent = ref?.current;
    if (domCurent) {
      domCurent.innerText = "DomTSPage01 Updateed";
    }
    // dom
    const dom = document.querySelector("#domTsPage01");
    if (dom) {
      const p = document.createElement("p");
      p.textContent = "Hello I am P";
      dom.appendChild(p);
    }
  }, []);
  return (
    <div ref={ref} id="domTsPage01">
      DomTSPage01
    </div>
  );
};

export default DomTSPage01;

"use client";
import { useEffect } from "react";
import "./all.sass";
import xsheet from "./xsheet";
const Page = () => {
  useEffect(() => {
    xsheet(document.getElementById("cavas"));
  }, []);
  return <canvas width="800" height="600" id="cavas"></canvas>;
};
export default Page;

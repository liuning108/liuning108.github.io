"use client";
import React from "react";
import useStore from "./useStore";

function page() {
  return (
    <div>
      <BearCounter /> <br /> <BearControl />
    </div>
  );
}

function BearCounter() {
  const bears = useStore((state: any) => state.bears);
  return <>{bears}</>;
}

function BearControl() {
  const increasePopulation = useStore((state: any) => state.increasePopulation);
  return <button onClick={increasePopulation}>one up</button>;
}

export default page;

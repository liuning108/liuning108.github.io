"use client";
import React, { useEffect } from "react";

const DomsTs04Page = () => {
  useEffect(() => {
    const elements =
      document.querySelectorAll<HTMLElement>("#shops .list-item");
    let count = 1;
    for (const ele of elements) {
      ele.style.backgroundColor = "#CCC";
      ele.style.margin = "10px";
      ele.textContent = `${count++}.${ele.textContent}`;
    }
  }, []);

  return (
    <div>
      <h1>Liuning Coffee Home</h1>
      <h2>Our Coffee</h2>
      <div id="coffees">
        <p className="list-item">Cappuccio</p>
        <p className="list-item">Espresso</p>
        <p className="list-item">Mocha</p>
      </div>
      <h2>Out Shops</h2>
      <div id="shops">
        <p className="list-item">FrankFurt</p>
        <p className="list-item">Zunich</p>
      </div>
    </div>
  );
};

export default DomsTs04Page;

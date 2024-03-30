"use client ";
import React, { useEffect } from "react";

export const DomsTs04Page = () => {
  useEffect(() => {}, []);

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

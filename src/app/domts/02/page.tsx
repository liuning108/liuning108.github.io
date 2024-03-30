"use client";
import { Console } from "console";
import React, { useEffect } from "react";
import { BiDotsHorizontal } from "react-icons/bi";

const DomTSPage02 = () => {
  useEffect(() => {
    walkNode4(document);
  }, []);

  const walkNode4 = (document: Document) => {
    const treeWalker = document.createTreeWalker(
      document,
      NodeFilter.SHOW_ELEMENT
    );
    let node = treeWalker.nextNode();
    while (node) {
      if (node instanceof HTMLParagraphElement) {
        node.style.background = "#CCC";
      }
      console.log(node.nodeName, treeWalker);

      node = treeWalker.nextNode();
    }
  };

  const walkNode = (node: Node, level: number) => {
    if (!node) {
      return;
    }
    let plitline = "    ".repeat(level);
    if (node.nodeType === Node.ELEMENT_NODE) {
      console.log(plitline + node.nodeName);
    }
    if (node.childNodes) {
      for (let i = 0; i < node.childNodes.length; i++) {
        walkNode(node.childNodes[i], level + 1);
      }
    }
  };

  return (
    <div>
      <h1>Bar Bar Bar </h1>
      <div>
        <p>Cappcconpo</p>
        <p>EspnessD</p>
        <p>Macha</p>
      </div>
    </div>
  );
};

export default DomTSPage02;

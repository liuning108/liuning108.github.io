"use client";
import React, { useEffect, useRef } from "react";
import styles from "./page01.module.scss";
import { className } from "postcss-selector-parser";
const Page01 = () => {
  const navRef = useRef<HTMLElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {}, []);

  const buttonClickHandler = () => {
    navRef.current?.classList.toggle(styles["nav-slide"]);
    pRef.current?.classList.toggle(styles["fade"]);
  };

  return (
    <div>
      <nav ref={navRef} className={styles.nav}>
        <p ref={pRef} className={styles.p}>
          Yoshy
        </p>
      </nav>
      <section className={styles.section}>
        <button onClick={buttonClickHandler} className={styles.button}>
          Hover Me
        </button>
      </section>
    </div>
  );
};

export default Page01;

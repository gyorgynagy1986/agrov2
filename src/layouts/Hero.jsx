"use client";
import React, { useState, useRef, useEffect } from "react";

import Image from "next/image";
import { alt } from "@/doc/alt";
import HeroPhoto from "../../public/assets/hero2.png";
import Logo from "../../public/assets/logo.png";
import styles from "./Hero.module.css";
import StickyNav from "@/layouts/Nav";

const Hero = ({language}) => {
  const menuRef = useRef(null);
  const [stickyNav, setStickyNav] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStickyNav(false);
        } else {
          setStickyNav(true);
        }
      },
      { rootMargin: "0px 20px 20px 20px" }
    );

    setTimeout(() => {
      observer.observe(menuRef.current);
    }, 1000); // 1 másodperc késleltetés
  }, []);

  return (
    <div ref={menuRef} className={styles.heroContainer}>
     
      <div className={styles.textContainer}>
        <div className={styles.textContainerHelper}>
          <Image src={Logo}></Image>
          <div className={styles.titles}>
            <h1 className={`${styles.h1}`}>{language.products.cart}</h1>
            <p className={`${styles.p}`}>
              100%-ban magyar, családi vállalkozás többgenerációs termelői
              tapasztalattal
            </p>
          </div>
          <div className={styles.fakeBtnContainer}>
            <div className={styles.fakeBtnContainerItems}>
              <button className={styles.span}>VERSENYKÉPES ÁRAK</button>
              <button className={styles.span}>RUGALMAS SZÁLLÍTÁS</button>
            </div>
            <button className={`${styles.span} ${styles.span2}`}>
              GYORS FIZETÉS
            </button>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          priority
          className={`${styles.heroImage} ${styles.kenburnsLeft}`}
          src={HeroPhoto}
          alt="Országos terménykereskedelem"
        />
      </div>
    </div>
  );
};

export default Hero;

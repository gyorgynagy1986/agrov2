"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import HeroPhoto from "../../../public/assets/hero2.png";
import Logo from "../../../public/assets/logo.png";
import styles from "./Hero.module.css";
import Sticky from "@/layouts/navigation/Nav";

const Hero = ({ language }) => {
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

    const observeMenu = () => {
      if (menuRef.current) {
        observer.observe(menuRef.current);
      }
    };

    const timeoutId = setTimeout(observeMenu, 1000);

    // Cleanup on component unmount
    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={menuRef} className={styles.heroContainer}>
      {stickyNav && <Sticky sticky={stickyNav} navContent={language} />}
      <div className={styles.textContainer}>
        <div className={styles.textContainerHelper}>
          <Image src={Logo} alt="Logo" />
          <div className={styles.titles}>
            <h1 className={`${styles.h1}`}>{language.h1}</h1>
            <p className={`${styles.p}`}>{language.p}</p>
          </div>
          <div className={styles.fakeBtnContainer}>
            <div className={styles.fakeBtnContainerItems}>
              <button className={styles.span}>{language.btn}</button>
              <button className={styles.span}>{language.btn1}</button>
            </div>
            <button className={`${styles.span} ${styles.span2}`}>
              {language.btn2}
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

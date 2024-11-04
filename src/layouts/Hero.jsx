"use client";

import Image from "next/image";
import { alt } from "@/doc/alt";
import HeroPhoto from "../../public/assets/hero2.png";
import Logo from "../../public/assets/logo.png";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.textContainer}>
        <div className={styles.textContainerHelper}>
          <Image src={Logo}></Image>
          <div className={styles.titles}>
            <h1 className={`${styles.h1}`}>Országos terménykereskedelem</h1>
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
          className={styles.heroImage}
          src={HeroPhoto}
          alt={alt.alt}
        />
      </div>
    </div>
  );
};

export default Hero;

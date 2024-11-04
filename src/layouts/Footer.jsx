import React from "react";
import Image from "next/image";
import logoFotter from "../../public/assets/logoFooter.png";
import facebook from "../../public/assets/facebook.svg";
import styles from "./Footer.module.css";

const Fotter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div>
          <a href="/">
            <Image src={logoFotter} alt=""></Image>
          </a>
        </div>
        <div className={styles.textContainer}>
          <a target="_blank" href="">
            {" "}
            <Image src={facebook} alt=""></Image>
          </a>
          <p className={styles.rigth}>
            Minden jog fenntartva © 2024 - MirAgro Kft.
          </p>
          <p className={styles.desig}>
            Designed & developed by{" "}
            <a href="https://www.studiobromo.hu/">StudioBromo</a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Fotter;

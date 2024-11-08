import React from "react";
import Image from "next/image";
import logoFotter from "../../../public/assets/logoFooter.png";
import facebook from "../../../public/assets/facebook.svg";
import styles from "./Footer.module.css";

const Fotter = ({ footerContent }) => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div>
          <a href="/">
            <Image src={logoFotter} alt="Országos terménykereskedelem"></Image>
          </a>
        </div>
        <div className={styles.textContainer}>
          <a target="_blank" href="">
            {" "}
            <Image src={facebook} alt="Országos terménykereskedelem"></Image>
          </a>
          <p className={styles.rigth}>{footerContent.footer}</p>
          <p className={styles.desig}>
            {footerContent.footer2}{" "}
            <a href="https://www.studiobromo.hu/"> {footerContent.footer3}</a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Fotter;

import React from "react";
import Image from "next/image";
import Buza from "../../public/assets/buza.png";
import BioLogo from "../../public/assets/bioLogo.png";
import styles from "./Termeny.module.css";

const Termeny = ({ language }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          placeholder="blur"
          className={styles.image}
          src={Buza}
          alt={language.h1}
        />
      </div>

      {/* Right side with content */}
      <div className={styles.contentContainer}>
        <div>
          <div className={styles.titleContainer}>
            <div>
              <p className={styles.index}>1.</p>
            </div>

            <div>
              <h2 className={styles.h2}>{language.title}</h2>
              <p className={styles.subtitle}>{language.subtitle}</p>
            </div>
          </div>

          {/* Regular products */}
          <h3 className={styles.productTitle}>{language.productTitle1}</h3>
          <ul className={styles.list}>
            {language.productList1.map((item) => (
              <li className={styles.listItem} key={item}>
                <span>▪️</span>
                {item}
              </li>
            ))}
          </ul>

          {/* Special products */}
          <h3 className={styles.productTitle}>{language.productTitle2}</h3>
          <ul className={styles.list}>
            {language.productList2.map((item) => (
              <li
                style={{ whiteSpace: "nowrap" }}
                className={styles.listItem}
                key={item}
              >
                <span>▪️</span>
                {item}
              </li>
            ))}
          </ul>

          {/* Bio products */}
          <div className={styles.footerContainer}>
            <h3 className={styles.productTitle}>{language.productTitle3}</h3>

            {/* Footer section */}
            <p className={styles.footerText}>
              {language.footerText}
            </p>
          </div>

          {/* Bio Garancia logo */}
          <div className={styles.logoContainer}>
            <Image
              className={styles.bioLogo}
              src={BioLogo}
              alt={language.h1}
              width={70}
              height={70}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Termeny;

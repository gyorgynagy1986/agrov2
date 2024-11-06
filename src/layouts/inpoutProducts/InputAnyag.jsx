import React from "react";
import Image from "next/image";
import Buza from "../../../public/assets/input.png";
import Aniko from "../../../public/assets/aniko.png";
import styles from "./InputAnyag.module.css";

const InputAnyag = ({language}) => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <div className={styles.containerHelper}>
          <div className={styles.sectionTitleContainer}>
            <div>
              <p className={styles.sectionNumber}>2.</p>
            </div>

            <div>
              <h2 className={styles.h2}>{language.inputH2}</h2>
            </div>
          </div>

          <div className={styles.sectionText}>
            <p className={styles.inputP}>{language.inputP}</p>
            <div className={styles.contactContainer}>
              <div>
                <Image
                  width={60}
                  quality={100}
                  height={60}
                  src={Aniko}
                  alt="Országos terménykereskedelem"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className={styles.contactName}>Cserenyec Anikó</h3>
                <a className={styles.contactLink} href="tel:+36706622750">
                  +36 70 662 27 50
                </a>
              </div>
            </div>
          </div>

          {/* Regular products */}
          <div className={styles.productContainer}>
            <div>
              <h3 className={styles.productTitle}>{language.inputH3}</h3>
              <ul className={styles.productList}>
                <li>
                  <span className={styles.productBullet}>▪️</span>{language.inputList}
                </li>
                <li>
                  <span className={styles.productBullet}>▪️</span>{language.inputList2}
                </li>
              </ul>
            </div>
            <div>
              {/* Special products */}
              <h3 className={`${styles.productTitle}`}>{language.inputList3}</h3>
              <ul className={styles.productList}>
                <li>
                  <span className={styles.productBullet}>▪️</span>{language.inputList4}
                </li>
                <li>
                  <span className={styles.productBullet}>▪️</span>{language.inputList5}
                </li>
              </ul>
            </div>
            <div>
              {/* Bio products */}
              <h3 className={`${styles.productTitle} `}>{language.inputH32}</h3>
              <ul className={styles.productList}>
                <li>▪️ {language.inputList6}</li>
                <li>▪️ {language.inputList7}</li>
                <li>▪️ {language.inputList8}</li>
              </ul>
            </div>
          </div>
          {/* Footer section */}
          <p className={styles.footerText}>
          {language.inputP2}
          </p>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          placeholder="blur"
          className={styles.image}
          src={Buza}
          alt="Országos terménykereskedelem"
        />
      </div>
    </div>
  );
};

export default InputAnyag;

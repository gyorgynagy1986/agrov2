import React from "react";
import Image from "next/image";
import Buza from "../../public/assets/input.png";
import Aniko from "../../public/assets/aniko.png";
import { alt } from "@/doc/alt";
import styles from "./InputAnyag.module.css";

const InputAnyag = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <div className={styles.containerHelper}>
          <div className={styles.sectionTitleContainer}>
            <div>
              <p className={styles.sectionNumber}>2.</p>
            </div>

            <div>
              <h2 className={styles.h2}>Input anyag kereskedelem</h2>
            </div>
          </div>

          <div className={styles.sectionText}>
            <p className={styles.inputP}>Inputanyag értékesítés</p>
            <div className={styles.contactContainer}>
              <div>
                <Image
                  width={60}
                  quality={100}
                  height={60}
                  src={Aniko}
                  alt={alt.alt}
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
              <h3 className={styles.productTitle}>Műtrágyák</h3>
              <ul className={styles.productList}>
                <li>
                  <span className={styles.productBullet}>▪️</span>Nitrogén alapú
                  műtrágyák
                </li>
                <li>
                  <span className={styles.productBullet}>▪️</span>Komplex
                  műtrágyák
                </li>
              </ul>
            </div>
            <div>
              {/* Special products */}
              <h3 className={`${styles.productTitle}`}>Vetőmag</h3>
              <ul className={styles.productList}>
                <li>
                  <span className={styles.productBullet}>▪️</span>Őszi, tavaszi
                  vetőmagok
                </li>
                <li>
                  <span className={styles.productBullet}>▪️</span>Egyéb,
                  speciális vetőmagok
                </li>
              </ul>
            </div>
            <div>
              {/* Bio products */}
              <h3 className={`${styles.productTitle} `}>Termésnövelők</h3>
              <ul className={styles.productList}>
                <li>▪️ Biostimulátorok</li>
                <li>▪️ Lombtrágyák</li>
                <li>▪️ Növénykondícionálók</li>
              </ul>
            </div>
          </div>
          {/* Footer section */}
          <p className={styles.footerText}>
            Keressen minket egyénre szabott ajánlatokért, ütemezett szállítási
            lehetőségekért, valamint biotermesztésben is használt anyagokért!
          </p>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          placeholder="blur"
          className={styles.image}
          src={Buza}
          alt={alt.alt}
        />
      </div>
    </div>
  );
};

export default InputAnyag;

import React from "react";
import Image from "next/image";
import Buza from "../../public/assets/buza.png";
import BioLogo from "../../public/assets/bioLogo.png";
import styles from "./Termeny.module.css";

const Termeny = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          placeholder="blur"
          className={styles.image}
          src={Buza}
          alt='Országos terménykereskedelem'
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
              <h2 className={styles.h2}>Terménykereskedelem</h2>
              <p className={styles.subtitle}>Bio és konvencionális termények</p>
            </div>
          </div>

          {/* Regular products */}
          <h3 className={styles.productTitle}>Szokvány termények</h3>
          <ul className={styles.list}>
            {[
              "Búza",
              "Árpa",
              "Kukorica",
              "Napraforgó",
              "Zab",
              "Szója",
              "Triticalé",
              "Repce",
              "Rozs",
              "Durum",
              "Tönköly",
            ].map((item) => (
              <li className={styles.listItem} key={item}>
                <span>▪️</span>
                {item}
              </li>
            ))}
          </ul>

          {/* Special products */}
          <h3 className={styles.productTitle}>Speciális termények</h3>
          <ul className={styles.list}>
            {[
              "Borsó",
              "Sörárpa",
              "Popcorn",
              "Csíkos napraforgó",
              "Kömény",
              "Fénymag",
              "Köles",
              "Lenmag",
              "Mák",
              "Piros kukorica",
            ].map((item) => (
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
          <h3 className={styles.productTitle}>BIO termények</h3>

          {/* Footer section */}
          <p className={styles.footerText}>
            A MirAgro Kft.-nél széles termékpalettával, rugalmas hozzáállással,
            egyénre szabott fizetési feltételekkel és kiemelt logisztikai
            támogatással várjuk ügyfeleinket!
          </p>
          </div>

          {/* Bio Garancia logo */}
          <div className={styles.logoContainer}>
            <Image
              className={styles.bioLogo}
              src={BioLogo}
              alt='Országos terménykereskedelem'
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

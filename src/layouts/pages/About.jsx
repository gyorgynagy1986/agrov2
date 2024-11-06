import styles from './page.module.css';
import photo from '../../../public/assets/pages/1.png';
import photo2 from '../../../public/assets/pages/2.png';
import Image from "next/image";
import ReviewSection from "@/components/ReviewSection"; // Importing the client-side review section

const About = ({dict}) => {
  return (
    <main>
      <section className={styles.section}>
        <div className={styles.textContainer}>
          <div className={styles.textContainerHelper}>
            <div>
              <h1 className={styles.h1}>{dict.content.rolunk}</h1>
              <div className={styles.line}></div>
            </div>
            <div className={styles.hederTextContainer}>
              <p className={styles.hederTex}>A kisteleki székhelyű családi vállalkozás, a MirAgro Kft.  fő profilja az országos terménykereskedelem, és input anyag  kereskedelem. Továbbá egyik kiemelt területünk a bio gazdálkodók teljes körű támogatása.</p>
              <p className={styles.hederTex}>Célunk, hogy olyan vállalkozásunk legyen, ahol a  gazdákat teljes vertikumban kiszolgálják és megértik azok igényeit -  vetőmagtól a termény átvételéig.</p>
            </div>
            <div className={styles.ulLiContainer}>
              <h2 className={styles.h2}>Tevékenységi köreink</h2>
              <ul>
                <li>konvencionális és bio termény felvásárlás országszerte</li>
                <li>konvencionális és bio termelés teljes körű szaktanácsadása</li>
                <li>bio termelésre alkalmazható input anyagok kereskedelme</li>
                <li>kifejezetten bio termelésre alkalmazható input anyagok kereskedelme (lombtrágyák, vetőmagok)</li>
                <li>széles terménypaletta: búza, árpa, tritikálé, popcorn, kukorica, rozs, köles, lencse, zab stb.</li>

              </ul>
            </div>
            <div>
              <p className={styles.footerText}>Keressen bennünket bizalommal, mindenre igyekszünk gyors és hatékony megoldást találni, mert... </p>
              <p className={styles.footerTextBold}>Együtt sikert aratunk!</p>
            </div>
          </div>
        </div>
        <div className={styles.ImageContainer}>
          <Image alt="" src={photo}></Image>
        </div>
      </section>

      {/* Client-side review section */}
      <section className={styles.section2}>
        <div className={styles.imageContainer2}>
          <Image src={photo2} alt=""></Image>
        </div>
        <ReviewSection /> 
      </section>
    </main>
  );
};

export default About;

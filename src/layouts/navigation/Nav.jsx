"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from 'react';

import Image from "next/image";
import { Asap } from "next/font/google";
import logo from "../../../public/assets/logo_white.svg";
import styles from "./Nav.module.css";
import Link from "next/link";
import hambi from '../../../public/assets/hambi.svg';
import facebook from '../../../public/assets/facebook_white.svg'

const asap = Asap({ subsets: ["latin"] });


const Nav = ({sticky, navContent}) => {
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  console.log(path, 'path')

  useEffect(() => {
    // Disable scrolling when the menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function to reset overflow on unmount
    return () => (document.body.style.overflow = 'auto');
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`${styles.container} ${sticky && styles.sticky}`}>
      <div className={styles.innerContainer}>
        <div className={styles.imageContainer}>
          <Image className={styles.logo} src={logo} alt='Országos terménykereskedelem'/>
        </div>
        <div className={styles.navMenu}>
          <ul className={`${styles.navMenuLarge} ${asap.className} `}>
            {navContent.links.map((link, index) => (
              <li key={index}>
                <Link className={path === link.link ? styles.active : ''} href={link.link}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Image
            className={styles.hambi}
            alt='Országos terménykereskedelem'
            src={hambi}
            onClick={toggleMenu}
          />
          <ul className={`${styles.languageMenu} ${asap.className}`}>
            {navContent.language.map((link, index) => (
              <li key={index}>
                <Link className={path === link.link ? styles.activeLanguage : ''} href={link.link}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Full-screen mobile menu overlay */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuHeader}>
            <Image
              className={styles.mobileMenuLogo}
              src={logo}
              alt='Országos terménykereskedelem'
            />
            <Image
              className={styles.mobileMenuCloseIcon}
              src={hambi}
              alt='Országos terménykereskedelem'
              onClick={closeMenu}
            />
          </div>
          <div className={styles.helper}>
          <ul className={`${styles.mobileMenuList}`}>
            {navContent.links.map((link, index) => (
              <li key={index} onClick={closeMenu}>
                <Link className={path === link.link ? styles.active : ''} href={link.link}>
                {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Image className={styles.facebook} alt='Országos terménykereskedelem' src={facebook}></Image>
          </div>
          {/* Language menu within mobile menu */}
          <ul className={`${styles.mobileLanguageMenu}`}>
            {navContent.language.map((link, index) => (
              <li key={index} onClick={closeMenu}>
                <Link className={path === link.link ? styles.activeLanguage : ''} href={link.link}>
                {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;

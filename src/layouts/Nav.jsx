"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from 'react';

import Image from "next/image";
import { meta } from "@/doc/meta";
import { Asap } from "next/font/google";
import { Lexend_Deca } from "next/font/google";
import logo from "../../public/assets/logo_white.svg";
import styles from "./Nav.module.css";
import Link from "next/link";
import hambi from '../../public/assets/hambi.svg';

const asap = Asap({ subsets: ["latin"] });
const lexend = Lexend_Deca({ subsets: ["latin"] });

const links = [
  { name: "Főoldal", link: "/" },
  { name: "Terménykereskedelem", link: "/#termekkereskedelem" },
  { name: "Inputanyag", link: "#" },
  { name: "Területi képviselők", link: "#" },
  { name: "Rólunk", link: "#" },
  { name: "Elérhetőség", link: "#" },
  { name: "Nemes ügyeink", link: "#" },
];

const Nav = () => {
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <nav className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.imageContainer}>
          <Image className={styles.logo} src={logo} alt={meta.name} />
        </div>
        <div className={styles.navMenu}>
          <ul className={`${styles.navMenuLarge} ${asap.className} `}>
            {links.map((link, index) => (
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
            alt="hambi"
            src={hambi}
            onClick={toggleMenu}
          />
        </div>
      </div>

      {/* Full-screen mobile menu overlay */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuHeader}>
            <Image
              className={styles.mobileMenuLogo}
              src={logo}
              alt="Logo"
            />
            <Image
              className={styles.mobileMenuCloseIcon}
              src={hambi}
              alt="Close Menu"
              onClick={closeMenu}
            />
          </div>
          <ul className={`${styles.mobileMenuList} ${asap.className}`}>
            {links.map((link, index) => (
              <li key={index} onClick={closeMenu}>
                <Link href={link.link}>
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

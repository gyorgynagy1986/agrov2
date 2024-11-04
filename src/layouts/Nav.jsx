"use client"
import { usePathname } from "next/navigation";
import { useState, useEffect } from 'react';

import Image from "next/image";
import { meta } from "@/doc/meta";
import { Asap } from "next/font/google";
import { Lexend_Deca } from "next/font/google";
import logo from "../../public/assets/logo_white.svg";
import styles from "./Nav.module.css";
import Link from "next/link";
import hambi from '../../public/assets/hambi.svg'

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

const language = [
  { name: "HU", link: "/" },
  { name: "EN", link: "/EN" },
  { name: "SRB", link: "/SRB" },
];

const Nav = () => {
const path = usePathname();

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
          <Image className={styles.hambi} alt="hambi" src={hambi}></Image>
          <ul className={`${styles.languageMenu} ${asap.className}`}>
          {language.map((link, index) => (
              <li key={index}>
                <Link className={path === link.link ? styles.activeLanguage : ''} href={link.link}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

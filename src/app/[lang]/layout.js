// src/app/[lang]/layout.js
import React from "react";
import localFont from 'next/font/local';
import "../globals.css";
import "../responsive.css";
import Nav from "@/layouts/Nav";
import Footer from "@/layouts/Footer";

// Load custom fonts
const asap = localFont({
  src: './../fonts/Asap-Regular.ttf',
  variable: "--asap",
  display: 'swap',
  weight: "400",
});

const exo = localFont({
  src: './../fonts/Exo2-Regular.ttf',
  variable: "--exo",
  display: 'swap',
});

export default function LangLayout({ children, params }) {
  const lang = params.lang || 'hu'; // Default to Hungarian if no lang param is present
  return (
    <html lang={lang}>
      <body className={`${asap.variable} ${exo.variable}`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

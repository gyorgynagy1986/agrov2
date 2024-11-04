import React from "react";
import localFont from 'next/font/local'

import "./../globals.css";
import "./../responsive.css";
import Nav from "@/layouts/Nav";
import Footer from "@/layouts/Footer";


const asap = localFont({
  src: './../fonts/Asap-Regular.ttf',
  variable: "--asap",
  display: 'swap',
  weight: "400",
},
{
  src: './../fonts/Asap-SemiBold.ttf',
  variable: "--asap",
  weight: "600",
  display: 'swap',
})

const exo = localFont({
  src: './../fonts/Exo2-Regular.ttf',
  variable: "--exo",
  display: 'swap',
},
{
  src: './../fonts/Exo2-SemiBold.ttf',
  variable: "--exo",
  display: 'swap',
})

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'srb' }];
}


export default function RootLayout({ children }) {
  return (
    <html lang='hu'>
      <body className={`${asap.variable} ${exo.variable} `}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

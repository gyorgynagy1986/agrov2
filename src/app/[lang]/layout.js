import React from "react";
import './globals.css'
import Nav from "@/layouts/Nav";
import Footer from "@/layouts/Footer";
import { getDictionary } from "@/app/[lang]/dictionaries";

export default async function RootLayout({ children, params }) {

  const { lang = 'hu' } = params; // Default to Hungarian if no lang param is provided
  const dict = await getDictionary(lang);



  return (
    <html lang={lang}>
      <body>
        <Nav navContent={dict.content} />
        {children}
        <Footer />
      </body>
    </html>
  );
}

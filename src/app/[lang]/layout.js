import React from "react";
import './globals.css'
import Nav from "@/layouts/Nav";
import Footer from "@/layouts/Footer";

export default function RootLayout({ children, params }) {
  const { lang = 'hu' } = params; // Default to Hungarian if no lang param is provided

  return (
    <html lang={lang}>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

// src/app/layout.js
import React from "react";
import './globals.css'
import Nav from "@/layouts/Nav";
import Footer from "@/layouts/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

// src/app/page.js
import React from "react";
import Hero from "@/layouts/Hero";
import Termeny from "@/layouts/Termeny";
import InputAnyag from "@/layouts/InputAnyag";
import Map from "@/layouts/Map";
import { getDictionary } from './[lang]/dictionaries';

export default async function Home() {
  const dict = await getDictionary("hu"); // Load Hungarian dictionary by default
  console.log(dict);
  return (
    <>
      <Hero />
      <main>
        <Termeny />
        <InputAnyag />
        <Map />
      </main>
    </>
  );
}

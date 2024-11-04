import React from "react";
import Hero from "@/layouts/Hero";
import Termeny from "@/layouts/Termeny";
import InputAnyag from "@/layouts/InputAnyag";
import Map from "@/layouts/Map";
import { getDictionary } from './dictionaries';

export default async function Home({ params: { lang } }) {
  const dict = await getDictionary(lang);
  console.log(dict)
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

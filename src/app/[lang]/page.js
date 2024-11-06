import React from "react";
import Hero from "@/layouts/hero/Hero";
import Termeny from "@/layouts/termeny/Termeny";
import InputAnyag from "@/layouts/inpoutProducts/InputAnyag";
import Map from "@/layouts/map/Map";
import { getDictionary } from "@/app/[lang]/dictionaries";

export default async function Home({ params }) {
  const { lang = 'hu' } = params; // Default to 'hu' if no language parameter is provided
  const dict = await getDictionary(lang);
  
  return (
    <>
      <Hero language={dict.content} />
      <main>
        <Termeny language={dict.content} />
        <InputAnyag language={dict.content} />
        <Map />
      </main>
    </>
  );
}

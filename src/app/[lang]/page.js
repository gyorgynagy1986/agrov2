import React from "react";
import Hero from "@/layouts/Hero";
import Termeny from "@/layouts/Termeny";
import InputAnyag from "@/layouts/InputAnyag";
import Map from "@/layouts/Map";
import { getDictionary } from "@/app/[lang]/dictionaries";

export default async function Home({ params }) {
  const { lang = 'hu' } = params; // Default to 'hu' if no language parameter is provided
  const dict = await getDictionary(lang);
  
  console.log(dict); // Check the loaded dictionary

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

import React from "react";
import Hero from "../layouts/Hero";
import Termeny from "../layouts/Termeny";
import InputAnyag from "../layouts/InputAnyag";
import Map from "../layouts/Map";

export default async function Home() {
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

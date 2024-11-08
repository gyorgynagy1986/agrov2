import React from "react";
import About from "@/layouts/pages/About";
import { getDictionary } from "@/app/[lang]/dictionaries";
import Contact from "@/layouts/pages/contact/Contact";

const page = async ({ params }) => {
  const { lang = "hu" } = params; // Default to 'hu' if no language parameter is provided
  const dict = await getDictionary(lang);

  return <Contact languageData={dict.content} />;
};

export default page;

import React from "react";
import { getDictionary } from "@/app/[lang]/dictionaries";
import Contact from "@/layouts/pages/contact/Contact";

const page = async ({ params }) => {
  const { lang = "en" } = params; // Default to 'hu' if no language parameter is provided
  const dict = await getDictionary(lang);

  return <Contact languageData={dict.content} />;
};

export default page;

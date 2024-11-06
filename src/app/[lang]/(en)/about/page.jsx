import React from 'react'
import About from '@/layouts/pages/About'
import { getDictionary } from "@/app/[lang]/dictionaries";

const page = async ({params }) => {

  const { lang = 'en' } = params; // Default to 'hu' if no language parameter is provided
  const dict = await getDictionary(lang);

  return <About dict={dict} />
}

export default page
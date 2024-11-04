const dictionaries = {
    en: () => import('./../dictionaries/en.json').then((module) => module.default),
    srb: () => import('./../dictionaries/srb.json').then((module) => module.default),
    hu: () => import('./../dictionaries/hu.json').then((module) => module.default),
  };
  
  export const getDictionary = async (locale = 'hu') => { // Default to 'hu' if locale is undefined
    if (!dictionaries[locale]) {
      throw new Error(`Dictionary not found for locale: ${locale}`);
    }
    return dictionaries[locale]();
  };
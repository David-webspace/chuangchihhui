import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en/translation.json';
import ch from './locales/ch/translation.json';

const resources = {
  en: { translation: en },
  ch: { translation: ch }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ch', // default language
    fallbackLng: 'ch',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;

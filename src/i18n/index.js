import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import LOCALS from '../constants/locals';
import en from './en';
import ua from './ua';

export const resources = {
  [LOCALS.UA]: { translation: ua },
  [LOCALS.EN]: { translation: en },
};

export const appLocales = Object.keys(resources);

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    // lng: 'en',
    // debug: true,
    fallbackLng: LOCALS.EN,
    interpolation: {
      escapeValue: false, 
    },
    react: {
      useSuspense: true
    }
  }); 

export default i18n;

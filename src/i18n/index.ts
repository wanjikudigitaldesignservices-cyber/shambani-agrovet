// src/i18n/index.ts — i18n configuration
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en";
import sw from "./sw";
import { DEFAULT_LOCALE } from "../config/constants";

const resources = {
  en: { translation: en },
  sw: { translation: sw },
};

i18n.use(initReactI18next).init({
  resources,
  lng: DEFAULT_LOCALE,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React already escapes
  },
  returnObjects: true,
});

export default i18n;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/translation.json";
import translationUK from "./locales/uk/translation.json";
import { loadFromLocalStorage } from "./functions/storage";
import localStorageConfig from "./configurations/localStorage.config";

const resources = {
  en: {
    translation: translationEN,
  },
  uk: {
    translation: translationUK,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: loadFromLocalStorage(localStorageConfig.lang) || "uk",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

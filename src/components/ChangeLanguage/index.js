import { useTranslation } from "react-i18next";
import {
  saveToLocalStorage,
  loadFromLocalStorage,
} from "../../functions/storage";
import localStorageConfig from "../../configurations/localStorage.config";
import "./style.css";

function ChangeLanguage() {
  const { i18n } = useTranslation();
  let currentLanguage =
    loadFromLocalStorage(localStorageConfig.lang) || i18n.language;
  saveToLocalStorage(localStorageConfig.lang, currentLanguage);

  const changeLanguageHandler = (e) => {
    const languageValue = e.target.value;
    i18n.changeLanguage(languageValue);
    saveToLocalStorage(localStorageConfig.lang, languageValue);
  };

  return (
    <select
      className="custom-select"
      onChange={changeLanguageHandler}
      defaultValue={currentLanguage}>
      <option value="uk">&#x1F1FA;&#x1F1E6;</option>
      <option value="en">&#x1F1EC;&#x1F1E7;</option>
    </select>
  );
}

export default ChangeLanguage;

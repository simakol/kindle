import { useTranslation } from "react-i18next";
import {
  saveToLocalStorage,
  loadFromLocalStorage,
} from "../../functions/storage";
import localStorageConfig from "../../configurations/localStorage.config";

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
    <div>
      <select
        className="custom-select"
        onChange={changeLanguageHandler}
        defaultValue={currentLanguage}>
        <option value="uk">Українська</option>
        <option value="en">English</option>
      </select>
    </div>
  );
}

export default ChangeLanguage;

import { Link, useNavigate } from "react-router-dom";
import { loadFromLocalStorage } from "../../functions";
import localStorageConfig from "../../localStorage.config";
import "./style.css";

function Books({ clippings }) {
  clippings = loadFromLocalStorage(localStorageConfig.clippingsKey);
  const navigate = useNavigate();

  const showQuotes = (bookName) => {
    navigate(bookName);
  };

  const books = clippings ? (
    <div className="books-container">
      {Object.keys(clippings).map((bookName, i) => {
        return (
          <div
            className="book-name-wrapper"
            key={i}
            onClick={() => showQuotes(bookName)}>
            <p>{bookName.replaceAll("[", "?")}</p>
          </div>
        );
      })}
    </div>
  ) : (
    <p className="books-not-found">Цитат не найдено &#x1F622;</p>
  );

  return (
    <div className="container">
      <h1 className="main-title">Ваши цитаты &#x1F4D6;</h1>
      <Link to="/" className="back-button">
        Загрузить другой файл &#x1F4E5;
      </Link>
      {books}
    </div>
  );
}

export default Books;

import { Link, useNavigate } from "react-router-dom";
import { loadFromLocalStorage } from "../../functions";
import localStorageConfig from "../../localStorage.config";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import "./style.css";

function Books({ clippings }) {
  clippings = loadFromLocalStorage(localStorageConfig.clippingsKey);
  const navigate = useNavigate();

  const showQuotes = (bookName) => {
    navigate(bookName);
  };

  const books =
    clippings && Object.keys(clippings).length !== 0 ? (
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
      <p className="books-not-found">Книг не найдено &#x1F622;</p>
    );

  return (
    <div className="container">
      <h1 className="main-title">Ваши книги &#x1F4D6;</h1>
      <Link to="/" className="back-button">
        Загрузить другой файл &#x1F4E5;
      </Link>
      {books}
      <ScrollToTopButton />
    </div>
  );
}

export default Books;

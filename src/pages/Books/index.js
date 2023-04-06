import { Link, useNavigate } from "react-router-dom";
import { loadFromLocalStorage } from "../../functions";
import localStorageConfig from "../../localStorage.config";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import Footer from "../../components/Footer";
import "./style.css";

function Books({ clippings }) {
  clippings = loadFromLocalStorage(localStorageConfig.clippingsKey);
  const navigate = useNavigate();

  const showQuotes = (author, bookName) => {
    navigate(`${author}/${bookName}`);
  };

  const books =
    clippings && Object.keys(clippings).length !== 0 ? (
      <div className="books-container">
        {Object.keys(clippings).map((author) =>
          Object.keys(clippings[author]).map((bookName, i) => (
            <div
              className="book-name-wrapper"
              key={i}
              onClick={() => showQuotes(author, bookName)}>
              <p className="book-name">{bookName.replaceAll("[", "?")}</p>
              <p className="book-author">{author}</p>
            </div>
          ))
        )}
      </div>
    ) : (
      <p className="books-not-found">Книг не найдено &#x1F622;</p>
    );

  return (
    <>
      <div className="container books">
        <h1 className="main-title">Ваши книги &#x1F4D6;</h1>
        <Link to="/" className="back-button">
          Загрузить другой файл &#x1F4E5;
        </Link>
        {books}
        <ScrollToTopButton />
      </div>
      <Footer />
    </>
  );
}

export default Books;

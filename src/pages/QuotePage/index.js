import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { loadFromLocalStorage } from "../../functions";
import localStorageConfig from "../../localStorage.config";
import "./style.css";

function QuotePage({ clippings }) {
  clippings = loadFromLocalStorage(localStorageConfig.clippingsKey);
  const { name } = useParams();
  const quotes = clippings?.[name];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quotesMarkup =
    clippings && quotes ? (
      <>
        <h1 className="main-title book">{name.replaceAll("[", "?")}</h1>
        <div className="quotes">
          {quotes.map((quote, i) => (
            <p key={i} className="quote-item">
              {quote}
            </p>
          ))}
        </div>
      </>
    ) : (
      <p className="books-not-found quotes">
        Книги <span>{name}</span> не найдено! &#x1F914;
      </p>
    );
  return (
    <div className="container">
      <Link to="/books" className="back-button">
        Назад
      </Link>
      {quotesMarkup}
    </div>
  );
}

export default QuotePage;

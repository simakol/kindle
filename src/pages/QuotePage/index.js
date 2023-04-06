import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { loadFromLocalStorage } from "../../functions";
import localStorageConfig from "../../localStorage.config";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import Footer from "../../components/Footer";
import "./style.css";

function QuotePage({ clippings }) {
  clippings = loadFromLocalStorage(localStorageConfig.clippingsKey);
  const { name } = useParams();
  const quotes = clippings?.[name];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
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
    <>
      <div className="container">
        <Link to="/books" className="back-button">
          Назад
        </Link>
        {quotesMarkup}
        <ScrollToTopButton />
      </div>
      {clippings && quotes ? <Footer /> : ""}
    </>
  );
}

export default QuotePage;

import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getQuotesByBookAndAuthor } from "../../functions/clippingsFilters";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import Footer from "../../components/Footer";
import "./style.css";

function QuotePage({ clippings }) {
  const { bookName, author } = useParams();
  const quotes = getQuotesByBookAndAuthor({
    clippings,
    bookName,
    author,
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);

  const quotesMarkup = quotes ? (
    <>
      <div className="quotes-title-wrapper">
        <h1 className="main-title">{bookName}</h1>
        <h2 className="main-subtitle">{author}</h2>
      </div>
      <div className="quotes">
        {quotes.map((quote, i) => (
          <p key={i} className="quote-item">
            {quote}
          </p>
        ))}
      </div>
    </>
  ) : (
    <p className="something-not-found quotes">
      Книги <span>{bookName}</span> автора <span>{author}</span> не найдено!
      &#x1F914;
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

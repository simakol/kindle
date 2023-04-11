import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { getQuotesByBookAndAuthor } from "../../functions/clippingsFilters";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import Footer from "../../components/Footer";
import ChangeLanguage from "../../components/ChangeLanguage";
import "./style.css";

function QuotePage({ clippings }) {
  const { bookName, author } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

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

  const goBack = () => {
    navigate(-1);
  };

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
      {t("notFound.bookOfAuthor")
        .replace("bookName", bookName)
        .replace("author", author)}
      &#x1F914;
    </p>
  );

  return (
    <>
      <Helmet>
        <title>{bookName}</title>
      </Helmet>
      <div className="container">
        <div className="basic-page-head page-head">
          <button type="button" onClick={goBack} className="back-button">
            {t("buttons.backButtons.back")}
          </button>
          <ChangeLanguage />
        </div>

        {quotesMarkup}
        <ScrollToTopButton />
      </div>
      {clippings && quotes ? <Footer /> : ""}
    </>
  );
}

export default QuotePage;

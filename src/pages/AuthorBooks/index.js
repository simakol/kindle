import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getBooksByAuthor } from "../../functions/clippingsFilters";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import Footer from "../../components/Footer";

// import "./style.css";

function AuthorBooks({ clippings }) {
  const { author } = useParams();
  const booksByAuthor = getBooksByAuthor({ clippings, author });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);

  return (
    <>
      {/* <div className="container">
        <Link to="/books" className="back-button">
          Назад
        </Link>
        {quotesMarkup}
        <ScrollToTopButton />
      </div>
      {clippings && quotes ? <Footer /> : ""} */}
    </>
  );
}

export default AuthorBooks;

import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getBooksByAuthor } from "../../functions/clippingsFilters";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import Footer from "../../components/Footer";
import ContentTile from "../../components/ContentTile";

function AuthorBooks({ clippings }) {
  const { author } = useParams();
  const navigate = useNavigate();

  const booksByAuthor = getBooksByAuthor({ clippings, author });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);

  const showQuotes = ({ author, bookName }) => {
    navigate(`/books/${author}/${encodeURIComponent(bookName)}`);
  };

  return (
    <>
      <div className="container books">
        <h1 className="main-title">Книги автора {author} &#x1F4D6;</h1>
        <Link to="/" className="back-button">
          Загрузить другой файл &#x1F4E5;
        </Link>
        <ContentTile
          content={booksByAuthor}
          redirectFunction={showQuotes}
          notFoundText="Книг не найдено"
        />
        <ScrollToTopButton />
      </div>
      <Footer />
    </>
  );
}

export default AuthorBooks;

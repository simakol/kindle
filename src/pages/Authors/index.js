import { Link, useNavigate } from "react-router-dom";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import Footer from "../../components/Footer";
import SortContent from "../../components/SortContent";
import "./style.css";

function Authors({ authors }) {
  const navigate = useNavigate();

  const showAuthorBooks = (author) => {
    navigate(`/authors/${author}`);
  };

  const books = authors ? (
    <div className="books-container">
      {authors.map((author, i) => (
        <div
          className="book-name-wrapper authors"
          key={i}
          onClick={() => showAuthorBooks(author)}>
          <p className="book-author">{author}</p>
        </div>
      ))}
    </div>
  ) : (
    <p className="books-not-found">Авторов не найдено &#x1F622;</p>
  );

  return (
    <>
      <div className="container books">
        <h1 className="main-title">Ваши писатели &#x1F58B;</h1>
        <SortContent active="authors" />
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

export default Authors;

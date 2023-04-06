import { Link, useNavigate } from "react-router-dom";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import Footer from "../../components/Footer";
import SortContent from "../../components/SortContent";
import "./style.css";

function Books({ allBooks }) {
  const navigate = useNavigate();

  const showQuotes = (author, bookName) => {
    navigate(`${author}/${bookName}`);
  };

  const books = allBooks ? (
    <div className="books-container">
      {allBooks.map(({ bookName, author }, i) => (
        <div
          className="book-name-wrapper"
          key={i}
          onClick={() => showQuotes(author, bookName)}>
          <p className="book-name">{bookName.replaceAll("[", "?")}</p>
          <p className="book-author">{author}</p>
        </div>
      ))}
    </div>
  ) : (
    <p className="books-not-found">Книг не найдено &#x1F622;</p>
  );

  return (
    <>
      <div className="container books">
        <h1 className="main-title">Ваши книги &#x1F4D6;</h1>
        <SortContent active="books" />
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

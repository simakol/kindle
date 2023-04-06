import { Link, useNavigate } from "react-router-dom";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import ContentTile from "../../components/ContentTile";
import Footer from "../../components/Footer";
import SortContent from "../../components/SortContent";
import "./style.css";

function Books({ allBooks }) {
  const navigate = useNavigate();

  const showQuotes = ({ author, bookName }) => {
    navigate(`${author}/${encodeURIComponent(bookName)}`);
  };

  return (
    <>
      <div className="container books">
        <h1 className="main-title">Ваши книги &#x1F4D6;</h1>
        <SortContent active="books" />
        <Link to="/" className="back-button">
          Загрузить другой файл &#x1F4E5;
        </Link>
        <ContentTile
          content={allBooks}
          redirectFunction={showQuotes}
          notFoundText="Книг не найдено"
        />
        <ScrollToTopButton />
      </div>
      <Footer />
    </>
  );
}

export default Books;

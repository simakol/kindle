import { Link, useNavigate } from "react-router-dom";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import Footer from "../../components/Footer";
import SortContent from "../../components/SortContent";
import ContentTile from "../../components/ContentTile";
import "./style.css";

function Authors({ authors }) {
  const navigate = useNavigate();

  const showAuthorBooks = ({ author }) => {
    navigate(`/authors/${author}`);
  };

  return (
    <>
      <div className="container books">
        <h1 className="main-title">Ваши писатели &#x1F58B;</h1>
        <SortContent active="authors" />
        <Link to="/" className="back-button">
          Загрузить другой файл &#x1F4E5;
        </Link>
        <ContentTile
          content={authors}
          redirectFunction={showAuthorBooks}
          notFoundText="Писателей не найдено"
        />
        <ScrollToTopButton />
      </div>
      <Footer />
    </>
  );
}

export default Authors;

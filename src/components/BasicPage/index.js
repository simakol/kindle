import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ScrollToTopButton from "../ScrollToTopButton";
import ContentTile from "../ContentTile";
import Footer from "../Footer";
import SortContent from "../SortContent";
import "./style.css";

function BasicPage({
  title,
  sortActiveBtn,
  backBtnText,
  backBtnPath,
  tileContent,
  tileRedirectFunction,
  tileNotFoundText,
  counter,
}) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="container basic-page">
        <h1 className="main-title">{title}</h1>
        {sortActiveBtn ? (
          <SortContent active={sortActiveBtn} counter={counter} />
        ) : (
          ""
        )}
        <Link to={backBtnPath} className="back-button">
          {backBtnText}
        </Link>
        <ContentTile
          content={tileContent}
          redirectFunction={tileRedirectFunction}
          notFoundText={tileNotFoundText}
        />
        <ScrollToTopButton />
      </div>
      <Footer />
    </>
  );
}

export default BasicPage;

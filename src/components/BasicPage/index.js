import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ScrollToTopButton from "../ScrollToTopButton";
import ContentTile from "../ContentTile";
import Footer from "../Footer";
import SortContent from "../SortContent";
import ChangeLanguage from "../../components/ChangeLanguage";
import "./style.css";

function BasicPage({
  title,
  titleImg = "",
  sortActiveBtn,
  backBtnText,
  backBtnImg = "",
  backBtnPath,
  tileContent,
  tileRedirectFunction,
  tileNotFoundText,
  counter,
}) {
  return (
    <>
      <Helmet>
        <title>
          {title} {titleImg}
        </title>
      </Helmet>
      <div className="container basic-page">
        <div className="basic-page-head page-head">
          <Link to={backBtnPath} className="back-button">
            {backBtnText} {backBtnImg}
          </Link>
          <ChangeLanguage />
        </div>
        <h1 className="main-title">
          {title} {titleImg}
        </h1>
        {sortActiveBtn ? (
          <SortContent active={sortActiveBtn} counter={counter} />
        ) : (
          ""
        )}

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

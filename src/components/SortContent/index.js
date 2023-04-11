import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import routesConfig from "../../configurations/routes.config";
import "./style.css";

function SortContent({ active, counter }) {
  const { t } = useTranslation();

  return (
    <div className="sort-btns-wrapper">
      <Link
        to={routesConfig.routes.books}
        className={`${active === "books" ? "active" : ""} sort-btn`}>
        {t("filters.books")} {counter.booksQuantity}
      </Link>
      <Link
        to={routesConfig.routes.authors}
        className={`${active === "authors" ? "active" : ""} sort-btn`}>
        {t("filters.authors")} {counter.authorsQuantity}
      </Link>
    </div>
  );
}

export default SortContent;

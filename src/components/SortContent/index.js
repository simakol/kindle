import { Link } from "react-router-dom";
import routesConfig from "../../configurations/routes.config";
import "./style.css";

function SortContent({ active, counter }) {
  return (
    <div className="sort-btns-wrapper">
      <Link
        to={routesConfig.routes.books}
        className={`${active === "books" ? "active" : ""} sort-btn`}>
        Книги {counter.booksQuantity}
      </Link>
      <Link
        to={routesConfig.routes.authors}
        className={`${active === "authors" ? "active" : ""} sort-btn`}>
        Писатели {counter.authorsQuantity}
      </Link>
    </div>
  );
}

export default SortContent;

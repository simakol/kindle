import { Link } from "react-router-dom";
import "./style.css";

function SortContent({ active }) {
  return (
    <div className="sort-btns-wrapper">
      <Link
        to="/books"
        className={`${active === "books" ? "active" : ""} sort-btn`}>
        Книги
      </Link>
      <Link
        to="/authors"
        className={`${active === "authors" ? "active" : ""} sort-btn`}>
        Писатели
      </Link>
    </div>
  );
}

export default SortContent;

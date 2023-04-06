import { Link } from "react-router-dom";
import "./style.css";

function SortContent({ active, counter }) {
  return (
    <div className="sort-btns-wrapper">
      <Link
        to="/books"
        className={`${active === "books" ? "active" : ""} sort-btn`}>
        Книги {counter.booksQuantity}
      </Link>
      <Link
        to="/authors"
        className={`${active === "authors" ? "active" : ""} sort-btn`}>
        Писатели {counter.authorsQuantity}
      </Link>
    </div>
  );
}

export default SortContent;

import { useNavigate, useParams } from "react-router-dom";
import { getBooksByAuthor } from "../../functions/clippingsFilters";
import BasicPage from "../../components/BasicPage";

function AuthorBooks({ clippings }) {
  const { author } = useParams();
  const navigate = useNavigate();

  const booksByAuthor = getBooksByAuthor({ clippings, author });

  const showQuotes = ({ author, bookName }) => {
    navigate(`/books/${author}/${encodeURIComponent(bookName)}`);
  };

  return (
    <BasicPage
      title={`Книги автора ${author} \u{1F58B}`}
      backBtnText="К списку писателей"
      backBtnPath="/authors"
      tileContent={booksByAuthor}
      tileRedirectFunction={showQuotes}
      tileNotFoundText="Книг не найдено"
    />
  );
}

export default AuthorBooks;

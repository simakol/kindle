import { useEffect } from "react";
import { useParams } from "react-router-dom";
import routesConfig from "../../configurations/routes.config";
import { getBooksByAuthor } from "../../functions/clippingsFilters";
import BasicPage from "../../components/BasicPage";

function AuthorBooks({ clippings, showQuotes }) {
  const { author } = useParams();
  const booksByAuthor = getBooksByAuthor({ clippings, author });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);

  return (
    <BasicPage
      title={`Книги автора ${author} \u{1F58B}`}
      backBtnText="К списку писателей"
      backBtnPath={routesConfig.routes.authors}
      tileContent={booksByAuthor}
      tileRedirectFunction={showQuotes}
      tileNotFoundText="Книг не найдено"
    />
  );
}

export default AuthorBooks;

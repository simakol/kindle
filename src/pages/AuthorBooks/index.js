import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import routesConfig from "../../configurations/routes.config";
import { getBooksByAuthor } from "../../functions/clippingsFilters";
import BasicPage from "../../components/BasicPage";

function AuthorBooks({ clippings, showQuotes }) {
  const { author } = useParams();
  const { t } = useTranslation();
  const booksByAuthor = getBooksByAuthor({ clippings, author });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);

  return (
    <BasicPage
      title={`${t("titles.author")} ${author}`}
      titleImg="&#x1F58B;"
      backBtnText={t("buttons.backButtons.authorsList")}
      backBtnPath={routesConfig.routes.authors}
      tileContent={booksByAuthor}
      tileRedirectFunction={showQuotes}
      tileNotFoundText={t("buttons.notFound.books")}
    />
  );
}

export default AuthorBooks;

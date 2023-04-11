import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import routesConfig from "../../configurations/routes.config";
import BasicPage from "../../components/BasicPage";

function Authors({ authors, counter }) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const showAuthorBooks = ({ author }) => {
    navigate(routesConfig.getAuthorRoute(author));
  };

  return (
    <BasicPage
      title={t("titles.authors")}
      titleImg="&#x1F58B;"
      sortActiveBtn="authors"
      backBtnText={t("buttons.backButtons.loadOtherFile")}
      backBtnImg="&#x1F4E5;"
      backBtnPath={routesConfig.routes.index}
      tileContent={authors}
      tileRedirectFunction={showAuthorBooks}
      tileNotFoundText={t("notFound.authors")}
      counter={counter}
    />
  );
}

export default Authors;

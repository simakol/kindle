import { useTranslation } from "react-i18next";
import routesConfig from "../../configurations/routes.config";
import BasicPage from "../../components/BasicPage";

function Books({ allBooks, counter, showQuotes }) {
  const { t } = useTranslation();

  return (
    <BasicPage
      title={t("titles.books")}
      titleImg="&#x1F4D6;"
      sortActiveBtn="books"
      backBtnText={t("buttons.backButtons.loadOtherFile")}
      backBtnImg="&#x1F4E5;"
      backBtnPath={routesConfig.routes.index}
      tileContent={allBooks}
      tileRedirectFunction={showQuotes}
      tileNotFoundText={t("notFound.books")}
      counter={counter}
    />
  );
}

export default Books;

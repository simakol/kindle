import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import routesConfig from "../../configurations/routes.config";
import "./style.css";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("notFound.wrongRouteHelmet")}</title>
      </Helmet>
      <div className="container not-found-container">
        <h1>{t("notFound.wrongRoute")} &#x1F50D;</h1>
        <Link to={routesConfig.routes.index}>
          {t("buttons.backButtons.main")} &#x1F3E0;
        </Link>
      </div>
    </>
  );
}

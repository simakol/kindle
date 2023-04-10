import { useNavigate } from "react-router-dom";
import routesConfig from "../../configurations/routes.config";
import BasicPage from "../../components/BasicPage";

function Authors({ authors, counter }) {
  const navigate = useNavigate();

  const showAuthorBooks = ({ author }) => {
    navigate(routesConfig.getAuthorRoute(author));
  };

  return (
    <BasicPage
      title="Ваши писатели &#x1F58B;"
      sortActiveBtn="authors"
      backBtnText="Загрузить другой файл &#x1F4E5;"
      backBtnPath={routesConfig.routes.index}
      tileContent={authors}
      tileRedirectFunction={showAuthorBooks}
      tileNotFoundText="Писателей не найдено"
      counter={counter}
    />
  );
}

export default Authors;

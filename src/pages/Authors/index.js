import { useNavigate } from "react-router-dom";
import BasicPage from "../../components/BasicPage";

function Authors({ authors, counter }) {
  const navigate = useNavigate();

  const showAuthorBooks = ({ author }) => {
    navigate(`/authors/${author}`);
  };

  return (
    <BasicPage
      title="Ваши писатели &#x1F58B;"
      sortActiveBtn="authors"
      backBtnText="Загрузить другой файл &#x1F4E5;"
      backBtnPath="/"
      tileContent={authors}
      tileRedirectFunction={showAuthorBooks}
      tileNotFoundText="Писателей не найдено"
      counter={counter}
    />
  );
}

export default Authors;

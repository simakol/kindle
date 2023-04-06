import { useNavigate } from "react-router-dom";
import BasicPage from "../../components/BasicPage";

function Books({ allBooks }) {
  const navigate = useNavigate();

  const showQuotes = ({ author, bookName }) => {
    navigate(`${author}/${encodeURIComponent(bookName)}`);
  };

  return (
    <BasicPage
      title="Ваши книги &#x1F4D6;"
      sortActiveBtn="books"
      backBtnText="Загрузить другой файл &#x1F4E5;"
      backBtnPath="/"
      tileContent={allBooks}
      tileRedirectFunction={showQuotes}
      tileNotFoundText="Книг не найдено"
    />
  );
}

export default Books;

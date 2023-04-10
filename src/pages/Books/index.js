import routesConfig from "../../configurations/routes.config";
import BasicPage from "../../components/BasicPage";

function Books({ allBooks, counter, showQuotes }) {
  return (
    <BasicPage
      title="Ваши книги &#x1F4D6;"
      sortActiveBtn="books"
      backBtnText="Загрузить другой файл &#x1F4E5;"
      backBtnPath={routesConfig.routes.index}
      tileContent={allBooks}
      tileRedirectFunction={showQuotes}
      tileNotFoundText="Книг не найдено"
      counter={counter}
    />
  );
}

export default Books;

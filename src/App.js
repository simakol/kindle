import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { saveToLocalStorage, loadFromLocalStorage } from "./functions/storage";
import getClippingsObj from "./functions/getClippingsObj";
import { getAllBooks, getAuthors } from "./functions/clippingsFilters";
import localStorageConfig from "./configurations/localStorage.config";
import routesConfig from "./configurations/routes.config";
import InputFile from "./pages/InputFile";
import Books from "./pages/Books";
import Authors from "./pages/Authors";
import QuotePage from "./pages/QuotePage";
import NotFound from "./pages/NotFound";
import AuthorBooks from "./pages/AuthorBooks";

function App() {
  const [clippings, setClippings] = useState(
    loadFromLocalStorage(localStorageConfig.clippingsKey)
  );
  const navigate = useNavigate();
  const { routes } = routesConfig;

  const handleClippings = (clippings) => {
    clippings = getClippingsObj(clippings);
    setClippings(clippings);
    saveToLocalStorage(localStorageConfig.clippingsKey, clippings);
    navigate(routes.books);
  };

  const showQuotes = ({ author, bookName }) => {
    navigate(routesConfig.getBookQuotesRoute(author, bookName));
  };

  const allBooks = getAllBooks(clippings);
  const authors = getAuthors(clippings);
  const counter = {
    booksQuantity: allBooks?.length || 0,
    authorsQuantity: authors?.length || 0,
  };

  return (
    <Routes>
      <Route
        exact
        index
        path={routes.index}
        element={
          <InputFile sendClippings={handleClippings} clippings={clippings} />
        }
      />
      <Route
        path={routes.books}
        exact
        element={
          <Books
            allBooks={allBooks}
            counter={counter}
            showQuotes={showQuotes}
          />
        }
      />
      <Route
        path={routes.bookQuotes}
        element={<QuotePage clippings={clippings} />}
      />
      <Route
        path={routes.authors}
        exact
        element={<Authors authors={authors} counter={counter} />}
      />
      <Route
        path={routes.author}
        exact
        element={<AuthorBooks clippings={clippings} showQuotes={showQuotes} />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

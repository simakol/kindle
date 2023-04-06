import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { saveToLocalStorage, loadFromLocalStorage } from "./functions/storage";
import getClippingsObj from "./functions/getClippingsObj";
import { getAllBooks, getAuthors } from "./functions/clippingsFilters";
import localStorageConfig from "./configurations/localStorage.config";
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

  const handleClippings = (clippings) => {
    clippings = getClippingsObj(clippings);
    setClippings(clippings);
    saveToLocalStorage(localStorageConfig.clippingsKey, clippings);
    navigate("/books");
  };

  const allBooks = getAllBooks(clippings);
  const authors = getAuthors(clippings);
  const counter = {
    booksQuantity: allBooks.length,
    authorsQuantity: authors.length,
  };

  return (
    <Routes>
      <Route
        index
        element={
          <InputFile sendClippings={handleClippings} clippings={clippings} />
        }
      />
      <Route
        path="/books"
        exact
        element={<Books allBooks={allBooks} counter={counter} />}
      />
      <Route
        path="/books/:author/:bookName"
        element={<QuotePage clippings={clippings} />}
      />
      <Route
        path="/authors"
        exact
        element={<Authors authors={authors} counter={counter} />}
      />
      <Route
        path="/authors/:author"
        exact
        element={<AuthorBooks clippings={clippings} />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

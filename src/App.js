import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { getClippingsObj, saveToLocalStorage } from "./functions/";
import localStorageConfig from "./localStorage.config";
import InputFile from "./components/InputFile";
import Books from "./pages/Books";
import QuotePage from "./pages/QuotePage";
import NotFound from "./pages/NotFound";

//TODO: add button "TO TOP"

function App() {
  const [clippings, setClippings] = useState();
  const navigate = useNavigate();

  const handleClippings = (clippings) => {
    clippings = getClippingsObj(clippings);
    setClippings(clippings);
    saveToLocalStorage(localStorageConfig.clippingsKey, clippings);
    navigate("/books");
  };

  return (
    <Routes>
      <Route index element={<InputFile sendClippings={handleClippings} />} />
      <Route path="/books" exact element={<Books clippings={clippings} />} />
      <Route
        path="/books/:name"
        element={<QuotePage clippings={clippings} />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

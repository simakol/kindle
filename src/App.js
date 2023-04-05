import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { getClippingsObj } from "./functions/";
import InputFile from "./components/InputFile";
import Books from "./pages/Books";
import QuotePage from "./pages/QuotePage";

function App() {
  const [clippings, setClippings] = useState();
  const navigate = useNavigate();

  const handleClippings = (clippings) => {
    setClippings(getClippingsObj(clippings));
    //TODO: add obj w/ books to localStorage
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
    </Routes>
  );
}

export default App;

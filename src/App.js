import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { getClippingsObj } from "./functions/";
import InputFile from "./components/InputFile";
import Books from "./components/Books";

function App() {
  const [clippings, setClippings] = useState();
  const navigate = useNavigate();

  const handleClippings = (clippings) => {
    setClippings(getClippingsObj(clippings));
    // localStorage.setItem("clippings", clippings)
    navigate("/books");
  };

  const reloadPath = () => {
    navigate("/");
  };

  return (
    <Routes>
      <Route index element={<InputFile sendClippings={handleClippings} />} />
      <Route
        path="/books"
        element={<Books clippings={clippings} reloadPath={reloadPath} />}
      />
    </Routes>
  );
}

export default App;

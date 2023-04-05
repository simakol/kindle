import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./style.css";

function Books({ clippings = {} }) {
  const navigate = useNavigate();

  const reloadPath = () => {
    navigate("/");
  };

  useEffect(() => {
    const currentRoute = localStorage.getItem("route");
    if (currentRoute) navigate(localStorage.getItem("route"));
    const handleBeforeUnload = (e) => {
      e.returnValue = "";
      localStorage.setItem("route", "/");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      localStorage.removeItem("route");
    };
  }, []);

  const showQuotes = (bookName) => {
    navigate(bookName);
  };

  //TODO: rand color generator
  return (
    <div className="container">
      <h1 className="main-title">Ваши цитаты</h1>
      <button onClick={reloadPath} className="back-button">
        Загрузить другой файл
      </button>
      <div className="books-container">
        {Object.keys(clippings).map((bookName, i) => (
          <div
            className="book-name-wrapper"
            key={i}
            onClick={() => showQuotes(bookName)}>
            <p>{bookName.replaceAll("[", "?")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;

import { useEffect } from "react";
import "./style.css";

function Books({ clippings, reloadPath }) {
  // useEffect(() => {
  //   const handleBeforeUnload = (e) => {
  //     e.preventDefault();
  //     e.returnValue = "";
  //     window.location.pathname = "/";
  //     reloadPath();
  //   };

  //   window.addEventListener("beforeunload", handleBeforeUnload);

  //   return () => {
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //   };
  // }, [reloadPath]);

  if (!clippings) clippings = {};

  const showQuotes = (quotes) => {
    console.log(quotes);
  };

  return (
    <>
      <h1 className="main-title">Ваши цитаты</h1>
      <button onClick={reloadPath} className="back-button">Загрузить другой файл</button>
      <div className="books-container">
        {Object.keys(clippings).map((bookName, i) => (
          <div
            className="book-name-wrapper"
            key={i}
            onClick={() => showQuotes(clippings[bookName])}>
            <p>{bookName}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Books;

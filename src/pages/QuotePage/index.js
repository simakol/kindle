import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./style.css";

function QuotePage({ clippings }) {
  const navigate = useNavigate();
  const { name } = useParams();
  const quotes = clippings[name];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="container">
      <button onClick={goBack} className="back-button">
        Назад
      </button>
      <h1 className="main-title book">{name.replaceAll("[", "?")}</h1>
      <div className="quotes">
        {quotes.map((quote, i) => (
          <p key={i} className="quote-item">
            {quote}
          </p>
        ))}
      </div>
    </div>
  );
}

export default QuotePage;

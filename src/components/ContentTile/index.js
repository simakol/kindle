import "./style.css";

function ContentTile({ content, redirectFunction, notFoundText }) {
  return content ? (
    <div className="tile-container">
      {content.map(({ bookName, author }, i) => (
        <div
          className="tile-title-wrapper"
          key={i}
          onClick={() => redirectFunction({ author, bookName })}>
          {
            <>
              <p className="tile-title">{bookName ? bookName : author}</p>
              <p className="tile-subtitle">{bookName ? author : ""}</p>
            </>
          }
        </div>
      ))}
    </div>
  ) : (
    <p className="something-not-found">{notFoundText} &#x1F622;</p>
  );
}

export default ContentTile;

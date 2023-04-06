import "./style.css";

function ContentTile({ content, redirectFunction, notFoundText }) {
  const showTileContent = ({ author, bookName }) => {
    let title = "";
    let subtitle = "";

    if (!bookName && author) title = author;
    else if (!author && bookName) title = bookName;
    else {
      title = bookName;
      subtitle = author;
    }

    return (
      <>
        <p className="tile-title">{title}</p>
        <p className="tile-subtitle">{subtitle}</p>
      </>
    );
  };

  console.log(content);
  return content ? (
    <div className="tile-container">
      {content.map(({ bookName, author }, i) => (
        <div
          className="tile-title-wrapper"
          key={i}
          onClick={() => redirectFunction({ author, bookName })}>
          {showTileContent({ author, bookName })}
        </div>
      ))}
    </div>
  ) : (
    <p className="something-not-found">{notFoundText} &#x1F622;</p>
  );
}

export default ContentTile;

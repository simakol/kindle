function isClippingsExist(clippings) {
  return clippings && Object.keys(clippings).length !== 0;
}

function checkResult(result) {
  return result?.length !== 0 ? result : undefined;
}

function getAuthors(clippings) {
  let authors = [];
  if (isClippingsExist(clippings)) {
    authors = Object.keys(clippings).map((author) => ({ author }));
  }
  return checkResult(authors);
}

function getAllBooks(clippings) {
  let allBooks = [];
  if (isClippingsExist(clippings)) {
    allBooks = Object.keys(clippings)
      .map((author) =>
        Object.keys(clippings[author]).map((bookName) => ({
          author,
          bookName,
        }))
      )
      .flat();
  }
  return checkResult(allBooks);
}
function getBooksByAuthor({ clippings, author }) {
  let booksByAuthor = [];
  if (isClippingsExist(clippings)) {
    booksByAuthor = Object.keys(clippings[author]).map((bookName) => ({
      bookName,
      author,
    }));
  }
  return checkResult(booksByAuthor);
}
function getQuotesByBookAndAuthor({ clippings, bookName, author }) {
  return checkResult(clippings?.[author]?.[bookName]?.quotes);
}

export { getAuthors, getAllBooks, getBooksByAuthor, getQuotesByBookAndAuthor };

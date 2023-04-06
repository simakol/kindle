function getClippingsObj(clippings) {
  const quotes = {};
  const clippingsArr = clippings.split("==========");
  clippingsArr.forEach((quote) => {
    const quoteArr = quote.trim().split("\n");
    let [bookName, , , ...quoteText] = quoteArr;
    const bookNameInfo = bookName.split("(");
    const author = bookNameInfo[1]
      ? bookNameInfo[1].trim().slice(0, -1)
      : "Unknown";
    bookName = bookNameInfo[0].trim();
    quoteText = quoteText.join("").trim();

    if (bookName && quoteText && author) {
      if (!quotes[author]) {
        quotes[author] = {
          [bookName]: {
            quotes: [quoteText],
          },
        };
      } else if (!quotes[author][bookName]) {
        quotes[author][bookName] = {
          quotes: [quoteText],
        };
      } else if (
        quotes[author][bookName] &&
        !quotes[author][bookName].quotes.includes(quoteText)
      ) {
        quotes[author][bookName].quotes.push(quoteText);
      }
    }
  });
  return quotes;
}

export default getClippingsObj;

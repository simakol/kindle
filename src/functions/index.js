function getClippingsObj(clippings) {
  const quotes = {};
  const clippingsArr = clippings.split("==========");
  clippingsArr.forEach((quote) => {
    const quoteArr = quote.trim().split("\n");
    let [bookName, , , ...quoteText] = quoteArr;
    bookName = bookName.split("(")[0].trim().replaceAll("?", "[");
    quoteText = quoteText.join("").trim();
    if (bookName && quoteText) {
      if (!quotes[bookName]) quotes[bookName] = [quoteText];
      else quotes[bookName].push(quoteText);
    }
  });
  return quotes;
}

export { getClippingsObj };

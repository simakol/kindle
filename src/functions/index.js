function getClippingsObj(clippings) {
  const quotes = {};
  const clippingsArr = clippings.split("==========");
  clippingsArr.forEach((quote) => {
    const quoteArr = quote.trim().split("\n");
    let [bookName, , , ...quoteText] = quoteArr;
    // const author = bookName.split("(")[1]
    // ? bookName.split("(")[1].trim().slice(0, -3)
    // : "Неизвестно";
    bookName = bookName.split("(")[0].trim().replaceAll("?", "[");
    quoteText = quoteText.join("").trim();
    // console.log(author);
    //TODO: save author in obj
    /*TODO: refactor obj to: 
    {
      bookName: {
        quotes: [...],
        author: "...",
      }
    }

    */
    if (bookName && quoteText) {
      if (!quotes[bookName]) quotes[bookName] = [quoteText];
      else quotes[bookName].push(quoteText);
      // quotes[bookName].author = author;
    }
  });
  return quotes;
}

function saveToLocalStorage(key, value) {
  try {
    const serializedData = JSON.stringify(value);
    localStorage.setItem(key, serializedData);
  } catch (err) {
    console.error("Local storage saving error: ", err);
  }
}

function loadFromLocalStorage(key) {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (err) {
    console.error(err);
  }
}

export { getClippingsObj, saveToLocalStorage, loadFromLocalStorage };

function getClippingsObj(clippings) {
  const quotes = {};
  const clippingsArr = clippings.split("==========");
  clippingsArr.forEach((quote) => {
    const quoteArr = quote.trim().split("\n");
    let [bookName, , , ...quoteText] = quoteArr;
    const author = bookName.split("(")[1]
      ? bookName.split("(")[1].trim().slice(0, -1)
      : "Unknown";
    bookName = bookName.split("(")[0].trim().replaceAll("?", "[");
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
      } else if (quotes[author][bookName]) {
        if (!quotes[author][bookName].quotes.includes(quoteText))
          quotes[author][bookName].quotes.push(quoteText);
      }
      // if (!quotes[bookName]) quotes[bookName] = [quoteText];
      // else if (!quotes[bookName].includes(quoteText))
      //   quotes[bookName].push(quoteText);
    }
  });
  console.log(quotes);
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

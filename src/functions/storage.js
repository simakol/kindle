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
export { saveToLocalStorage, loadFromLocalStorage };

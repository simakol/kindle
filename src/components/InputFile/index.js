import { useState } from "react";
import { Link } from "react-router-dom";
import { loadFromLocalStorage } from "../../functions";
import localStorageConfig from "../../localStorage.config";
import "./style.css";

function InputFile({ sendClippings }) {
  const [file, setFile] = useState();
  const clippings = loadFromLocalStorage(localStorageConfig.clippingsKey);

  const handleFileChange = (e) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setFile(file);
        sendClippings(reader.result);
      };
      reader.onerror = () => {
        console.error("File error:", reader.error);
      };
      reader.readAsText(file);
    }
  };

  const linkToBooks = clippings ? (
    <div className="input-books-wrapper">
      <span>или</span>
      <Link to="/books">Перейдите к сохраненным книгам &#x1F4D6;</Link>
    </div>
  ) : (
    ""
  );

  if (!file)
    return (
      <div className="container">
        <label htmlFor="file-upload" className="custom-file-upload">
          <div className="upload-content">
            {/* <img src="./images/icons/arrow-upload.svg" alt="arrow" />  */}
            &#x1F4E5; <span>Выберите файл</span>
          </div>
        </label>
        <input
          id="file-upload"
          type="file"
          onChange={handleFileChange}
          accept="text/plain"
        />
        <div className="file-data">{file && `${file.name} - ${file.type}`}</div>
        {linkToBooks}
      </div>
    );
}

export default InputFile;

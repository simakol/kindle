import { useState } from "react";
import "./style.css";

function InputFile({ sendClippings }) {
  const [file, setFile] = useState();

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

  if (!file)
    return (
      <div>
        <label htmlFor="file-upload" className="custom-file-upload">
          <div className="upload-content">
            <img src="./images/icons/arrow-upload.svg" alt="arrow" /> Выберите
            файл
          </div>
        </label>
        <input
          id="file-upload"
          type="file"
          onChange={handleFileChange}
          accept="text/plain"
        />
        <div className="file-data">{file && `${file.name} - ${file.type}`}</div>
      </div>
    );
}

export default InputFile;

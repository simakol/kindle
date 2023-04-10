import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import routesConfig from "../../configurations/routes.config";

import "./style.css";

function InputFile({ sendClippings, clippings }) {
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

  const linkToBooks = clippings ? (
    <div className="input-books-wrapper">
      <span>или</span>
      <Link to={routesConfig.routes.books}>
        Перейдите к сохраненным книгам &#x1F4D6;
      </Link>
    </div>
  ) : (
    ""
  );

  if (!file)
    return (
      <>
        <Helmet>
          <title>Kindle</title>
        </Helmet>
        <div className="container">
          <div className="file-upload-wrapper">
            <label htmlFor="file-upload" className="custom-file-upload">
              <div className="upload-content">
                &#x1F4E5; <span>Выберите файл</span>
              </div>
            </label>
            <input
              id="file-upload"
              type="file"
              onChange={handleFileChange}
              accept="text/plain"
            />
            {linkToBooks}
          </div>
        </div>
      </>
    );
}

export default InputFile;

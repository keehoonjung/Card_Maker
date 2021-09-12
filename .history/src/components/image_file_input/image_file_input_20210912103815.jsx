import React, { useEffect, useRef, useState } from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = ({ uploadService, uploadImage, name }) => {
  const [loading, setLoading] = useState(true);
  const inputRef = useRef();
  const onClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };
  const uploadFile = () => {
    setLoading(true);
    const files = inputRef.current.files;
    const file = uploadService.upload(files[0]);
    file.then((data) => {
      const newName = data.original_filename;
      const url = data.url;
      uploadImage(url, newName);
    });
  };

  useEffect(() => {
    setLoading(false);
  }, [name]);

  return (
    <>
      <button
        className={`${styles.button} ${existFile(name)} `}
        onClick={onClick}
      >
        <div className={`${loadingSpanner(loading)}`}>
          <i className="fas fa-spinner"></i>
        </div>
        {!loading && (name || "No file")}
      </button>
      <input
        className={styles.input}
        ref={inputRef}
        type="file"
        onChange={uploadFile}
      />
    </>
  );
};

function existFile(name, upload) {
  if (!name) {
    return styles.noFile;
  }
  return styles.exist;
}

function loadingSpanner(state) {
  if (state) {
    return styles.loading;
  }
  return styles.complete;
}

export default ImageFileInput;

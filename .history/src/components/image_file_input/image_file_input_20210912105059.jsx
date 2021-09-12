import React, { useEffect, useRef, useState } from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = ({ uploadService, uploadImage, name }) => {
  const [loading, setLoading] = useState(true);
  const inputRef = useRef();
  const onClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };
  const uploadFile = async () => {
    setLoading(true);
    const files = inputRef.current.files;
    const file = await uploadService.upload(files[0]);
    setLoading(false);
    uploadImage(file.url, file.original_filename);
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {!loading && (
        <button
          className={`${styles.button} ${existFile(name)} `}
          onClick={onClick}
        >
          {name || "No file"}
        </button>
      )}
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

import React, { useEffect, useRef, useState } from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = ({ uploadService, uploadImage, name }) => {
  const [imgname, setImgname] = useState("No file");
  const [loading, setLoading] = useState(true);
  const inputRef = useRef();
  const onClick = (event) => {
    setLoading(true);
    event.preventDefault();
    inputRef.current.click();
  };
  const uploadFile = () => {
    const files = inputRef.current.files;
    const file = uploadService.upload(files[0]);
    file.then((data) => {
      const newName = data.original_filename;
      const url = data.url;
      setImgname(newName);
      uploadImage(url, newName);
    });
  };

  useEffect(() => {
    setLoading(false);
  }, [imgname]);
  return (
    <>
      <button
        className={`${styles.button} ${existFile(name, imgname)} `}
        onClick={onClick}
      >
        <div className={`${loadingSpanner(loading)}`}>
          <i className="fas fa-spinner"></i>
        </div>
        {!loading && (name ? name : imgname)}
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
  if (!name && upload === "No file") {
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

import React, { useRef } from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = ({ uploadImage, name }) => {
  const inputRef = useRef();
  const onClick = (event) => {
    console.log("Heelo");
    inputRef.current.click();
  };
  const uploadFile = () => {
    const files = inputRef.current.files;
    uploadImage(files);
  };
  return (
    <button
      className={`${styles.button} ${existFile(name)} `}
      onClick={onClick}
    >
      {name}
      <input
        className={styles.input}
        ref={inputRef}
        type="file"
        onChange={uploadFile}
      />
    </button>
  );
};

function existFile(name) {
  if (name === "No file") {
    return styles.noFile;
  }
  return styles.exist;
}

export default ImageFileInput;

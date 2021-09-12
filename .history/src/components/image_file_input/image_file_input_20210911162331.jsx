import React, { useRef } from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = ({ uploadImage, name }) => {
  const inputRef = useRef();
  const onClick = () => {};
  const uploadFIle = () => {
    const files = inputRef.current.files;
    uploadImage(files);
  };
  return (
    <button className={styles.button} onClick={onClick}>
      {name}
      <input
        className={styles.input}
        ref={inputRef}
        type="file"
        onChange={uploadFIle}
      />
    </button>
  );
};

function existFile(name) {
  if (name === "No file") {
    return styles.noFile;
  }
}

export default ImageFileInput;

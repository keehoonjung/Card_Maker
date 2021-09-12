import React, { useRef } from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = ({ uploadImage }) => {
  const inputRef = useRef();
  const uploadFIle = () => {
    const files = inputRef.current.files;
    uploadImage(files);
  };
  return (
    <button className={styles.button}>
      <input ref={inputRef} type="file" onChange={uploadFIle} />
    </button>
  );
};

export default ImageFileInput;

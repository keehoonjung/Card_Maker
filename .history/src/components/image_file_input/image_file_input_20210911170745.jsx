import React, { useRef, useState } from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = ({ uploadService, uploadImage, name }) => {
  const [newName, setnewName] = useState("No file");
  const inputRef = useRef();
  const onClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };
  const uploadFile = () => {
    const files = inputRef.current.files;
    const file = uploadService.upload(files[0]);
    file.then((data) => {
      imageName = data.original_filename;
      setnewName(data.original_filename);
      console.log(newName);
      const url = data.url;
      uploadImage(url, newName);
    });
  };
  return (
    <>
      <button
        className={`${styles.button} ${existFile(name)} `}
        onClick={onClick}
      >
        {name ? name : newName}
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

function existFile(name) {
  if (!name) {
    return styles.noFile;
  }
  return styles.exist;
}

export default ImageFileInput;

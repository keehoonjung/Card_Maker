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
      const imageName = data.original_filename;
      const url = data.url;
      uploadImage(url, imageName);
      setnewName(imageName);
      console.log(newName);
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

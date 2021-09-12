import React, { useRef, useState } from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = ({ uploadService, uploadImage, name }) => {
  const [imgname, setImgname] = useState("No file");
  let newName = "No file";
  const inputRef = useRef();
  const onClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };
  const uploadFile = () => {
    const files = inputRef.current.files;
    const file = uploadService.upload(files[0]);
    file.then((data) => {
      const newName = data.original_filename;
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
        {console.log(newName)}
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

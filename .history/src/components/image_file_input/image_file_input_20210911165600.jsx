import React, { useRef, useState } from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = ({ uploadService, uploadImage }) => {
  const [name, setName] = useState("No file");
  const inputRef = useRef();
  const onClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };
  const uploadFile = () => {
    const files = inputRef.current.files;
    const file = uploadService.upload(files[0]);
    file.then((data) => {
      setName(data.original_filename);
      console.log(name);
      const url = data.url;
      uploadImage(url, name);
    });
  };
  return (
    <>
      <button
        className={`${styles.button} ${existFile(name)} `}
        onClick={onClick}
      >
        {name}
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
  if (name === "No file") {
    return styles.noFile;
  }
  return styles.exist;
}

export default ImageFileInput;

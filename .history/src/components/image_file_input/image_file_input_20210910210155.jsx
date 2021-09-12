import React, { useRef } from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = ({ uploadService }) => {
  const inputRef = useRef();
  const uploadImage = () => {
    const files = inputRef.current.files;
    uploadService(files);
    console.log(files);
  };
  return <input ref={inputRef} type="file" onChange={uploadImage} />;
};

export default ImageFileInput;

import React, { useRef } from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = ({ uploadImage }) => {
  const inputRef = useRef();
  const files = inputRef.current.files;
  uploadImage(files);
  return <input ref={inputRef} type="file" onChange={uploadImage} />;
};

export default ImageFileInput;

import React, { useRef } from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = ({ uploadImage }) => {
  const inputRef = useRef();
  const uploadFIle = () => {
    const files = inputRef.current.files;
    uploadImage(files);
  };
  return <input ref={inputRef} type="file" onChange={uploadFIle} />;
};

export default ImageFileInput;

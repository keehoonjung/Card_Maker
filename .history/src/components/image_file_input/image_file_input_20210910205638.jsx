import React, { useRef } from "react";
import UploadImage from "../../service/upload";
import styles from "./image_file_input.module.css";

const ImageFileInput = ({ uploadService }) => {
  const inputRef = useRef();
  const UploadImage = () => {
    const files = inputRef.current.files;
    console.log(files);
  };
  return <input ref={inputRef} type="file" />;
};

export default ImageFileInput;

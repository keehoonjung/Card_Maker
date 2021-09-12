import React, { useRef } from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = ({ uploadService }) => {
  const inputRef = useRef();

  return <input ref={inputRef} type="file" />;
};

export default ImageFileInput;

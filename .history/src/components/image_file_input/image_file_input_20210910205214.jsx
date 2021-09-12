import React, { useRef } from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = (props) => {
  const inputRef = useRef();
  return <input type="file" />;
};

export default ImageFileInput;

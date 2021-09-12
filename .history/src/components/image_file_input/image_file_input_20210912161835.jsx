import React, { memo, useEffect, useRef, useState } from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = memo(({ uploadService, uploadImage, name }) => {
  const [loading, setLoading] = useState(true);
  const inputRef = useRef();
  const onClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };
  const uploadFile = async () => {
    setLoading(true);
    const files = inputRef.current.files;
    const file = await uploadService.upload(files[0]);
    setLoading(false);
    uploadImage(file.url, file.original_filename);
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className={styles.container}>
      {!loading && (
        <button
          className={`${styles.button} ${existFile(name)} `}
          onClick={onClick}
        >
          {name || "No file"}
        </button>
      )}
      {loading && (
        <div className={styles.loading}>
          <i className="fas fa-spinner"></i>
        </div>
      )}
      <input
        className={styles.input}
        accept="image/*"
        ref={inputRef}
        type="file"
        onChange={uploadFile}
      />
    </div>
  );
});

function existFile(name, upload) {
  if (!name) {
    return styles.grey;
  }
  return styles.pink;
}

export default ImageFileInput;

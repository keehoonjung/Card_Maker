import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import AuthService from "./service/auth_service";
import UploadImage from "./service/upload";
import "@fortawesome/fontawesome-free/js/all.js";
import ImageFileInput from "./components/image_file_input/image_file_input";

const authService = new AuthService();
const uploadService = new UploadImage();

const FileInput = (props) => (
  <ImageFileInput {...props} uploadService={uploadService} />
);

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} uploadService={uploadService} />
  </React.StrictMode>,
  document.getElementById("root")
);

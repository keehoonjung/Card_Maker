import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import AuthService from "./service/auth_service";
import UploadImage from "./service/upload";

const authService = new AuthService();
const uploadService = new UploadImage();

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} uploadService={uploadService} />
  </React.StrictMode>,
  document.getElementById("root")
);

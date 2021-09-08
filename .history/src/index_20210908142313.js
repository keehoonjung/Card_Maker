import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import AuthService from "./service/auth_service";

const authServide = new AuthService();

ReactDOM.render(
  <React.StrictMode>
    <App authServide={authServide} />
  </React.StrictMode>,
  document.getElementById("root")
);

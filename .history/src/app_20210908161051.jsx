import React from "react";
import Login from "./components/login/login";
import styles from "./app.module.css";
import { BrowserRouter } from "react-router-dom";

const App = ({ authService }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={["/", ".home"]} exact></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

import React from "react";
import Login from "./components/login/login";
import styles from "./app.module.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = ({ authService }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={["/", ".home"]} exact>
          <section className={styles.container}>
            <Login authService={authService} />
          </section>
        </Route>
        <Route path="/main"></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
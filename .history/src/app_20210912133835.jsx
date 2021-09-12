import React from "react";
import Login from "./components/login/login";
import styles from "./app.module.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Maker from "./components/maker/maker";

const App = ({ FileInput, authService, databaseService }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={["/", ".home"]} exact>
          <section className={styles.login_container}>
            <Login authService={authService} />
          </section>
        </Route>
        <Route path="/main">
          <section className={styles.maker_container}>
            <Maker authService={authService} FileInput={FileInput} />
          </section>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

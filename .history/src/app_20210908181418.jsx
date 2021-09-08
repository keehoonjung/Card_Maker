import React from "react";
import Login from "./components/login/login";
import styles from "./app.module.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Maker from "./components/card_maker/maker";

const App = ({ authService }) => {
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
            <Maker authService={authService} />
          </section>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
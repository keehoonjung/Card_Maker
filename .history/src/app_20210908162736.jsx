import React from "react";
import Login from "./components/login/login";
import styles from "./app.module.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CardMaker from "./components/card_maker/card_maker";

const App = ({ authService }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={["/", ".home"]} exact>
          <section className={styles.container}>
            <Login authService={authService} />
          </section>
        </Route>
        <Route path="/main">
          <CardMaker authService={authService} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

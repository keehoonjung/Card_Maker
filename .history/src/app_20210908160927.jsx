import React from "react";
import Login from "./components/login/login";
import styles from "./app.module.css";

const App = ({ authService }) => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <Switch>
        <Route path={["/", "/login"]} exact>
          <section className={styles.container}>
            <Login authService={authService} />
          </section>
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

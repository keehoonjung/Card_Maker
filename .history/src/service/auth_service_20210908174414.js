import firebase from "firebase";
import firebaseApp from "./firebase";

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }

  AuthChange(onUserChanged) {
    firebaseApp.auth().onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }

  logout() {
    return firebaseApp //
      .auth()
      .signOut();
  }
}

export default AuthService;

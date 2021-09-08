import firebase from "firebase";
import firebaseApp from "./firebase";

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }

  onAuthStateChange() {
    firebaseApp.auth().onAuthStateChanged();
  }

  logout() {
    return firebaseApp //
      .auth()
      .signOut();
  }
}

export default AuthService;

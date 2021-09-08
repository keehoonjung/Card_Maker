import firebase from "firebase";
import firebaseApp from "./firebase";
import { getAuth, signOut } from "firebase/auth";

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }

  logout() {
    return firebaseApp.auth().signOut().then(console.log("ot"));
  }
}

export default AuthService;

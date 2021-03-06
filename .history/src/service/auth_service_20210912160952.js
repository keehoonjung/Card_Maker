import { firebaseAuth, googleProvider } from "./firebase";

class AuthService {
  login(providerName) {
    const authProvider = this.getProvider(providerName);
    return firebaseAuth.signInWithPopup(authProvider);
  }

  onAuthChange(onUserChanged) {
    firebaseAuth.onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }

  logout() {
    return firebaseAuth.signOut();
  }

  getProvider(providerName) {
    switch (providerName) {
      case "Google":
        return googleProvider;
      case "Github":
        return;
      default:
        throw new Error("unset provider");
    }
  }
}

export default AuthService;

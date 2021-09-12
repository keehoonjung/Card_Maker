import { firebaseAuth } from "./firebase";

class AuthService {
  login(providerName) {
    const authProvider = getProvider(providerName)
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

  getProvider(providerName){
    switch(providerName){
      case "google":
        return
        case "github":
          return
        default
            throw new Error("unset provider")
    }
  }
}

export default AuthService;

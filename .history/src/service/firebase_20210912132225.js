import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  databaseURL:
    "https://business-card-maker-3702b-default-rtdb.asia-southeast1.firebasedatabase.app",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;

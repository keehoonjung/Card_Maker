import firebaseApp from "./firebase";

const database = firebaseApp.database();

class Database {
  writeData(userId, card) {
    database()
      .ref("cards/" + userId)
      .set({
        card,
      });
  }
}

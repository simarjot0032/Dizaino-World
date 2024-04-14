import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyABRXvv5RXd3bVloEhKYpA6NhBq1dlWPMA",
  authDomain: "dizainoworld-f1a6d.firebaseapp.com",
  databaseURL: "https://dizainoworld-f1a6d-default-rtdb.firebaseio.com",
  projectId: "dizainoworld-f1a6d",
  storageBucket: "dizainoworld-f1a6d.appspot.com",
  messagingSenderId: "464137711650",
  appId: "1:464137711650:web:ed1c617ecdffedcc1e5a7b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const database = getDatabase(app);
export { app, auth, storage, database };

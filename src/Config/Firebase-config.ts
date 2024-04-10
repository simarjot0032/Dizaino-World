import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
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
export { app, auth };

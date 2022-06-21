import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACbqYyAanpYyaAuXE3MfRipXNxH0NFBHo",
  authDomain: "imdb-enacton.firebaseapp.com",
  projectId: "imdb-enacton",
  storageBucket: "imdb-enacton.appspot.com",
  messagingSenderId: "9362337243",
  appId: "1:9362337243:web:083799af8ee9b8a18d4bfe",
  measurementId: "G-013LYHSL86",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

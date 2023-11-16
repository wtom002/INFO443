import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBbkVpZ8hoaJ7u516_aUHkff8Hv1mDXgQU",
  authDomain: "testing-motion-f3f12.firebaseapp.com",
  projectId: "testing-motion-f3f12",
  storageBucket: "testing-motion-f3f12.appspot.com",
  messagingSenderId: "935230085773",
  appId: "1:935230085773:web:cd5023ee537f6df9aba0c4",
  databaseURL: "https://testing-motion-f3f12-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const storage = getStorage(app);

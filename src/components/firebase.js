// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBbkVpZ8hoaJ7u516_aUHkff8Hv1mDXgQU",
//   authDomain: "testing-motion-f3f12.firebaseapp.com",
//   projectId: "testing-motion-f3f12",
//   storageBucket: "testing-motion-f3f12.appspot.com",
//   messagingSenderId: "935230085773",
//   appId: "1:935230085773:web:cd5023ee537f6df9aba0c4",
//   // databaseURL: "https://testing-motion-f3f12-default-rtdb.firebaseio.com",
// };
const firebaseConfig = {
    apiKey: "AIzaSyAjpuVNaYJ2ZN8N8eX257AOIdWYIDa8Ye0",
    authDomain: "info443p1.firebaseapp.com",
    projectId: "info443p1",
    storageBucket: "info443p1.appspot.com",
    messagingSenderId: "750567225925",
    appId: "1:750567225925:web:3d3f2139739127c79ac12c",
    measurementId: "G-WQ9DHJ8T3F"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const storage = getStorage(app);

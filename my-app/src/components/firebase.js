// import { initializeApp } from "firebase/app";
// import { getFirestore } from "@firebase/firestore";


// const firebaseConfig = {
//   apiKey: "AIzaSyDNC7t7tjEo7t6ELrpdFnifbMJl1iKVsus",
//   authDomain: "testing-motion-a93e1.firebaseapp.com",
//   projectId: "testing-motion-a93e1",
//   storageBucket: "testing-motion-a93e1.appspot.com",
//   messagingSenderId: "983542792716",
//   appId: "1:983542792716:web:4529a25c41143827316429"
// };

// // firebase.initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);
// export const db =  getFirestore(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbkVpZ8hoaJ7u516_aUHkff8Hv1mDXgQU",
  authDomain: "testing-motion-f3f12.firebaseapp.com",
  projectId: "testing-motion-f3f12",
  storageBucket: "testing-motion-f3f12.appspot.com",
  messagingSenderId: "935230085773",
  appId: "1:935230085773:web:cd5023ee537f6df9aba0c4",
  // databaseURL: "https://testing-motion-f3f12-default-rtdb.firebaseio.com",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const storage = getStorage(app);

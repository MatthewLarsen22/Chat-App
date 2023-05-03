// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB243RFUqGfCV4Cai1jthFRrvghEPmaX5g",
  authDomain: "chat-app-64111.firebaseapp.com",
  projectId: "chat-app-64111",
  storageBucket: "chat-app-64111.appspot.com",
  messagingSenderId: "1007274908455",
  appId: "1:1007274908455:web:fa789e69eda0de05386702"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const rtdb = getDatabase(app);
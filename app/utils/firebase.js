// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "next-blog-529d4.firebaseapp.com",
  projectId: "next-blog-529d4",
  storageBucket: "next-blog-529d4.appspot.com",
  messagingSenderId: "492817678656",
  appId: "1:492817678656:web:ef5cbf0725f7ca71773aa5",
  measurementId: "G-KQHK6LHKCY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { app, storage };

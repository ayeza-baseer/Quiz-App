// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYd9HjHEMl0xAUBb9M4SJNyFyHv_Iyr2w",
  authDomain: "quiz-76fec.firebaseapp.com",
  projectId: "quiz-76fec",
  storageBucket: "quiz-76fec.appspot.com",
  messagingSenderId: "700476941331",
  appId: "1:700476941331:web:f28c42703f89aa2916cbe6",
  measurementId: "G-8GYVR30JQD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
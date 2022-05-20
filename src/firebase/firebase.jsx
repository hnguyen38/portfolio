// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYh1r-Abu9pLroE4XLNzBPY9SPfC-a0EQ",
  authDomain: "portfolio-28094.firebaseapp.com",
  projectId: "portfolio-28094",
  storageBucket: "portfolio-28094.appspot.com",
  messagingSenderId: "280993144841",
  appId: "1:280993144841:web:c8adb20ee8ed7d9c2d98d8",
  measurementId: "G-ZH4HGHVTH3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

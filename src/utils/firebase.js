// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaN4F2ltjg4C4EalXI9TgN1cROHa2tIRo",
  authDomain: "netflix-gpt-922bb.firebaseapp.com",
  projectId: "netflix-gpt-922bb",
  storageBucket: "netflix-gpt-922bb.appspot.com",
  messagingSenderId: "944890342185",
  appId: "1:944890342185:web:14aacd317aa74e91d06538",
  measurementId: "G-QPYZ3EL4LP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

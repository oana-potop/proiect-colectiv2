// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAd2F8WyFQUTqLovEllVPWDJ9ZgVyWDiNI",
  authDomain: "proiect-colectiv-9ab6c.firebaseapp.com",
  projectId: "proiect-colectiv-9ab6c",
  storageBucket: "proiect-colectiv-9ab6c.appspot.com",
  messagingSenderId: "682268570006",
  appId: "1:682268570006:web:cb289a8ae76a57c6096db7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default firebase;

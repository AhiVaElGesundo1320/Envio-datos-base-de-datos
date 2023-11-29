// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNnnHsQeBDvPuon-OZ8SX_B3ulLCY9meE",
  authDomain: "prueba-de-login-732e4.firebaseapp.com",
  projectId: "prueba-de-login-732e4",
  storageBucket: "prueba-de-login-732e4.appspot.com",
  messagingSenderId: "490375709056",
  appId: "1:490375709056:web:9d30fd1dd915b406b48165"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
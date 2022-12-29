// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBetOrO2WJerYqku0NTc7or4tjvPUCifwE",
  authDomain: "qwitter-18017.firebaseapp.com",
  projectId: "qwitter-18017",
  storageBucket: "qwitter-18017.appspot.com",
  messagingSenderId: "516776266429",
  appId: "1:516776266429:web:6abfcd05d89ebb67bdc5d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db

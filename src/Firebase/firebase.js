// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import {getAuth} from '@firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOQ9hpb1fwnwEOGWpDA5BAIxjRCXO9dKg",
  authDomain: "realestateapp-dd755.firebaseapp.com",
  projectId: "realestateapp-dd755",
  storageBucket: "realestateapp-dd755.appspot.com",
  messagingSenderId: "440389359836",
  appId: "1:440389359836:web:bbc5fd7e57f5091f743c19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app)
const auth=getAuth(app)
export {db,auth}
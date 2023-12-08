// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsor0fW3nYxEuo4WfiCf7OtUMGiBw4Hts",
  authDomain: "realtor-clone-react-8b036.firebaseapp.com",
  projectId: "realtor-clone-react-8b036",
  storageBucket: "realtor-clone-react-8b036.appspot.com",
  messagingSenderId: "260260842094",
  appId: "1:260260842094:web:d7cb523a05fb33999bf47f"
};

// Initialize Firebase
 initializeApp(firebaseConfig);

 export const db = getFirestore();
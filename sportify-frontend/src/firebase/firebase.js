import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBfKvq_DDhSRlwcv3qMxuyWgHUG9Q41pMM",
    authDomain: "sportify-b6849.firebaseapp.com",
    projectId: "sportify-b6849",
    storageBucket: "sportify-b6849.appspot.com",
    messagingSenderId: "571446114188",
    appId: "1:571446114188:web:8ca93b125a0f855bf008a9",
    measurementId: "G-RJK0D5QLR2"
};
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };
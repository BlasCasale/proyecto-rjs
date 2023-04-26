import { initializeApp } from "firebase/app";
import { getFirestore } from  'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyACMq5nzBMSLGwE1k83BDY7aCHT-BuyJ4o",
  authDomain: "proyecto-rjs-c7950.firebaseapp.com",
  projectId: "proyecto-rjs-c7950",
  storageBucket: "proyecto-rjs-c7950.appspot.com",
  messagingSenderId: "712555589683",
  appId: "1:712555589683:web:8f7992a54f188db6797346"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
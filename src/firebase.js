import { getAuth } from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeoeDB8H_pT4DI4aT8mNvrRxHW6s67lRM",
  authDomain: "products-821b2.firebaseapp.com",
  projectId: "products-821b2",
  storageBucket: "products-821b2.appspot.com",
  messagingSenderId: "727878751635",
  appId: "1:727878751635:web:6f02223719862f6e8f4466",
  measurementId: "G-HN4G7YZZSJ"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore()
export const auth = getAuth(app)
export default app
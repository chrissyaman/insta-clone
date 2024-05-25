import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBNs1o-RwzxfAWtAOPJdN0mzcVofheo9GE",
  authDomain: "instagram-clone-de9df.firebaseapp.com",
  projectId: "instagram-clone-de9df",
  storageBucket: "instagram-clone-de9df.appspot.com",
  messagingSenderId: "1045598366896",
  appId: "1:1045598366896:web:75931a2fd42203f7cf1f75"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()
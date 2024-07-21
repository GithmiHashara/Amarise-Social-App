// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBt9lj_O4_CjkxfO0OreXSDtNd5GT4xwIQ",
  authDomain: "insta-clone-9a1bd.firebaseapp.com",
  projectId: "insta-clone-9a1bd",
  storageBucket: "insta-clone-9a1bd.appspot.com",
  messagingSenderId: "231441279090",
  appId: "1:231441279090:web:ea4d4e2e8ee93dc5527aeb",
  measurementId: "G-D8228TY2FW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };

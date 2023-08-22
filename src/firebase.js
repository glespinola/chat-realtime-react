import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc, getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBOb5ES2AS7n5IaG42wDn_B6uPZ7v3HMbc",
  authDomain: "chat-react-8db1a.firebaseapp.com",
  projectId: "chat-react-8db1a",
  storageBucket: "chat-react-8db1a.appspot.com",
  messagingSenderId: "621046140974",
  appId: "1:621046140974:web:137c256338ac16690f0fbf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app)
export { auth, storage, createUserWithEmailAndPassword, ref, uploadBytesResumable, getDownloadURL, updateProfile, doc, setDoc, db }
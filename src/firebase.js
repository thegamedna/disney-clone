import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDIn4_xB1w5yNpuM8sWclUv3v5-QGNL2rU",
  authDomain: "disney-clone-1e04a.firebaseapp.com",
  projectId: "disney-clone-1e04a",
  storageBucket: "disney-clone-1e04a.appspot.com",
  messagingSenderId: "320553688935",
  appId: "1:320553688935:web:bf234450793b5fdb55d9c2",
  measurementId: "G-4H2NJJ0Q28",
};
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const googleProvider = new GoogleAuthProvider();


export { auth, db , googleProvider };

// const firebaseApp = initializeApp(firebaseConfig);
// const db = new Firestore();
// const auth = getAuth(firebaseApp);
// const provider = new GoogleAuthProvider();
// const storage = firebase.storage();

// export { auth, provider, storage, firebaseApp };
// export default db;

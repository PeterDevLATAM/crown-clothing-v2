import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth"; //Auth

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"; //DB

const firebaseConfig = {
  apiKey: "AIzaSyBLmE9OJUrr-zhvYlhH7FMb4aIsa8lps-k",
  authDomain: "crwn-db-1c597.firebaseapp.com",
  projectId: "crwn-db-1c597",
  storageBucket: "crwn-db-1c597.appspot.com",
  messagingSenderId: "643591164779",
  appId: "1:643591164779:web:c88af4a10302cacc9f722e",
  measurementId: "G-37VRYC7T2X",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, aditionalInformation={}) => {

  if (!userAuth) return;


  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef)
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();


    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...aditionalInformation
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};


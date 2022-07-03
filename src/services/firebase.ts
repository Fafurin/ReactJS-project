// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getDatabase, ref } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBCp39yC6VuhWHdIC8VLCGBvOFv8KCim8k",
    authDomain: "ffd58-cc91c.firebaseapp.com",
    projectId: "ffd58-cc91c",
    storageBucket: "ffd58-cc91c.appspot.com",
    messagingSenderId: "982588398916",
    appId: "1:982588398916:web:370c2bf7c9276fc824cb11",
    measurementId: "G-91QGJWPRYZ"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);

export const signUp = async (email: string, password: string) =>
    await createUserWithEmailAndPassword(firebaseAuth, email, password);

export const logIn = async (email: string, password: string) =>
    await signInWithEmailAndPassword(firebaseAuth, email, password);

export const logOut = async () => await signOut(firebaseAuth);

const db = getDatabase(app);

export const messagesRef = ref(db, 'messages');

export const getChatById = (chatId: string) => ref(db, `messages/${chatId}`);

export const getMessageListById = (chatId: string) => ref(db, `messages/${chatId}/messageList/`);

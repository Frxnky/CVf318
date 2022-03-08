// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
const firebaseApp = initializeApp({
    apiKey: "AIzaSyDoyxnKeYeTOBik1c5jvb4qom3dUPPYJVE",
    authDomain: "fcovid318.firebaseapp.com",
    projectId: "fcovid318",
    storageBucket: "fcovid318.appspot.com",
    messagingSenderId: "47096840681",
    appId: "1:47096840681:web:c05e8a5781fa63c402cb78",
    measurementId: "G-T6XT4MR5JP"
});

const db = getFirestore(firebaseApp);
export default db
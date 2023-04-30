// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Added database
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbHvIw2PEl7q70Ow2-1XyQVp7wctz_YA8",
    authDomain: "connection-newsletter.firebaseapp.com",
    projectId: "connection-newsletter",
    storageBucket: "connection-newsletter.appspot.com",
    messagingSenderId: "1030330534202",
    appId: "1:1030330534202:web:5c69d841a8917f295be803",
    measurementId: "G-H5H46MY344"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Firestore and get a reference to the service
export const db = getFirestore(app);
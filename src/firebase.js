// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCXcC4iARO_IspwiOPG-dN8pZK-fd7V1MQ",
	authDomain: "first-project-eaeb9.firebaseapp.com",
	projectId: "first-project-eaeb9",
	storageBucket: "first-project-eaeb9.appspot.com",
	messagingSenderId: "137486987785",
	appId: "1:137486987785:web:483ef2a960a94f8290bed8",
	measurementId: "G-2TMNYSVZX7",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();

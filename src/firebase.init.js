// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDRVPUWzj5V6rOl2xSoPL4vkkyzo1uk_PE",
    authDomain: "assignment-11-2befa.firebaseapp.com",
    projectId: "assignment-11-2befa",
    storageBucket: "assignment-11-2befa.appspot.com",
    messagingSenderId: "862352022587",
    appId: "1:862352022587:web:9272a22504789979c7501e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
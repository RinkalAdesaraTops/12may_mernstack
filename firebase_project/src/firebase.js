// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiY0FR186B8qM6bFSGjQ1bK6-8ih1-PyY",
  authDomain: "mayreact-457a1.firebaseapp.com",
  projectId: "mayreact-457a1",
  storageBucket: "mayreact-457a1.firebasestorage.app",
  messagingSenderId: "115097503057",
  appId: "1:115097503057:web:1673caf1b397aeaa0d3f70",
  measurementId: "G-RSQV3RW66T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}
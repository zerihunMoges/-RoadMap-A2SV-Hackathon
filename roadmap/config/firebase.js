// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDMvpzeCcvXEpTLTpUlzQ4yaz4XCjyk5hI",
  authDomain: "roadmap-83ada.firebaseapp.com",
  projectId: "roadmap-83ada",
  storageBucket: "roadmap-83ada.appspot.com",
  messagingSenderId: "168298505680",
  appId: "1:168298505680:web:71df592ee1beb419ddc5d5",
  measurementId: "G-6J26LFT4TS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth()
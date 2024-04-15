
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blogapp-e7bf9.firebaseapp.com",
  projectId: "blogapp-e7bf9",
  storageBucket: "blogapp-e7bf9.appspot.com",
  messagingSenderId: "317293380650",
  appId: "1:317293380650:web:82d849d71fb1450eff6f53"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
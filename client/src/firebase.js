
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "travel-website-7dc3c.firebaseapp.com",
  projectId: "travel-website-7dc3c",
  storageBucket: "travel-website-7dc3c.appspot.com",
  messagingSenderId: "503305790829",
  appId: "1:503305790829:web:7de41302f4ff57b245a664",
};


export const app = initializeApp(firebaseConfig);

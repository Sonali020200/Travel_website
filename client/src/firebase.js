
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "travelopia-2f8a1.firebaseapp.com",
  projectId: "travelopia-2f8a1",
  storageBucket: "travelopia-2f8a1.appspot.com",
  messagingSenderId: "56529896389",
  appId: "1:56529896389:web:c4d3fc05398754702481ac",
  measurementId: "G-D0Y11CMWMW",
  databaseURL: "https://travelopia-2f8a1-default-rtdb.firebaseio.com/"
};


export const app = initializeApp(firebaseConfig);

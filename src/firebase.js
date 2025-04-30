// src/firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore'; // Add Firestore if you're using it

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyC2ZQeLHFdTWlQFGMyvXJbI39BDC-DXvi8",
  authDomain: "ecommercepro-d9aaf.firebaseapp.com",
  projectId: "ecommercepro-d9aaf",
  storageBucket: "ecommercepro-d9aaf.appspot.com", // fix: `.app` → `.appspot.com`
  messagingSenderId: "251412551375",
  appId: "1:251412551375:web:76a1cc3bc3b1a83a83c9ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export what you use in components
export const auth = getAuth(app);
export const db = getFirestore(app);
export { collection, addDoc };

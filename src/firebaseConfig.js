import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
  doc,
  updateDoc,
  increment
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB6ShY1FBEhBpb2yzryBKccpY7dbaQR83I",
  authDomain: "avenzo-studio.firebaseapp.com",
  projectId: "avenzo-studio",
  storageBucket: "avenzo-studio.firebasestorage.app",
  messagingSenderId: "24703296953",
  appId: "1:24703296953:web:1ba6116ef279aac01fc268",
  measurementId: "G-7058Z4DPP7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export Firestore database instance
const db = getFirestore(app);

export { db ,collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
  doc,
  updateDoc,
  increment};
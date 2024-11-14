import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chat-app-f0240.firebaseapp.com",
  databaseURL: "https://chat-app-f0240-default-rtdb.firebaseio.com",
  projectId: "chat-app-f0240",
  storageBucket: "chat-app-f0240.firebasestorage.app",
  messagingSenderId: "1008603358576",
  appId: "1:1008603358576:web:a5d61fe84e05214a929bb5",
  measurementId: "G-MVJEMFTNLB"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { db, auth };

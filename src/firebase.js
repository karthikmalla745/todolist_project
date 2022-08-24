import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-ehvVjT_dtEN5pgw50wqGpT7P4sYISug",
  authDomain: "todoapp-a1247.firebaseapp.com",
  databaseURL: "https://todoapp-a1247-default-rtdb.firebaseio.com",
  projectId: "todoapp-a1247",
  storageBucket: "todoapp-a1247.appspot.com",
  messagingSenderId: "839329078212",
  appId: "1:839329078212:web:b2f172d10f601dcd0ce291",
  measurementId: "G-2HLVV4DQDX"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

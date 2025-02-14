import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB1mZnfUrXesUadds4hGzUIK2u_tpCYPlQ",
  authDomain: "calendar-d1047.firebaseapp.com",
  projectId: "calendar-d1047",
  storageBucket: "calendar-d1047.appspot.com",
  messagingSenderId: "584516008910",
  appId: "1:584516008910:web:ee9b37913b85a3c465c99f"
};

// Firebaseの初期化
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }; 
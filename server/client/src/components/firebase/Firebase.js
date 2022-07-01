import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB9Fa80ocYUysgYZlyfST4Kl_VUidqMibw",
  authDomain: "student-card-10cc6.firebaseapp.com",
  projectId: "student-card-10cc6",
  storageBucket: "student-card-10cc6.appspot.com",
  messagingSenderId: "562504282530",
  appId: "1:562504282530:web:1ee8742f8fe14e9d2b42fb"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app
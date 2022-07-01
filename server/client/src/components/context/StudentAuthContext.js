import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const studentAuthContext = createContext();

export const StudentAuthContextProvider = ({ children }) => {
  const [student, setStudent] = useState({});

  // Signup
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // googleでlogin
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }

  // Logout
  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentstudent) => {
      setStudent(currentstudent);
    });

    return () => {
      unsubscribe();
    };
  }, []);


  return (
    <studentAuthContext.Provider value={{student, signUp, logIn, logOut, googleSignIn}}>
      {children}
    </studentAuthContext.Provider>
  );
};

export const useStudentAuth = () => {
  return useContext(studentAuthContext);
};

  


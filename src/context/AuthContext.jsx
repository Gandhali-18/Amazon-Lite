import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../services/firebase';

import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from 'firebase/auth';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sign Up
  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // Log In
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Log Out
  function logout() {
    return signOut(auth);
  }

  // Real-time listener for Auth State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    
    return unsubscribe;
  }, []);

  const value = {
    user,
    login,
    signup,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

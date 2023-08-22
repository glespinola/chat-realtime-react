import { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth'

export const AuthContext = createContext()
export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  const unSub = useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log(user);
    });
    return () => {
      unSub();
    }
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  )

}
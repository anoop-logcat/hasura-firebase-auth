import { createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth"
import { createContext,useContext, useState, useEffect } from "react"
import { FirebaseClient } from "../helpers/firebase-client";

const AuthContext = createContext({
  currentUser:null,
  login:null,
  signup:null,
  logout:null,
  resetPassword:null,
  updateEmail:null,
  updatePassword:null,
})

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const client = FirebaseClient();
  const auth = getAuth(client);

  const [currentUser, setCurrentUser] = useState<any>()
  const [loading, setLoading] = useState(true)

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth,email, password)
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth,email, password)
  }

  function logout() {
    return auth.signOut()
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth,email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

import { createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword,updatePassword, User, UserCredential,updateEmail } from "firebase/auth"
import { createContext,useContext, useState, useEffect } from "react"
import { FirebaseClient } from "../helpers/firebase-client";
import { AuthContextDTO } from "./dto/auth-context.dto";

const AuthContext = createContext<AuthContextDTO>({
  currentUser: null,
  login: null,
  register: null,
  logout: null,
  resetPassword: null,
  changeEmail: null,
  changePassword: null,
});

export function useAuth() {
  return useContext(AuthContext)
};

export function AuthProvider({ children }) {
  const client = FirebaseClient();
  const auth = getAuth(client);

  const [currentUser, setCurrentUser] = useState<User>();
  const [loading, setLoading] = useState(true);

  function register(email:string, password:string):Promise<UserCredential> {
    return createUserWithEmailAndPassword(auth,email, password)
  }

  function login(email:string, password:string):Promise<UserCredential> {
    return signInWithEmailAndPassword(auth,email, password)
  }

  function logout():Promise<void> {
    return auth.signOut()
  }

  function resetPassword(email:string):Promise<void> {
    return sendPasswordResetEmail(auth,email)
  }

  function changeEmail(user:User,newEmail:string) :Promise<void>{
    return updateEmail(user,newEmail);
  }

  function changePassword(user:User,newPassword:string):Promise<void> {
    return updatePassword(user, newPassword);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, []);

  return (
    <AuthContext.Provider value={{
      currentUser,
      login,
      register,
      logout,
      resetPassword,
      changeEmail,
      changePassword
    }}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

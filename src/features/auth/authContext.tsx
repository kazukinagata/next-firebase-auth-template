import { FC, createContext, useEffect, useState, useContext } from "react";
import firebase from "firebase";
import { auth } from "../../lib/firebase";

export type FirebaseUser = firebase.User;

type AuthContextProps = {
  currentUser: FirebaseUser | null | undefined;
  loading: boolean;
  setCurrentUser: (user?: FirebaseUser) => void;
};

const AuthContext = createContext<AuthContextProps>({
  currentUser: undefined,
  loading: false,
  setCurrentUser: () => {},
});

export const useAuthCtx = () => useContext(AuthContext);

const AuthProvider: FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<
    FirebaseUser | null | undefined
  >(undefined);
  const loading = typeof currentUser === "undefined";

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, loading, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

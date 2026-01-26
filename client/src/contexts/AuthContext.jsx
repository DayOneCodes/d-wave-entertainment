import { createContext, useContext, useEffect, useState } from "react";
import { authService } from "../services/auth.service";

const AuthContext = createContext(null);

export function AuthProvider({children}) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadUser () {
      try {
        setLoading(true);
        const currentUser = await authService.getCurrentUser();
        setUser(currentUser || null);
      }
      catch (err) {
        setUser(null);
      }
      finally {
        setLoading(false);
      }
    }
    loadUser();
  }, []);

  const login = async ({email, password}) => {
    setLoading (true)
    setError(null);
    try {
      const loggedInUser = await authService.login({email, password});
      console.log(loggedInUser)
      setUser(loggedInUser);
      return loggedInUser
    }
    catch (err) {
      setError(err.message);
      throw err;
    }
    finally {
      setLoading(false);
    }
  };


  const logout = async () => {
    setLoading(true);
    try {
      await authService.logout();
      setUser(null);
    }
    catch (_) {}
    finally {
      setLoading(false);
    }
  };


  return (
    <AuthContext.Provider value={{user, loading, error, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error ("useAuth must be used within AuthProvider");
  return context;
}

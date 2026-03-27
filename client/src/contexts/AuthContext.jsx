import { createContext, useContext, useState, useEffect, } from "react";
import { authService } from "../services/auth.service.js";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try 
      {
        // setLoading(true);
        setError(null);

        const res = await authService.me();
        if (res.success) {
          setUser(res.user);
          setIsAuthenticated(true);
        }
      } 
      catch (err) 
      {
        setError(err)
      } 
      finally 
      {
        setLoading(false)
      }
    };

    fetchUser();
  }, []);


  const useLogin = async (user) => {
    try 
    {
      if (isAuthenticated) throw new Error ("Log-Out current user");

      setError(null);

      const res = await authService.login(user);
      if (res.success) {
        setUser(res.user);
        setIsAuthenticated(true);
      }

      return {success: true}
    } catch (error) 
    {
      setError(error);
      return {success: false}
    }
    finally 
    {
      setLoading(false)
    }
  }
  
  const signup = async (payload) => {
    try 
    {
      if (isAuthenticated) throw new Error ("Log-Out current user");

      // setLoading(true);
      setError(null);

      const res = await authService.signup(payload)
      if (res.success) {
        setUser(res.user);
        setIsAuthenticated(true);
      }

      return {success: true}
    }
    catch (error)
    {
      setError(error)
      return {success: false}
    }
    finally
    {
      setLoading(false)
    }
  }

  // add logout params e.g returnTo: pag
  const useLogout = async () => {
    try 
    {
      if (!isAuthenticated) throw new Error ("No Active Session to log out from");

      setLoading(true);
      setError(null);

      const res = await authService.logout();
      console.log(res)
      setIsAuthenticated(false);
      setUser(null)
    }
    catch (error) 
    {
      setError(error);
    }
    finally 
    {
      setLoading(false)
    }
  }

  const verifyEmail = async (token) => {
    try 
    {
      setLoading(true);
      setError(null);

      const res = await authService.verifyEmail(token);
      console.log(res);
    }
    catch (error)
    {
      setError(error)
    }
    finally 
    {
      setLoading(false)
    }
  }

  return (
    <AuthContext.Provider value={{loading, error, user, isAuthenticated, useLogin, useLogout, signup, verifyEmail}}>
      {children}
    </AuthContext.Provider>
  )
};

export const useAuth = () => {
  return useContext(AuthContext);
}
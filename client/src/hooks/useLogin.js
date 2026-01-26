import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export function useLogin () {
  const {login} = useAuth();
  const navigate = useNavigate();


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const user = await login({email, password});

      if (user.role === "admin") {
        navigate("/admin", {replace: true})
      }
      else {
        navigate("/", {replace: true})
      }
    }
    catch (err) {
      setError(err.message || "login failed");
    }
    finally {
      setLoading(false)
    }
  }

  return {
    email,
    password,
    setEmail,
    setPassword,
    loading,
    error,
    handleSubmit,
  }
}
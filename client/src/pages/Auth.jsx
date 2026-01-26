import  LoginView  from "../components/LoginView.jsx";
import { useAuth } from "../contexts/AuthContext.jsx";
import { useLogin } from "../hooks/useLogin";
import { Navigate } from "react-router-dom";

export default function AuthPage () {
  const {
    email,
    password,
    setEmail,
    setPassword,
    loading,
    error,
    handleSubmit
  } = useLogin();

  const auth = useAuth();
  console.log(auth.user)
  if (auth.loading) {
    return(
      <div className="min-h-screen grid place-items-center">
        Loading...
      </div>
    )
  }

  if (auth.user) return <Navigate to={auth.user.role === "admin" ? "/admin" : "/"} replace/>

  return (
    <LoginView
    email={email}
    password={password}
    onEmailChange={setEmail}
    onPasswordChange={setPassword}
    loading={loading}
    error={error}
    onSubmit={handleSubmit}
    />
  )
}
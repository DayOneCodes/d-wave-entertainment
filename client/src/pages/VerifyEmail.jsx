import { useEffect, useRef } from "react"
import { useParams } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext.jsx";
import Loading from "../components/Loading.jsx";
import Success from "../components/Success.jsx";
import Error from "../components/Error.jsx";

const VerifyEmail = () => {

  const { token } = useParams();
  const { loading, error, verifyEmail } = useAuth();

  const hasVerified = useRef(false);

  useEffect(() => {
    if (token && !hasVerified.current) {
      hasVerified.current = true;
      verifyEmail(token);
    }
  }, [token, verifyEmail]);


  if (loading) return <div className="flex justify-center items-center w-screen h-screen"><Loading message="Verifying your account"/></div>
  if (error) return <div className="flex justify-center items-center w-screen h-screen"><Error message="Invalid or Expired Link"/></div>
  if (!loading && !error) return <div className="flex justify-center items-center w-screen h-screen">
    <Success message="Email Verified Successfully, proceed to log-in"/>
    </div>

}

export default VerifyEmail;
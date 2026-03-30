import { useEffect, useRef, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext.jsx";
import Loading from "../components/Loading.jsx";
import Success from "../components/Success.jsx";
import Error from "../components/Error.jsx";

const VerifyEmail = () => {

  const { token } = useParams();
  const { verifyEmail } = useAuth();
  const [verifyEmailLoading, setVerifyEmailLoading] = useState(true);
  const [verificationSuccess, setVerificationSuccess] = useState(null);
  const [message, setMessage] = useState("Verifying your account");
  const navigate = useNavigate();

  const hasVerified = useRef(false);

  useEffect(() => {
    async function verifyToken () { 
      if (token && !hasVerified.current) {
        hasVerified.current = true;

      try {
        const verifyEmailRes = await verifyEmail(token);

        if (verifyEmailRes?.success) {
          setMessage("Account Verified Successfully, redirecting to log in...")
          setVerificationSuccess(true);
        } else {
          setMessage("Invalid or Expired Link");
          setVerificationSuccess(false);
        }
      }
      catch (err) {
        setVerificationSuccess(false)
        setMessage("We couldn’t verify your account right now, please check your connection and try again")
      } 
      finally {
        setVerifyEmailLoading(false);
      }
      }
    }

    verifyToken()
  }, [token, verifyEmail]);


  if (verifyEmailLoading) return (
    <div className="flex justify-center items-center w-screen h-screen">
      <Loading message={message}/>
    </div>)

  if (verificationSuccess === false) return (
    <div className="flex justify-center items-center w-screen h-screen">
      <Error message={message}/>
    </div>)

  if (verificationSuccess) return (
    <div className="flex justify-center items-center w-screen h-screen">
      <Success message={message} close={() => navigate("/auth")}/>
    </div>)

}

export default VerifyEmail;
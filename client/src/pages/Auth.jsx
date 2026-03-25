import { useState, useEffect } from "react"; 
import { useAuth } from "../contexts/AuthContext.jsx";
import { useToast } from "../contexts/ToastContext.jsx";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [ view, setView ] = useState("login");
  const [payload, setPayload] = useState({});
  const [justSignedUp, setJustSignedUp] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState({
    twelveChars: false,
    oneSpecialChar: false,
    oneUppercaseChar: false,
    oneLowercaseChar: false,
    oneNumber: false
  })
  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate();

  const {user, loading, error, isAuthenticated, useLogin, signup} = useAuth();
  const { showToast } = useToast();

  useEffect(() => {
    if (isAuthenticated && !justSignedUp) {
      navigate("/");
    }
  }, [isAuthenticated, justSignedUp])

  const handleLogIn = async (e) => {
    e.preventDefault();

    if (isAuthenticated) {
      return;
    }

    await useLogin(payload);

    if (error) {
      showToast("Invalid log-in credentials", "error")
    }
  }

  const handleSignup = async (e) => {
    e.preventDefault();

    if (isAuthenticated) {
      return;
    }

    if (!payload.email || !payload.name || !payload.password || !payload.age) 
    {
      return showToast("All fields are required", "error")
    };

    if (!/\S+@\S+\.\S+/.test(payload.email)) return showToast("Invalid Email address", "error");

    let passwordValid = undefined;
    
    Object.entries(passwordStrength).forEach((c,_) => {
      if (!c[1]) {
        return passwordValid = false;
      }

        return passwordValid = passwordValid === false ? false : true;
    });

    if (!passwordValid) {
      return showToast("Password is not strong enough", "error")
    } 

    await signup(payload);
    setJustSignedUp(true);
    navigate("/check-your-email");
  }


    return (
      <div className="bg-primary bg-[url(https://res.cloudinary.com/dslzm3lo6/image/upload/v1774264291/image_xpufb6.jpg)] bg-cover bg-center bg-no-repeat bg-fixed  text-white overflow-x-hidden">
        <div className="relative min-h-screen flex flex-col items-center justify-center hero-bg p-4 md:p-8">
          <div className="w-full max-w-[480px] flex flex-col gap-6">

            {/* Logo */}
            <div className="flex justify-center mb-2">
              <div className="flex items-center gap-2" onClick={
                () => navigate("/")
              }>
                <div className="text-black rounded-lg">
                  <img className="w-10" src="https://res.cloudinary.com/dslzm3lo6/image/upload/v1771483783/logo_rbnlbh.jpg"/>
                </div>
                <span className="text-2xl font-black tracking-tighter">
                  D-WAVE <span className="text-white">ENT.</span>
                </span>
              </div>
            </div>

            {/* Card */}
            <div className="bg-white glass-card rounded-xl p-6 md:p-10 shadow-2xl">
              <div className="text-center mb-8">
                <h1 className="text-3xl text-primary md:text-4xl">
                  {view === "login" ? " Welcome Back" : "Hi, You're Welcome"}
                </h1>
                <p className="text-black/80 text-sm mt-2">
                  {view === "login" ?
                  "Sign in to access your exclusive event dashboard." :
                  "Create an account to get your exclusive dashboard"}
                </p>
              </div>
             { view === "login" && 
              (
              <form onSubmit={() => console.log("SUBMITTED")} className="flex flex-col gap-5">
                <input
                  type="email"
                  // value={email}
                  onChange={(e) => {
                  setPayload((prev) => 
                    { 
                      return {
                        ...prev, 
                        email: e.target.value
                      }
                    })
                }}
                  placeholder="email@example.com"
                  className="h-14 px-4 rounded-lg bg-[#27251b]/50 border border-[#54503b]"
                  required
                />

                <input
                  type="password"
                  onChange={(e) => {
                  setPayload((prev) => 
                    { 
                      return {
                        ...prev, 
                        password: e.target.value
                      }
                    })
                }}
                  placeholder="••••••••"
                  className="h-14 px-4 rounded-lg bg-[#27251b]/50 border border-[#54503b]"
                  required
                />


                <button
                  type="submit"
                  disabled={loading}
                  className="h-14 bg-primary text-white font-bold rounded-lg disabled:opacity-60"
                  onClick={(e) => handleLogIn(e)}>
                  {loading ? "Signing in..." : "Sign In"}
                </button>
                                <div className="relative flex items-center py-4">
                <div className="flex-grow border-t border-border-dark"></div>
                <span className="flex-shrink mx-4 text-slate-500 text-xs uppercase tracking-widest font-bold">OR</span>
                <div className="flex-grow border-t border-border-dark"></div>
                </div>
                <div className="flex justify-center">
                <p className="text-slate-400">
                    New to D-Wave Entertainment? 
                    <a className="text-primary font-bold block text-center cursor-pointer hover:underline decoration-2 underline-offset-4" onClick={() => {
                      setView("signup");
                      setPayload({});
                    }}>Create an account</a>
                </p>
                </div>
              </form> 
              ) 
             }

             {
              view === "signup" && 
              (
                <form className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                <label className="flex flex-col gap-2">
                <span className="text-primary text-sm font-semibold uppercase tracking-wider">Full Name</span>
                <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-xl">person</span>
                <input className="w-full pl-12 pr-4 h-14 rounded-lg border border-border-dark bg-surface-dark text-black focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-slate-400" required placeholder="Alex Morgan" type="text" onChange={(e) => {
                  setPayload((prev) => 
                    { 
                      return {
                        ...prev, 
                        name: e.target.value
                      }
                    })
                }}/>
                </div>
                </label>
                </div>
                <div className="md:col-span-1">
                <label className="flex flex-col gap-2">
                <span className="text-primary text-sm font-semibold uppercase tracking-wider">Age</span>
                <input className="w-full px-4 h-14 rounded-lg border border-border-dark bg-surface-dark text-black focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-slate-400" placeholder="21" type="number" onChange={(e) => {
                  setPayload((prev) => 
                    { 
                      return {
                        ...prev, 
                        age: e.target.value
                      }
                    })
                }}/>
                </label>
                </div>
                </div>
                <label className="flex flex-col gap-2">
                <span className="text-primary text-sm font-semibold uppercase tracking-wider">Email Address</span>
                <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-xl">mail</span>
                <input className="w-full pl-12 pr-4 h-14 rounded-lg border border-border-dark bg-surface-dark text-black focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-slate-400" placeholder="alex@exclusive.com" type="email" onChange={(e) => {
                  setPayload((prev) => 
                    { 
                      return {
                        ...prev, 
                        email: e.target.value
                      }
                    })

                  
                }}/>
                </div>
                </label>
                <label className="flex flex-col gap-2">
                <span className="text-primary text-sm font-semibold uppercase tracking-wider">Password</span>
                <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary text-xl">lock</span>
                <input className="w-full pl-12 pr-12 h-14 rounded-lg border border-border-dark bg-surface-dark text-black focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-slate-400" placeholder="••••••••" type={showPassword ? "text" : "password"} onChange={(e) => {
                  setPayload((prev) => 
                    { 
                      return {
                        ...prev, 
                        password: e.target.value
                      }
                    })

                    setPasswordStrength((prev) => {
                      const check = {};

                      check.twelveChars = e.target.value.length >= 12;

                      check.oneSpecialChar = /[!@#$%^&*]/.test(e.target.value);

                      check.oneUppercaseChar = /[A-Z]/.test(e.target.value);

                      check.oneLowercaseChar = /[a-z]/.test(e.target.value);
                      
                      check.oneNumber = /[0-9]/.test(e.target.value);


                      return {
                        ...prev,
                        ...check
                      }
                    })
                }}/>
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500" type="button" onClick={
                  () => setShowPassword((prev) => !prev)
                }>
                <span className="material-symbols-outlined text-xl">visibility</span>
                </button>
                </div>
                </label>
                <ul >
                  <li className="text-slate-500">Password must contain at least:</li>
                  <li className={
                    `${passwordStrength.twelveChars ? "text-green-500" :
                    "text-slate-500"} `}>12 Characters</li>
                  <li className={
                    `${passwordStrength.oneUppercaseChar ? "text-green-500" :
                    "text-slate-500"} `}>1 uppercase letter</li>
                  <li className={
                    `${passwordStrength.oneLowercaseChar ? "text-green-500" :
                    "text-slate-500"} `}>1 lowercase letter</li>
                  <li className={
                    `${passwordStrength.oneSpecialChar ? "text-green-500" :
                    "text-slate-500"} `}>1 special character</li>
                  <li className={
                    `${passwordStrength.oneNumber ? "text-green-500" :
                    "text-slate-500"} `}>1 number</li>
                </ul>
                <div className="flex items-start gap-3 mt-2">
                <input className="mt-1 rounded border-border-dark bg-surface-dark text-primary focus:ring-primary focus:ring-offset-background-dark" id="terms" type="checkbox"/>
                <label className="text-sm text-slate-500" for="terms">
                    I agree to the <a class="text-primary hover:underline" href="#">Terms of Service</a> and <a className="text-primary hover:underline" href="#">Privacy Policy</a>.
                </label>
                </div>
                <button className="mt-4 w-full h-14 bg-primary hover:bg-primary/90 text-white font-black text-lg rounded-lg transition-transform active:scale-[0.98] flex items-center justify-center gap-2" disabled={loading} type="submit" onClick={(e) => handleSignup(e)}>
                {
                loading && view === "signup" ?
                 "Signing Up..." : 
                 "CREATE ACCOUNT"
                }
                <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                <div className="relative flex items-center py-4">
                <div className="flex-grow border-t border-border-dark"></div>
                <span className="flex-shrink mx-4 text-slate-500 text-xs uppercase tracking-widest font-bold">OR</span>
                <div className="flex-grow border-t border-border-dark"></div>
                </div>
                <div className="flex justify-center">
                <p className="text-slate-500">
                    Already have an account? 
                    <a className="text-primary block text-center font-bold hover:underline decoration-2 underline-offset-4" onClick={() => {
                      setView("login");
                      setPayload({});
                      }}>Sign In</a>
                </p>
                </div>
                </form>
              )
             }
            </div>
          </div>
        </div>
      </div>
    )
}

export default AuthPage;


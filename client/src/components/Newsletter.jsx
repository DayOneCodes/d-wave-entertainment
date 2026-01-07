import { useState, useRef } from "react";
import { subscribeEmail } from "../services/subscriberService";

const EMAIL_REGEX = /\S+@\S+\.\S+/

function Newsletter () {
  const formStartedAtRef = useRef(Date.now());
  const newsletter = useRef();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({status: "idle", message: "", code: "", aria: ""});

  const joinNewsletter = async (e) => {
      e.preventDefault();

      if (newsletter.current?.name.value) {
        setStatus({
          status: "error",
          message: "Could not read input",
          code: "red",
          aria: "assertive"
        });

        return;
      }

      if (!EMAIL_REGEX.test(email)){
        setStatus(
          {
            status: "error",
            message: "Please enter a valid email",
            code: "red",
            aria: "assertive"
          });

          return;
      }

      try {
        setStatus({
          status: "loading",
          message: "submitting, please wait...",
          code: "green",
          aria: "polite"
        });

        await subscribeEmail(email, formStartedAtRef.current);

        setStatus({
          status: "success",
          message: "You're subscribed to our newsletter",
          code: "green",
          aria: "polite"
        });

        setEmail("");
      }
      catch(err){
        setStatus({
          status: "error",
          message: err.message,
          code: "red",
          aria: "assertive"
        });
        console.log(err.message)
      }

  }

  return (
    <> 
      <section className="py-20 px-4 md:px-10 lg:px-40 bg-white border-t border-slate-200">
          <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 text-primary mb-6">
                  <span className="material-symbols-outlined text-3xl">mail</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Be the First to Know</h2>
              <p className="text-slate-600  mb-8 text-lg">Join our exclusive guest list to get early access to tickets, artist announcements, and VIP offers.</p>
              <form ref={newsletter} onSubmit={joinNewsletter} className="flex flex-col gap-3 max-w-lg justify-center items-center mx-auto">
                  <input className="flex-1 bg-background-light border  border-gray-300 rounded-lg px-6 py-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" hidden placeholder="Enter your name" autoComplete="off" tabIndex="-1" type="text" name="name"/>

                  <input className="flex-1 bg-background-light border border-gray-300 rounded-lg px-6 py-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-full" placeholder="Enter your email address" name="email" type="email" onChange={(e) => {setEmail(e.target.value)}} disabled={status.status === "loading"}/>
                  
                  <label className="text-xs text-primary font-medium">
                    <input type="checkbox" required/>
                    I agree to receive updates and news via email
                  </label>

                  <button className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-primary/40 transition-all  md:w-[50%] whitespace-nowrap" type="submit">
                                      {status.status === "loading" ? "Signing Up..." : "Sign Up"} 
                  </button>
              </form>
              <p className="mt-4 text-xs text-slate-500 ">We respect your privacy. Unsubscribe at any time.</p>
              {status !== "idle" && (
              <p 
              className={`${status.code === "green" ? "text-green-500" : "text-red-500"} font-bold`} 
              role="alert"
              aria-live={status.aria}
              >
                {status.message}
              </p>
                )}
          </div>
      </section>
    </>
  )
}

export default Newsletter;
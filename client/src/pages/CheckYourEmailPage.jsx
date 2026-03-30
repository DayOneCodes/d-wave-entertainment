import { useAuth } from "../contexts/AuthContext.jsx";

const CheckYourEmailPage = () => {
  const { resendVerificationMail } = useAuth();

  return (
      <div className="flex-grow flex items-center justify-center relative px-6 hero-gradient overflow-hidden">

        <div className="bg-white relative rounded-xl border w-full max-w-xl">
          {/* Success Card */}
          <div className="p-10 md:p-16  flex flex-col items-center text-center">
            
            {/* Email Icon */}
            <div className="mb-10 relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl scale-150"></div>

              <div className="w-20 h-20 rounded-full bg-primary-container flex items-center justify-center relative">
                <span
                  className="material-symbols-outlined text-primary text-4xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  mark_email_read
                </span>
              </div>
            </div>

            {/* Messaging */}
            <h1 className="text-2xl md:text-5xl text-primary mb-6 text-glow font-semibold">
              Check Your Email
            </h1>

            <p className="leading-relaxed text-lg mb-10 max-w-md">
              If an account can be created using this email address, a message
              containing the next steps has been sent. Please check your inbox
              and follow the instructions provided.
            </p>

            {/* Support */}
            <div className="mt-12 pt-8 border-t border-outline-variant/10 w-full">
              <p className="text-[10px] uppercase tracking-[0.15rem] text-on-surface-variant/60">
                Didn't receive the email? Please check your spam folder or{" "}
                <a
                  className="text-primary font-bold underline underline-offset-4"
                  href={
                    () => resendVerificationMail()
                  }
                >
                  resend email
                </a>.
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default CheckYourEmailPage;
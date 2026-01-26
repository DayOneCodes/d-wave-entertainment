import { useToast } from "../contexts/ToastContext";

export default function LoginView ({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  loading,
  error,
}) 
{
  const { showToast } = useToast();


  return (
    <div className="bg-background-dark font-display text-white overflow-x-hidden">
      <div className="relative min-h-screen flex flex-col items-center justify-center hero-bg p-4 md:p-8">
        <div className="w-full max-w-[480px] flex flex-col gap-6">

          {/* Logo */}
          <div className="flex justify-center mb-2">
            <div className="flex items-center gap-2">
              <div className="bg-primary text-black p-1 rounded-lg">
                <span className="material-symbols-outlined font-bold">waves</span>
              </div>
              <span className="text-2xl font-black tracking-tighter">
                D-WAVE <span className="text-primary">ENT.</span>
              </span>
            </div>
          </div>

          {/* Card */}
          <div className="glass-card rounded-xl p-6 md:p-10 shadow-2xl">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-serif italic">
                Welcome Back
              </h1>
              <p className="text-[#bab59c] text-sm mt-2">
                Sign in to access your exclusive event dashboard.
              </p>
            </div>

            <form onSubmit={onSubmit} className="flex flex-col gap-5">
              <input
                type="email"
                value={email}
                onChange={(e) => onEmailChange(e.target.value)}
                placeholder="email@example.com"
                className="h-14 px-4 rounded-lg bg-[#27251b]/50 border border-[#54503b]"
                required
              />

              <input
                type="password"
                value={password}
                onChange={(e) => onPasswordChange(e.target.value)}
                placeholder="••••••••"
                className="h-14 px-4 rounded-lg bg-[#27251b]/50 border border-[#54503b]"
                required
              />


              <button
                type="submit"
                disabled={loading}
                className="h-14 bg-primary text-white font-bold rounded-lg disabled:opacity-60"
              >
                {loading ? "Signing in..." : "Sign In"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

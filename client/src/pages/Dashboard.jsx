import { useAuth } from "../contexts/AuthContext.jsx";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useModal } from "../hooks/useModal.js";
import QRViewModal from "../components/dashboard-components/QRViewModal.jsx";
import TicketsCard from "../components/dashboard-components/TicketsCard.jsx";
import { useToast } from "../contexts/ToastContext.jsx";

const Dashboard = () => {
  const navigate = useNavigate();
  const {loading, error, useLogout, isAuthenticated, user} = useAuth();
  const [joinedDate, setJoinedDate] = useState("");
  const {showModal, closeModal} = useModal();
  const { showToast } = useToast();

  const [ticketsPlaceHolder, setTicketsPlaceHolder] = useState(0)

  useEffect(() => {
    if (!loading && (error || user?.role !== "user")) {
      navigate("/")
    }

  }, [loading, user, error, navigate])

  useMemo(() => {
    if (user) {
      const date = new Date(user.createdAt);
      const formatted = date.toLocaleDateString("en-US", {
        month: "short",
        year: "numeric"
      })
      setJoinedDate(formatted)
    }
  }, [user])

  if (loading) {
    return (
        <div className="min-h-screen flex flex-col font-sans">
        {/* <!-- BEGIN: MainHeader --> */}
        <header className="sticky top-0 z-50 bg-gist-dark/80 backdrop-blur-md border-b border-gist-gold/20 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
        {/* <!-- Logo Placeholder --> */}
        <div className="h-8 w-32 bg-primary animate-pulse rounded"></div>
        {/* <!-- Nav Placeholder (Desktop) --> */}
        <nav className="hidden md:flex gap-6">
        <div className="h-4 w-16 bg-primary animate-pulse rounded"></div>
        <div className="h-4 w-16 bg-primary animate-pulse rounded"></div>
        <div className="h-4 w-16 bg-primary animate-pulse rounded"></div>
        </nav>
        </div>
        {/* <!-- User Profile Header Placeholder --> */}
        <div className="flex items-center gap-4">
        <div className="h-8 w-8 rounded-full skeleton-base animate-pulse"></div>
        </div>
        </header>
        {/* <!-- END: MainHeader --> */}
        <main className="flex-grow max-w-7xl mx-auto w-full p-6 md:p-8 space-y-12">
        {/* <!-- BEGIN: HeroSection --> */}
        <section className="glass-card rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
        <div className="relative">
        <div className="w-32 h-32 size-10 md:w-36 md:h-36 rounded-full bg-primary animate-pulse-slow border-2 border-gist-gold/10">
        </div>
        </div>
        <div>
        <h1 className="h-8 w-1/3 min-w-[200px] bg-primary animate-pulse rounded-lg mb-1"></h1>
        <p className="h-4 w-1/4 min-w-[150px] bg-primary animate-pulse rounded opacity-60"></p>
        </div>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
        <div className="h-14 w-1/4 min-w-[130px] bg-primary animate-pulse rounded opacity-60"></div>
        <div className="h-14 w-1/4 min-w-[130px] bg-primary animate-pulse rounded"></div>
        </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* <!-- Stats Card 1 --> */}
        <div className="p-6 rounded-xl border border-gist-gold/10 bg-white/5 space-y-4">
        <div className="h-4 w-24 bg-primary animate-pulse rounded opacity-50"></div>
        <div className="h-10 w-12 bg-primary animate-pulse rounded"></div>
        </div>
        {/* <!-- Stats Card 2 --> */}
        <div className="p-6 rounded-xl border border-gist-gold/10 bg-white/5 space-y-4">
        <div className="h-4 w-28 bg-primary animate-pulse rounded opacity-50"></div>
        <div className="h-10 w-20 bg-primary animate-pulse rounded"></div>
        </div>
        </section>
        {/* <!-- END: StatsGrid --> */}
        {/* <!-- BEGIN: ActiveTickets --> */}
        <section className="space-y-6">
        <div className="flex items-center justify-between">
        <div className="h-6 w-40 bg-primary animate-pulse rounded"></div>
        <div className="h-4 w-20 bg-primary animate-pulse rounded"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* <!-- Ticket Skeleton 1 --> */}
        <div className="flex p-4 bg-white/5 border border-gist-gold/10 rounded-lg gap-4">
        <div className="w-24 h-24 flex-shrink-0 bg-primary animate-pulse rounded-md"></div>
        <div className="flex-grow space-y-3 py-1">
        <div className="h-5 w-3/4 bg-primary animate-pulse rounded"></div>
        <div className="h-3 w-1/2 bg-primary animate-pulse rounded opacity-40"></div>
        <div className="h-3 w-1/3 bg-primary animate-pulse rounded"></div>
        </div>
        </div>
        {/* <!-- Ticket Skeleton 2 --> */}
        <div className="flex p-4 bg-white/5 border border-gist-gold/10 rounded-lg gap-4">
        <div className="w-24 h-24 flex-shrink-0 bg-primary animate-pulse rounded-md"></div>
        <div className="flex-grow space-y-3 py-1">
        <div className="h-5 w-2/3 bg-primary animate-pulse rounded"></div>
        <div className="h-3 w-1/2 bg-primary animate-pulse rounded opacity-40"></div>
        <div className="h-3 w-1/4 bg-primary animate-pulse rounded"></div>
        </div>
        </div>
        </div>
        </section>
        {/* <!-- END: ActiveTickets --> */}
        {/* <!-- BEGIN: AccountAndHelp --> */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-12">
        {/* <!-- Settings Column --> */}
        <div className="space-y-6">
        <div className="h-5 w-32 bg-primary animate-pulse rounded"></div>
        <ul className="space-y-4">
        <li className="h-4 w-full bg-primary animate-pulse rounded opacity-60"></li>
        <li className="h-4 w-full bg-primary animate-pulse rounded opacity-60"></li>
        <li className="h-4 w-3/4 bg-primary animate-pulse rounded opacity-60"></li>
        </ul>
        </div>
        {/* <!-- Help Column --> */}
        <div className="space-y-6">
        <div className="h-5 w-24 bg-primary animate-pulse rounded"></div>
        <ul className="space-y-4">
        <li className="h-4 w-full bg-primary animate-pulse rounded opacity-60"></li>
        <li className="h-4 w-5/6 bg-primary animate-pulse rounded opacity-60"></li>
        <li className="h-4 w-full bg-primary animate-pulse rounded opacity-60"></li>
        </ul>
        </div>
        {/* <!-- Newsletter/Footer Info --> */}
        <div className="space-y-6">
        <div className="h-5 w-40 bg-primary animate-pulse rounded"></div>
        <div className="p-6 bg-gist-gold/5 rounded-xl border border-gist-gold/10">
        <div className="h-4 w-full bg-primary animate-pulse rounded mb-4"></div>
        <div className="h-10 w-full bg-primary animate-pulse rounded-md"></div>
        </div>
        </div>
        </section>
        {/* <!-- END: AccountAndHelp --> */}
        </main>
        {/* <!-- BEGIN: Footer --> */}
        <footer className="p-8 text-center border-t border-white/5 mt-12">
        <div className="h-4 w-48 mx-auto bg-primary animate-pulse rounded opacity-30"></div>
        </footer>
        {/* <!-- END: Footer --> */}
        </div>
      )
  }

  if (error || user?.role !== "user") {
    return <p>UNAUTHORISED</p>
  }

  if (!error && user?.role === "user") {
    return (
      <div className="bg-white font-display text-slate-900 min-h-screen">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <header className="flex items-center justify-between border-b border-primary/10 px-6 py-4 lg:px-20 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-4 text-primary cursor-pointer" onClick={
        () => navigate("/")
      }>
      <span className="material-symbols-outlined">arrow_back</span>
      <h2 className="text-xl font-black leading-tight tracking-tighter uppercase">D-WAVE ENT.</h2>
      </div>
      <p className="flex justify-center items-center">
        Logout 
      <span className="material-symbols-outlined cursor-pointer" onClick={
        () => useLogout()
      }> logout</span>
      </p>
      </header>
      <main className="flex-1 max-w-7xl mx-auto w-full p-6 lg:p-12 space-y-10">
      <section className="glass-card rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
      <div className="relative">
      <div className="size-32 rounded-full border-4 border-primary p-1">
      <img className="w-full h-full object-cover rounded-full" src={user.profilePictureUrl? user.profilePictureUrl: "https://res.cloudinary.com/dslzm3lo6/image/upload/v1774265712/user_1_cwoklj.png"}/>
      </div>
      </div>
      <div>
      <h1 className="text-3xl font-bold tracking-tight mb-1">{user.name}</h1>
      <p className="text-slate-500 text-sm mt-2">Member since {joinedDate}</p>
      </div>
      </div>
      <div className="flex gap-3 w-full md:w-auto">
      <button className="flex-1 md:flex-none px-6 py-3 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 font-bold text-sm transition-all uppercase tracking-widest bg-background-light" onClick={
        () => showToast("Contact support: support@dwaveentertainment.co.uk", "error")
      }>Edit Profile</button>
      <button className="flex-1 md:flex-none px-6 py-3 rounded-lg bg-primary text-white hover:brightness-110 font-bold text-sm transition-all uppercase tracking-widest" onClick={
       () => navigate("/events")
      }>VIEW EVENTS</button>
      </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="glass-card rounded-2xl p-6 hover:bg-primary/10 transition-all border border-primary/30 cursor-pointer bg-background-light">
      <div className="flex justify-between items-start mb-4">
      <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Notifications</span>
      <span className="material-symbols-outlined text-primary">notifications</span>
      </div>
      <p className="text-4xl font-black text-primary">0</p>
      <p className="text-slate-500 text-xs mt-2 font-medium">Stay up to date</p>
      </div>
      <div className="glass-card rounded-2xl p-6 border border-primary/30 cursor-pointer hover:bg-primary/10 transition-all bg-background-light">
      <div className="flex justify-between items-start mb-4">
      <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Upcoming Tickets</span>
      <span className="material-symbols-outlined text-primary">event_upcoming</span>
      </div>
      <p className="text-4xl font-black text-primary">{user.ticketsPurchased ? user.ticketsPurchased.length : 0o0}</p>
      <p className="text-primary text-xs mt-2 font-medium">{user.tickets ? "" : "You have no upcoming tickets yet"}</p>
      </div>
      </section>
      <section className="space-y-6">
      <div className="flex justify-between items-end">
      <h2 className="text-2xl font-bold tracking-tight">My Tickets</h2>
      <a className="text-primary text-sm font-bold uppercase tracking-widest hover:underline" onClick={
        () => showToast("Contact support: support@dwaveentertainment.co.uk", "error")
      }>History</a>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {
          !ticketsPlaceHolder ?
          <p className="text-slate-600">Tickets you've purchased directly from dwaveentertainment.co.uk will appear here</p> :
          <>
        <TicketsCard 
          event={{
            imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSZEG_G-fX8YU-p-pfMvhR4GYOPyRHdhmKYZ8AzmcFVqB4Fa7j-3ZAydek4v3lEQj7fbo2T77Tonq43LMZgvrTXRRESdslO9GgFtXHw7zrzIqF91OVVfjeqNLl5j-MavXESJYIMYDHS8rWKRIUWAAHCaKiVxSjMTxmz0RR04j2jEx37x7q_NnFU3eJpa_ZrlA5sQA0C2Ti6GOiESjKi2BmShfcEycOCtCGXuu99iVizL8BRT-eDvOAO5HOKg5AlKLY7c5DZMNc0VA",
            title: "Neon Pulse: Phase 4", 
            location: "The foundry, downtown"
          }} 
          category={"VIP"}
          onViewQR={() => showModal(<QRViewModal onClose={closeModal}/>)}/>

          <TicketsCard 
          event={{
            imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhJb9AM1YTjWlLWVClmat-8b3LLh7K60BlmMzYNfkppGAG8GTNopqsEhHPgxWoLaIGoDAcO812YrE5TX9gkt77_berkGdut1_TIGDt1_Es2sMk7xgIUb8kA_sfwDwNsfjzIIGXHjvBJ2slDc4d8RznUqzacniT7bheo2UDPPOwCJ1cIOGuKhy-JGUhqtkXVbm6kQw8r1z9tJmCTu6IQLr72wZql1Z3NZK-8_xMDM--8dzf1Ee2H_HapTH-Jdy4Yec3-bgAfC7Y6Gs",
            title: "Gold Standard Festival", 
            location: "Echo Park Stadium"
          }} 
          category={"GEN"}
          onViewQR={() => showModal(<QRViewModal onClose={closeModal}/>)}/>
          </>
        }
      </div>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-4">
      <h2 className="text-xl font-bold tracking-tight">Account Settings</h2>
      <div className="rounded-xl overflow-hidden divide-y divide-primary/10">
      <a className="flex items-center justify-between p-4 hover:bg-primary/5 transition-colors"  
      onClick={
        () => showToast("Contact support: support@dwaveentertainment.co.uk", "error")
      }>
      <div className="flex items-center gap-4">
      <div class="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
      <span class="material-symbols-outlined">security</span>
      </div>
      <div>
      <p class="font-semibold text-sm">Security &amp; Privacy</p>
      <p class="text-slate-500 text-xs">Password, 2FA and data control</p>
      </div>
      </div>
      <span className="material-symbols-outlined text-slate-600">chevron_right</span>
      </a>
      <a className="flex items-center justify-between p-4 hover:bg-primary/5 transition-colors" onClick={
        () => showToast("Contact support: support@dwaveentertainment.co.uk", "error")
      }>
      <div className="flex items-center gap-4">
      <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
      <span className="material-symbols-outlined">notifications_active</span>
      </div>
      <div>
      <p className="font-semibold text-sm">Notification Preferences</p>
      <p className="text-slate-500 text-xs">SMS, Email and Push alerts</p>
      </div>
      </div>
      <span className="material-symbols-outlined text-slate-600">chevron_right</span>
      </a>
      </div>
      </div>
      <div className="space-y-4">
      <h2 className="text-xl font-bold tracking-tight">Need Help?</h2>
      <div className="glass-card rounded-xl p-6 border">
      <h3 className="font-bold mb-2">Concierge Support</h3>
      <p className="text-slate-400 text-sm mb-4">You have 24/7 access to our support team for ticketing and venue assistance.</p>
      <button className="w-full py-3 rounded-lg border border-primary text-primary uppercase text-xs tracking-widest hover:bg-primary/10 transition-all" onClick={
        () => showToast("Contact support: support@dwaveentertainment.co.uk", "error")
      }>
                                  Chat with Support
                              </button>
      </div>
      </div>
      </section>
      </main>
      <footer className="border-t border-primary/10 py-8 px-6 lg:px-20 bg-primary text-center mt-12">
      <div className="flex justify-center items-center gap-6">
      <p className="text-gray-500 text-xs">© 2024 D-Wave Entertainment. All rights reserved.</p>
      </div>
      </footer>
      </div>
      </div>
    )
  }

}

export default Dashboard
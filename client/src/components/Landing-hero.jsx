import { useAuth } from "../contexts/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

function LandingHero ({onScrollToEvents, onScrollToServices}) {
  const navigate = useNavigate();
  const {loading, error, user } = useAuth();

  return (
    <>
      <div className="relative pt-20 min-h-[90vh] flex items-center justify-center overflow-hidden">

      <div className={`absolute inset-0 z-0 bg-primary bg-[url("https://res.cloudinary.com/dslzm3lo6/image/upload/v1774264291/image_xpufb6.jpg")] bg-cover bg-center bg-no-repeat bg-fixed`}>
      </div>
      <div className="relative z-10 container mx-auto px-4 min-h-[95vh] md:px-10 flex flex-col items-center  text-center gap-8 max-w-4xl">
          <span className="text-white text-sm font-bold tracking-widest uppercase animate-pulse">Coventry &amp; West Midlands</span>
 <h1 className="text-4xl md:text-5xl lg:text-[3.87rem] font-black stroke-primary text-white leading-[1] tracking-tighter text-left md:text-center mb-8">
                    D-WAVE ENTERTAINMENT: <br/><span className="text-gradient">CULTURALLY RELEVANT EXPERIENCES</span>
</h1>

          <p className="text-white text-xl font-semibold max-w-2xl leading-relaxed ">
          Building community, culture, and opportunity through  entertainment, football and structured experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-6 items-center lg:mb-6">

              <button className="bg-white hover:bg-background-light/80 hover: border hover:border-white w-full h-14 text-primary text-base font-bold py-4 px-8 rounded-lg shadow-[0_0_20px_rgba(40,24,40,0.4)] hover:shadow-[0_0_30px_[0_0_30px_rgba(40,24,40,0.6)] transition-all flex items-center justify-center gap-2" onClick={() => {
                  if (user) {
                   user.role === "user" ?navigate("/dashboard") :
                   navigate("/admin")
                  } else {
                    navigate("/auth")
                  }
                }
              }>
                 <span className="material-symbols-outlined">
                  {
                    !user ?
                    "play_arrow" :
                    user.role === "user" ?
                    "space_dashboard" :
                    "admin_panel_settings"
                  }</span>
                  {
                    !user ?
                    "Get Started" :
                    user.role === "user" ?
                    "Dashboard" :
                    "Admin"
                  }
              </button>

              <button class="w-full bg-transparent border-2 border-white text-white font-bold text-base h-14 py-4 px-8 rounded-lg flex items-center justify-center gap-3 hover:bg-white/10 transition-colors backdrop-blur-sm" onClick={
                () => navigate("/events")
              }>
                 <span className="material-symbols-outlined">event</span>
                Upcoming Events
              </button>

              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border w-full border-white/20 text-base font-bold h-14  py-4 px-8 rounded-lg transition-all flex items-center justify-center gap-2" onClick={
                () => onScrollToServices()
              }>
                  <span className="material-symbols-outlined">mic_external_on</span>
                  Artist Services
              </button>

          </div>
      </div>
      </div>
    </>
  )
}

export default LandingHero;
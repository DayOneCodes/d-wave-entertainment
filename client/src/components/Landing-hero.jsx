import bgLandingPage from "../assets/shot.png";

function LandingHero ({onScrollToEvents, onScrollToServices}) {
  return (
    <>
      <div className="relative pt-20 min-h-[90vh] flex items-center justify-center overflow-hidden">

      <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed" data-alt="Crowd at a concert with purple lighting and confetti" style={{
          backgroundImage: `linear-gradient(
          to bottom,
          rgba(28, 16, 34, 0.4) 0%,
          rgba(28, 16, 34, 0.9) 90%,
          rgba(28, 16, 34, 1) 100%
          ), url("${bgLandingPage}")
          `,
          }}>
      </div>
      <div className="relative z-10 container mx-auto px-4 md:px-10 flex flex-col items-center text-center gap-8 max-w-4xl">
          <span className="text-white text-sm font-bold tracking-widest uppercase animate-pulse">-D WAVE ENTERTAINMENT-</span>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter drop-shadow-2xl">
          UNFORGETTABLE<br/>
            <span className="text-transparent bg-clip-text bg-white ">NIGHTS.</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
          We curate world-class events and manage top-tier talent. Join the movement where music meets lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-6">
              <button className="bg-white hover:bg-background-light/80 hover: border hover:border-white  text-primary text-base font-bold h-14 px-8 rounded-lg shadow-[0_0_20px_rgba(40,24,40,0.4)] hover:shadow-[0_0_30px_[0_0_30px_rgba(40,24,40,0.6)] transition-all flex items-center justify-center gap-2" onClick={() => onScrollToEvents()
              }>
                 <span className="material-symbols-outlined">confirmation_number</span>
                  View Events
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 text-base font-bold h-14 px-8 rounded-lg transition-all flex items-center justify-center gap-2" onClick={
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
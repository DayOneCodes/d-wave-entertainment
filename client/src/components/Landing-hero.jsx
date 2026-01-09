import bgLandingPage from "../assets/club-ii.jpg";

function LandingHero ({onScrollToEvents, onScrollToServices}) {
  return (
    <>
      <div className="relative pt-20 min-h-[90vh] flex items-center justify-center overflow-hidden" data-header-theme="light">

      <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed" data-alt="Crowd at a concert with purple lighting and confetti" style={{
          backgroundImage: `url("${bgLandingPage}")
          `,
          }}>
      </div>
      <div className="relative z-10 container mx-auto px-4 md:px-10 flex flex-col items-center  text-center gap-8 max-w-4xl">
          <span className="text-white text-sm font-bold tracking-widest uppercase animate-pulse">Coventry &amp; West Midlands</span>
 <h1 className="text-4xl md:text-5xl lg:text-[3.87rem] font-black text-white leading-[1] tracking-tighter text-left md:text-center mb-8">
                    D-WAVE ENTERTAINMENT: <br/><span className="text-gradient">CULTURALLY RELEVANT EXPERIENCES</span>
</h1>

          <p className="text-white text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
          Structured nightlife, sports, top-tier talent management and community engagement tailored for the modern West Midlands landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-6 lg:mb-6">
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
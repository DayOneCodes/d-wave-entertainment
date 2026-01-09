import { useChronologicalEvents } from "../contexts/EventChronologicalContext";
import backgroundImage from "../assets/club-ii.jpg"
import { useNavigate } from "react-router-dom";
import { useEvents } from "../contexts/EventContext";

function FullCalendarHero() {
  const {eventsChronological} = useChronologicalEvents();
  const navigate = useNavigate();

  return (
    <>
<div className="w-full relative mt-12 md:mt-0">
<div className="relative h-[500px] w-full bg-primary bg-cover bg-center bg-no-repeat flex items-end justify-center pb-12" data-alt="Crowd dancing at a neon-lit rave with lasers" style={{backgroundImage: `url(${backgroundImage})`}}>
<div className="layout-content-container max-w-[1200px] w-full px-4 sm:px-10 flex flex-col md:flex-row items-end md:items-center justify-between gap-8">
<div className="flex flex-col gap-4 max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 border border-white/40 w-fit backdrop-blur-sm">
<span className="size-2 rounded-full bg-white animate-pulse"></span>
<span className="text-xs font-bold text-white uppercase tracking-wider">UP NEXT</span>
</div>
<h1 className="text-white text-4xl sm:text-5xl md:text-6xl uppercase font-black leading-tight tracking-[-0.033em] neon-text-shadow">
                                {
                                  //UPDATE: use Date to query next event as the next event may not always be the first on the array.
                                  !eventsChronological ? 
                                  (
                                    <p>Loading...</p>
                                  ) :
                                  (
                                <p>{eventsChronological[0].title}</p>
                                )
                                }
                            </h1>
<p className="text-gray-200 text-base sm:text-lg font-normal max-w-lg">
                                Join us for an unforgettable night of sound and light featuring birthday celebration from SKY, spinning deep house and techno until sunrise.
                            </p>
<div className="flex gap-4 mt-2">
<button className="flex items-center justify-center rounded-lg h-12 px-6 bg-white hover:white/90 text-primary text-base font-bold shadow-[0_0_30px_rgba(40,24,40,0.6)] transition-all transform hover:scale-105" onClick={
  () => {navigate(`/checkout/${eventsChronological[0]._id}`, {
    state: {sourcePage: "/events"}
  })}
}>
                                    Get Tickets
                                </button>
<button className="flex items-center justify-center rounded-lg h-12 px-6 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white text-base font-bold transition-all" onClick={
  () => {navigate(`/event-info/${eventsChronological[0]._id}`)}
}>
                                    More Info
                                </button>
</div>
</div>
{/* <div className="glass-panel p-6 rounded-xl border border-white/20 shadow-2xl min-w-[300px] hidden lg:block">
<p className="text-white text-xs font-bold uppercase tracking-widest mb-4 text-center">Event Starts In</p>
<div className="flex gap-3 justify-center">
<div className="flex flex-col items-center gap-1">
<div className="flex size-14 items-center justify-center rounded-lg bg-surface-dark border border-border-dark">
<p className="text-white text-2xl font-bold font-mono">04</p>
</div>
<p className="text-white text-[10px] uppercase">Days</p>
</div>
<div className="flex flex-col items-center gap-1">
<div className="flex size-14 items-center justify-center rounded-lg bg-surface-dark border border-border-dark">
<p className="text-white text-2xl font-bold font-mono">12</p>
</div>
<p className="text-white text-[10px] uppercase">Hours</p>
</div>
<div className="flex flex-col items-center gap-1">
<div className="flex size-14 items-center justify-center rounded-lg bg-surface-dark border border-border-dark">
<p className="text-white text-2xl font-bold font-mono">30</p>
</div>
<p className="text-white text-[10px] uppercase">Mins</p>
</div>
</div>
</div> */}
</div>
</div>
</div>
    </>
  )
}

export default FullCalendarHero;
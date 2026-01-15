import { useChronologicalEvents } from "../contexts/EventChronologicalContext";
import backgroundImage from "../assets/club-ii.jpg"
import { useNavigate } from "react-router-dom";
import { useEvents } from "../contexts/EventContext";
import setImage from "../utils/eventImage";
import { useToast } from "../contexts/ToastContext";

function FullCalendarHero() {
  const {eventsChronological} = useChronologicalEvents();
  const navigate = useNavigate();
  const {events, futureEvents, pastEvents, todaysEvents, loading, error} = useEvents();
  const { showToast } = useToast();


  const isObject = (value) => {
    return (
      value !== null && typeof value === "object" && !Array.isArray(value) 
    )
  }

  const handleSpotLightEvent = () => {
    if (loading) return "Loading...";
    if (error) return "Error loading event, refresh";
    if (todaysEvents.length > 0) return todaysEvents[0];
    if (futureEvents.length === 0) return pastEvents[0];
    return futureEvents[0];
  }

  const handleTicketStatus = () => {
    if (loading) return "Loading...";
    if (error) return "Error loading event, refresh"; 
    if (pastEvents.includes(handleSpotLightEvent())) {
      return {
        message: "Just Concluded", 
        ticketsAvailable: false,
        status: "SOLD OUT"}
    } 
    else if (todaysEvents.includes(handleSpotLightEvent())){
      return {
        message: "Happening Today", 
        ticketsAvailable: false,
        status: "SOLD OUT"
    }
  }

  return {
        message: "Up Next", 
        ticketsAvailable: true,
        status: "Get Tickets"
  }
};

const handleGetTicket = () => {
  if (loading) showToast("Loading...", "success");
  if (error) showToast("Error loading event, please refresh", "error"); 
  if (handleTicketStatus().ticketsAvailable) {
    handleSpotLightEvent().ticketUrl ?
      window.open(`https://${handleSpotLightEvent().ticketUrl}`, "_blank") :
      navigate(`/checkout/${handleSpotLightEvent()._id}`, {
        state: {sourcePage: "/events"}
      })
  }
  else {
    showToast(`Sorry, tickets for ${handleSpotLightEvent().title} are currently sold out`, "error")
  }
}

const handlebackgroundImage = () => {
  if (loading) return "";
  if (error) return "";
  if (isObject(handleSpotLightEvent())){
    return setImage(handleSpotLightEvent())
  }
}

  return (
    <>
<div className="w-full relative mt-3 md:mt-0">
<div className={`before:content-[''] before:absolute before:inset-0 before:blur-xl before:bg-[url(${
  handlebackgroundImage()
  })] before:bg-no-repeat before:bg-center before:bg-cover before:z-0 relative h-[500px] w-full bg-primary bg-cover bg-center bg-no-repeat flex items-end justify-center pb-12`} data-alt="Crowd dancing at a neon-lit rave with lasers">
<div className="layout-content-container max-w-[1200px] w-full px-4 sm:px-10 flex flex-col md:flex-row items-end md:items-center justify-between gap-8">
<div className="flex flex-col gap-4 max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 border border-white/40 w-fit backdrop-blur-sm">
<span className="size-2 rounded-full bg-white animate-pulse"></span>
<span className="text-xs font-bold text-white uppercase tracking-wider">{handleTicketStatus().message}</span>
</div>
<h1 className="text-white text-4xl sm:text-5xl md:text-6xl uppercase font-black leading-tight tracking-[-0.033em] neon-text-shadow z-10">
                                {
                                  !isObject(
                                 handleSpotLightEvent()) ? handleSpotLightEvent() : handleSpotLightEvent().title
                                }
                            </h1>
<p className="text-gray-200 text-base sm:text-lg font-normal max-w-lg z-10">
                               {handleSpotLightEvent().description}
                            </p>
<div className="flex gap-4 mt-2">
<button className="flex items-center justify-center rounded-lg h-12 px-6 bg-white hover:white/90 text-primary text-base font-bold shadow-[0_0_30px_rgba(40,24,40,0.6)] transition-all transform hover:scale-105" onClick={
  handleGetTicket
}>
{handleTicketStatus().status}
                                </button>
<button className="flex items-center justify-center rounded-lg h-12 px-6 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white text-base font-bold transition-all" onClick={
  () => {navigate(`/event-info/${handleSpotLightEvent()[0]._id}`)}
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
import { useNavigate } from "react-router-dom";
import { useEvents } from "../contexts/EventContext";
import setImage from "../utils/eventImage";
import { useToast } from "../contexts/ToastContext";

function FullCalendarHero() {
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

const truncateDescription = (desc = "", maxChar = 100) => {
  if (!desc) {
    return {
      truncated: false,
      text: "",
    };
  }

  if (desc.length <= maxChar) {
    return {
      truncated: false, 
      text: desc
    };
  }

  const truncatedText = desc.slice(0, maxChar + 1);
  const lastSpace = truncatedText.lastIndexOf(" ");

  return {
    truncated: true,
    text: truncatedText.slice(0, lastSpace),
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
<h1 className="text-white stroke-primary text-4xl sm:text-5xl md:text-6xl uppercase font-black leading-tight tracking-[-0.033em] neon-text-shadow z-10">
                                {
                                  !isObject(
                                 handleSpotLightEvent()) ? handleSpotLightEvent() : handleSpotLightEvent().title
                                }
                            </h1>
<p className="text-white text-xl font-semibold  sm:text-lg  max-w-lg z-10">
                               {
                                truncateDescription(
                                  handleSpotLightEvent().description
                                ).text
                               }
                               {
                                 truncateDescription(
                                  handleSpotLightEvent().description
                                ).truncated ?
                                <a href={`/event-info/${handleSpotLightEvent()._id}`} className=" ml-2 cursor-pointer ">...<span className="underline">read more</span></a> :
                                ""
                               }
                            </p>
<div className="flex gap-4 mt-2">
<button className="flex items-center justify-center rounded-lg h-12 px-6 bg-white hover:white/90 text-primary text-base font-bold shadow-[0_0_30px_rgba(40,24,40,0.6)] transition-all transform hover:scale-105" onClick={
  handleGetTicket
}>
{handleTicketStatus().status}
                                </button>
<button className="flex items-center justify-center rounded-lg h-12 px-6 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white text-base font-bold transition-all" onClick={
  error ? 
  "" :
  loading ? 
  "" :
  () => {navigate(`/event-info/${handleSpotLightEvent()._id}`)}
}>
  {
    error ?
    "" :
    loading ?
    "..." :
    "More Info"
  }
  </button>
</div>
</div>
</div>
</div>
</div>
    </>
  )
}

export default FullCalendarHero;
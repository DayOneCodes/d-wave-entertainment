import { useChronologicalEvents } from "../contexts/EventChronologicalContext.jsx";
import { useGetTicket } from "../contexts/GetTicketContext.jsx";
import { useNavigate } from "react-router-dom";

function Eventcard ({ event, month, date, location, category, title, imageUrl, ticketUrl, ticketStatus}) {

  const { setGetTicket } = useGetTicket();
  const navigate = useNavigate();

  const handleGetTicket = () => {
    setGetTicket(event);
    navigate(`/checkout/${event._id}`, {
        state: {sourcePage: "/"}
    })
  }

  const handleTicketStatus = () => {
    if (!ticketStatus) {
        alert("SOLD OUT")
    }
    else {
        event.ticketUrl ? 
            () => {window.open(`https://${ticketUrl}`, '_blank')} :
                handleGetTicket();
    }
 }
  return (
      <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <div className="relative h-64 overflow-hidden">
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-center p-2 rounded-lg z-10 shadow-lg min-w-[60px]">
                  <span className="block text-xs font-bold uppercase text-slate-500">{month}</span>
                  <span className="block text-2xl font-black text-slate-900">{date}</span>
              </div>
              <div className="w-full h-full bg-primary bg-cover bg-center group-hover:scale-110 transition-transform duration-700" data-alt="Neon lights at a club party with dj" style={{
              backgroundImage: `url("${imageUrl}")`
              }}>
              </div>
              {/* <div className="absolute inset-0 opacity-60"></div> */}
              </div>
          <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                  <span className="text-primary text-xs font-bold uppercase tracking-wider bg-primary/10 px-2 py-1 rounded">{category}</span>
                  <span className="text-slate-500 text-sm flex items-center gap-1">
                  <span className="material-symbols-outlined text-[10px] ml-[20px]">location_on</span>{location}
                  </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">{title}</h3>
              <button className="w-full py-3 rounded-lg border border-slate-200 text-slate-900 font-bold md:hover:bg-primary md:hover:text-white md:hover:border-primary transition-colors flex justify-center items-center gap-2" onClick={handleTicketStatus}>
                  {ticketStatus ? "Get Tickets" : "SOLD OUT"}
              </button>
          </div>
      </div>
  )
}

export default Eventcard;
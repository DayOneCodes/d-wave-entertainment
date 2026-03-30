import { useNavigate } from "react-router-dom";
import TicketListItem from "./TicketListItem.jsx";
import { useToast } from "../../contexts/ToastContext.jsx";

function EventDetailsMainContent ({event, loading, error, pastEvents}) {
  const navigate = useNavigate();
  const {showToast} = useToast();

  return (
    <section className="px-6 lg:px-40 py-20 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
  {/* Main Column */}
  <div className="lg:col-span-8 flex flex-col gap-16">

    {/* About The Event */}
    <div>
      <h2 className="serif-text text-primary text-3xl font-bold mb-6 flex items-center gap-4">
        <span className="w-8 h-[1px] bg-primary"></span>
        About the Event
      </h2>

      <div className="flex flex-col gap-6 text-justify text-black leading-relaxed text-lg font-light">
        <p>
          {event.description}
        </p>
      </div>
    </div>
  </div>

  {/* Sidebar */}

<div className="lg:col-span-4">
<div className="sticky top-32 flex flex-col gap-6">
<div className="glass p-8 rounded-2xl border border-primary/20">
<div className="flex justify-between items-center mb-8">
<h3 className="serif-text text-2xl font-bold text-primary">Tickets</h3>
<span className="flex items-center gap-2 text-accent-blue text-[10px] font-bold tracking-widest bg-accent-blue/10 px-2 py-1 rounded">
<span className="size-1.5 rounded-full bg-text-primary animate-pulse"></span> 
{pastEvents.includes(event) ?
"SOLD OUT" :
"SELLING FAST"}
                            </span>
</div>
<div className="flex flex-col gap-4 mb-8">
  {
    !event.tickets ?
    (event.ticketUrl) :
    event.tickets.map((t,i) => (
      <TicketListItem 
      key={i}
      title={t.type}
      description={t.description}
      soldOut={!t.quantityAvailable}
      price={t.price}/>
    ))  
  }
</div>
<div className="flex flex-col gap-3">
<button className="w-full py-4 bg-primary text-white font-black tracking-widest text-sm rounded-lg hover:shadow-[0_0_20px_rgba(244,192,37,0.3)] transition-all" onClick={
  pastEvents.includes(event) ? 
  () => showToast(`Sorry, tickets for ${event.title} are currently sold out`, "error") :
  () => {
  navigate(`/checkout/${event._id}`)
  }
}>
                                GET TICKETS
                            </button>
<p className="text-center text-[10px] text-white/30 uppercase tracking-[0.2em] mt-2">Prices subject to increase</p>
</div>
</div>

<div className="flex flex-col gap-4 px-2">
<div className="flex items-center gap-4 text-primary transition-colors cursor-pointer group">
</div>
</div>

<div className="p-6 bg-white/5 rounded-xl">
<h4 className="text-xs font-black tracking-widest mb-3 opacity-40">IMPORTANT INFO</h4>
<ul className="flex flex-col gap-2 text-[11px] text-primary leading-relaxed font-medium">
<li>• 21+</li>
<li>• All ticket sales are final</li>
</ul>
</div>
</div>
</div>

</section>

  )
}

export default EventDetailsMainContent;
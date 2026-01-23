import setImage from "../../utils/eventImage";

function EventDetailsHero ({event}) {
  return (
    <section className="relative w-full h-[72vh] flex flex-col justify-end overflow-hidden">
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-primary z-10"></div>
<div className="absolute inset-0 hero-gradient z-20"></div>
<div className="w-full h-full bg-cover bg-center transform scale-105" data-alt="Cinematic luxury lounge atmosphere with golden lighting" style={{backgroundImage: `url(${setImage(event)})`}}></div>
</div>
<div className="relative z-30 px-6 lg:px-40 pb-20 max-w-[1400px] mx-auto w-full">
<div className="flex flex-col gap-6 max-w-3xl">
<div className="flex items-center gap-3">
  {/* Update idea: Allow stating exclusive events */}
{/* <span className="px-3 py-1 bg-accent-blue/20 text-accent-blue border border-accent-blue/30 text-[10px] font-bold tracking-[0.2em] rounded">EXCLUSIVE ACCESS</span> */}
<span className="text-white/80 text-sm font-bold serif-text">{event.month} {event.day}, {event.year}</span>
</div>
<h1 className="serif-text text-white text-5xl md:text-7xl font-black leading-tight tracking-tight">
                        {event.title}
</h1>
<div className="flex items-center gap-8 mt-4">
<div className="flex flex-col">
<span className="text-white/40 text-[10px] font-bold tracking-widest">VENUE</span>
<span className="text-white font-medium">{event.location}</span>
</div>
<div className="flex flex-col">
<span className="text-white/40 text-[10px] font-bold tracking-widest">DOORS</span>
<span className="text-white font-medium">10:00 PM - 04:00 AM</span>
</div>
</div>
</div>
</div>
</section>

  )
}

export default EventDetailsHero;
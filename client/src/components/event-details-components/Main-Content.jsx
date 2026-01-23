import { useNavigate } from "react-router-dom";

function EventDetailsMainContent ({event}) {
  const navigate = useNavigate();

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

      <div className="flex flex-col gap-6 text-black leading-loose text-lg font-light">
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
<span className="size-1.5 rounded-full bg-text-primary animate-pulse"></span> SELLING FAST
                            </span>
</div>
<div className="flex flex-col gap-4 mb-8">
<div className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/5 opacity-50">
<div className="flex flex-col">
<span className="text-sm font-bold tracking-wide">VIP OBSIDIAN</span>
<span className="text-xs text-white/40">Private table &amp; bottle service</span>
</div>
<span className="text-xs font-black text-red-400">SOLD OUT</span>
</div>
<div className="flex items-center justify-between p-4 rounded-xl border-2 hover:border-primary/30 active:border-primary/30 active:bg-primary/5 hover:bg-primary/5">
<div className="flex flex-col">
<span className="text-sm font-bold tracking-wide">EARLY BIRD</span>
<span className="text-xs text-primary/60">Limited availability</span>
</div>
<span className="text-lg font-black text-primary">$85</span>
</div>
<div className="flex items-center justify-between p-4 rounded-xl active:border-primary/30 hover:border-primary/30 border-2 active:bg-primary/5 hover:bg-primary/5">
<div className="flex flex-col">
<span className="text-sm font-bold tracking-wide">GENERAL ENTRY</span>
<span className="text-xs text-primary/60">Standard access</span>
</div>
<span className="text-lg font-black text-primary">$120</span>
</div>
</div>
<div className="flex flex-col gap-3">
<button className="w-full py-4 bg-primary text-white font-black tracking-widest text-sm rounded-lg hover:shadow-[0_0_20px_rgba(244,192,37,0.3)] transition-all" onClick={() => {
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
<div className="size-10 rounded-full flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-all">
<span className="material-symbols-outlined text-xl">share</span>
</div>
{/* Add update: Copy Event Link */}
{/* <span className="text-xs font-bold tracking-widest">SHARE EVENT</span> */}
</div>
{/* update Idea: Allow users add event to their calendar */}
{/* <div className="flex items-center gap-4 text-primarytransition-colors cursor-pointer group">
<div className="size-10 rounded-full flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-all">
<span className="material-symbols-outlined text-xl">calendar_add_on</span>
</div>
<span className="text-xs font-bold tracking-widest">ADD TO CALENDAR</span>
</div> */}
</div>

<div className="p-6 bg-white/5 rounded-xl">
<h4 class="text-xs font-black tracking-widest mb-3 opacity-40">IMPORTANT INFO</h4>
<ul className="flex flex-col gap-2 text-[11px] text-primary leading-relaxed font-medium">
<li>• 21+ Valid ID Required</li>
<li>• All ticket sales are final</li>
</ul>
</div>
</div>
</div>

</section>

  )
}

export default EventDetailsMainContent;
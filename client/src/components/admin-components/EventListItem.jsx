import setImage from "../../utils/eventImage";

export default function EventListItem ({ event, future, today }) {
  const eventDate = `${(event.month).toUpperCase().slice(0,3)} ${event.day}`;
  const eventImage = setImage(event);

  const handleEventStatus = () => {
    if (today) return "LIVE";
    if (future) return "UPCOMING";
    return "COMPLETED";
  }

  return (
    <div className="group relative flex flex-col md:flex-row items-stretch justify-between gap-6 rounded-xl bg-white dark:bg-surface-dark p-4 border border-slate-200 dark:border-border-dark hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md">

    <div className="relative w-full md:w-48 aspect-video md:aspect-square lg:aspect-video overflow-hidden rounded-lg bg-slate-200 dark:bg-border-dark flex-shrink-0">
    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Vibrant neon stage lighting at night" style={{backgroundImage: `url(${eventImage})`}}></div>
    <div className="absolute top-2 left-2 px-2 py-1 rounded bg-black/60 backdrop-blur-md border border-white/20">
    <span className="text-[10px] font-bold text-white flex items-center gap-1">
    <span className="size-1.5 rounded-full bg-white animate-pulse"></span> {handleEventStatus()}
                                    </span>
    </div>
    </div>

    <div className="flex flex-1 flex-col justify-between py-1">
    <div>
    <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">{event.name}</h3>
    <div className="flex flex-wrap items-center gap-4 mt-2 text-slate-500 text-sm font-medium">
    <div className="flex items-center gap-1.5">
    <span className="material-symbols-outlined text-[18px] text-primary">calendar_today</span>
    <span>{eventDate}</span>
    </div>
    <div className="flex items-center gap-1.5">
    <span className="material-symbols-outlined text-[18px] text-primary">location_on</span>
    <span>{event.location}</span>
    </div>
    </div>
    </div>
    <div className="mt-4 md:mt-0">
    <div className="flex items-center justify-between mb-2">
    <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-tighter">Ticket Sales Velocity</span>
    <span className="text-xs font-bold text-primary">1,240 / 2,000 sold</span>
    </div>
    <div className="h-1.5 w-full bg-slate-100 dark:bg-border-dark rounded-full overflow-hidden">
    <div className="h-full bg-primary rounded-full shadow-[0_0_8px_rgba(242,208,13,0.4)]" style={{width: "62%"}}></div>
    </div>
    </div>
    </div>
    <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-4 md:min-w-[160px] md:border-l border-slate-100 dark:border-border-dark md:pl-6">
    <button className="w-full md:w-auto flex items-center justify-center gap-2 px-4 py-2 border-2 border-primary text-primary text-sm font-bold rounded-lg hover:bg-primary hover:text-background-dark transition-all">
    <span className="material-symbols-outlined text-[20px]">edit</span>
                                    Edit
                                </button>
    <button className="w-full md:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-red-700 text-white border-2 border-primary text-sm font-bold rounded-lg hover:bg-primary hover:text-background-dark transition-all">
    <span className="material-symbols-outlined text-[20px]">delete</span>
                                    Delete
    </button>
    {/* <a className="flex items-center gap-1.5 text-slate-500 dark:text-[#bab59c] hover:text-primary transition-colors text-sm font-medium" href="#">
    <span className="material-symbols-outlined text-[20px]">trending_up</span>
                                    View Stats
                                </a> */}
    </div>
    </div>
  )
}
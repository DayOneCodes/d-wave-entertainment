import setImage from "../../utils/eventImage";

function EventDetailsHero ({event, loading, error}) {
  return (
      <section className="relative w-full h-[72vh] flex flex-col justify-end overflow-hidden">
            <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 z-10"></div>
            <div className="absolute inset-0 hero-gradient z-20"></div>
            <div className={`before:content-[''] before:absolute before:inset-0 before:blur-xl before:bg-[url(${setImage(event)})] before:bg-no-repeat before:bg-center before:bg-cover before:z-0 relative w-full h-full bg-cover bg-center transform scale-105`} ></div>
            </div>
            <div className="relative z-30 px-6 lg:px-40 pb-20 max-w-[1400px] mx-auto w-full">
            <div className="flex flex-col gap-6 max-w-3xl">
            <div className="flex items-center gap-3">

            <span className="text-white text-xl font-semibold  ">{event.month} {event.day}, {event.year}</span>
            </div>
            <h1 className="serif-text text-white text-5xl md:text-7xl font-black leading-tight tracking-tight stroke-primary uppercase">
                                    {event.title}
            </h1>
            <div className="flex items-center gap-8 mt-4">
            <div className="flex flex-col">
            <span className="text-white/40 text-[10px] font-bold tracking-widest">VENUE</span>
            <span className="text-white text-xl font-semibold ">{event.location}</span>
            </div>
            <div className="flex flex-col">
            <span className="text-white/40 text-[10px] font-bold tracking-widest">DOORS</span>
            <span className="text-white text-xl font-semibold ">{event.time}</span>
            </div>
            </div>
            </div>
            </div>
      </section>

  )
}

export default EventDetailsHero;
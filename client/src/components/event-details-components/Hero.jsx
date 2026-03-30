import setImage from "../../utils/eventImage";

function EventDetailsHero ({event, loading, error}) {
  return (
      // <section className="relative w-full h-[72vh] flex flex-col justify-end overflow-hidden">
      //       <div className="absolute inset-0 z-0">
      //       <div className="absolute inset-0 z-10"></div>
      //       <div className="absolute inset-0 hero-gradient z-20"></div>
      //       <div className={`before:content-[''] before:absolute before:inset-0 before:blur-xl before:bg-[url(${setImage(event)})] before:bg-no-repeat before:bg-center before:bg-cover before:z-0 relative w-full h-full bg-cover bg-center transform scale-105`} ></div>
      //       </div>
      //       <div className="relative z-30 px-6 lg:px-40 pb-20 max-w-[1400px] mx-auto w-full">
      //       <div className="flex flex-col gap-6 max-w-3xl">
      //       <div className="flex items-center gap-3">

      //       <span className="text-white text-xl font-semibold  ">{event.month} {event.day}, {event.year}</span>
      //       </div>
      //       <h1 className="serif-text text-white text-5xl md:text-7xl font-black leading-tight tracking-tight stroke-primary uppercase">
      //                               {event.title}
      //       </h1>
      //       <div className="flex items-center gap-8 mt-4">
      //       <div className="flex flex-col">
      //       <span className="text-white/40 text-[10px] font-bold tracking-widest">VENUE</span>
      //       <span className="text-white text-xl font-semibold ">{event.location}</span>
      //       </div>
      //       <div className="flex flex-col">
      //       <span className="text-white/40 text-[10px] font-bold tracking-widest">DOORS</span>
      //       <span className="text-white text-xl font-semibold ">{event.time}</span>
      //       </div>
      //       </div>
      //       </div>
      //       </div>
      // </section>

      <section className="relative bg-url h-[751px] w-full flex items-end overflow-hidden">
        <div className={`absolute inset-0 bg-[url(${setImage(event)})] bg-cover bg-center blur-2xl scale-110`}></div>
        <div className="absolute inset-0 z-0">
        <img alt="Event Hero" className="w-full h-full object-contain"  src={setImage(event)}/>
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent"></div>
        </div>
        <div className="relative z-10 w-full px-6 pb-12">
        <div className="bg-primary p-8 rounded-lg border border-outline-variant/15 max-w-lg mx-auto md:mx-0" >
        <span className="font-label text-[0.75rem] uppercase tracking-[0.15em] text-white mb-3 block font-bold">{event.day} {event.month}, {event.year}</span>
        <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-white tracking-tighter text-on-surface mb-2 leading-tight">{event.title}</h2>
        <div className="flex flex-col gap-1 text-on-surface-variant font-medium">
        <div className="flex items-center text-white gap-2">
        <span className="material-symbols-outlined text-[1.2rem]" data-icon="location_on">location_on</span>
        <span>{event.location}</span>
        </div>
        <div className="flex text-white items-center gap-2">
        <span className="material-symbols-outlined text-[1.2rem]" data-icon="schedule">schedule</span>
        <span>Doors: {event.time}</span>
        </div>
        </div>
        </div>
        </div>
      </section>

  )
}

export default EventDetailsHero;
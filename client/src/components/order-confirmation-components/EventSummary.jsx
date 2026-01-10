import setImage from "../../utils/eventImage";

export default function EventSummary ({event, loading, error}) {

  return (
      <div className="flex flex-col items-stretch justify-start rounded-xl xl:flex-row xl:items-start bg-surface-dark border border-surface-highlight overflow-hidden relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent pointer-events-none"></div>
        <div
          className="w-full lg:w-48 xl:w-64 bg-center bg-no-repeat aspect-video lg:aspect-auto lg:h-full bg-cover"
          style={{ backgroundImage: `url(${setImage(event)})` }}
          alt={event.title}
        />
        <div className="flex w-full grow flex-col items-stretch justify-center gap-1 p-6 relative z-10">
          <div className="inline-flex mb-2">
            <span className="bg-primary/20 text-primary text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">Upcoming</span>
          </div>
          <h3 className="text-primary text-2xl font-bold leading-tight tracking-[-0.015em] mb-1">{event.title}</h3>
          <div className="flex flex-col gap-2 mt-2 text-text-secondary text-sm font-medium">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px]">calendar_month</span>
              <span>Saturday, {event.month} {event.day} • 10:00 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px]">location_on</span>
              <span>{event.location}</span>
            </div>
          </div>
        </div>
      </div>
  )
}
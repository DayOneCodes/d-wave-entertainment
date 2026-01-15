import { Link } from "react-router-dom";
import Eventcard from "./Event-cards.jsx";
import { forwardRef, useState, useEffect } from "react";
import { useChronologicalEvents } from "../contexts/EventChronologicalContext.jsx";
import { useEvents } from "../contexts/EventContext.jsx";
import setImage from "../utils/eventImage.js";

const UpcomingEvents = forwardRef(function UpcomingEvents ({onScrollToNewsLetter}, ref) {
  const { eventsChronological } = useChronologicalEvents();
  const { events, futureEvents, pastEvents, todaysEvents, loading, error } = useEvents();

  const header = () => {
    if (loading) return "Loading events...";
    if (error) return "";
    if (todaysEvents.length > 0) return "Happening Today";
    if (futureEvents.length === 0) return "Previous Events";

    return "Upcoming Events"
  }

  const renderSubtitle = () => {
    if (loading) return "...";
    if (error) return "Unable to load events at the moment.";
    if (todaysEvents.length > 0) return "It's happening today, be part of the energy. Don't Miss It";
    if (futureEvents.length === 0) {
      return (
        <>
          All events have concluded for now.{" "}
          <span className="text-green-600 font-medium cursor-pointer" onClick={
            onScrollToNewsLetter
          }>
            Subscribe
          </span>{" "}
          to be notified when new dates are announced.
        </>
      );
    }
    return "Don’t miss out on the hottest parties in the city.";
  };

  const eventsCards = () => {
    if (loading) return "";
    if (error) return "";
    if (futureEvents.length === 0){
      return (
       pastEvents.slice(0,3).map((event,i) => {
        const image = setImage(event);

        return (
          <Eventcard key={i}
            event={event}
            month={event.month.slice(0,3)}
            date={event.day}
            location={event.location}
            category={event.category}
            title={event.title}
            imageUrl={image}
            ticketUrl={event.ticketUrl}
            ticketStatus={false}
          />
        )
      })
      )
    }


    return (
     futureEvents.slice(0,3).map((event,i) => {
        const image = setImage(event);

        return (
          <Eventcard key={i}
            event={event}
            month={event.month.slice(0,3)}
            date={event.day}
            location={event.location}
            category={event.category}
            title={event.title}
            imageUrl={image}
            ticketUrl={event.ticketUrl}
            ticketStatus={true}
          />
        )
      }) 
    )
  };


  return (
    <> 
      <section className="py-24 px-4 md:px-10 lg:px-40 bg-background-light" id="events" ref={ref}>
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
          <h2 className="text-4xl font-bold tracking-tight text-primary mb-2">{header()}</h2>
          <p className="text-slate-600 ">
            {
             renderSubtitle()
            }
           </p>
          </div>
          <Link className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all"   to={"events"}>
          View All Events <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventsCards()}
          </div>
        </div>
      </section>
    </>
  )
})

export default UpcomingEvents;
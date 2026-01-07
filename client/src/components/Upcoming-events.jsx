import { Link } from "react-router-dom";
import Eventcard from "./Event-cards.jsx";
import { forwardRef, useState, useEffect } from "react";
import { useChronologicalEvents } from "../contexts/EventChronologicalContext.jsx";
import clubNight from "../assets/club-night.webp";
import roofTop from "../assets/roof-top.webp";
import allWhite from "../assets/all-white.webp";
import afterParty from "../assets/after-party.webp";

const UpcomingEvents = forwardRef(function UpcomingEvents (props, ref) {
  const { eventsChronological } = useChronologicalEvents();

  return (
    <> 
      <section className="py-24 px-4 md:px-10 lg:px-40 bg-background-light" id="events" ref={ref}>
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
          <h2 className="text-4xl font-bold tracking-tight text-primary mb-2">Upcoming Events</h2>
          <p className="text-slate-600 ">Don't miss out on the hottest parties in the city.</p>
          </div>
          <Link className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all"   to={"events"}>
          View All Events <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            { !eventsChronological ?
            (<p>Loading Events...</p>) :
            (
              eventsChronological.slice(0,3).map((event,i) => {
                let image = event.imageUrl;

                if (!image) {
                  switch (event.category){
                    case "After Party":
                      image = afterParty;
                      break;
                    case "Rooftop":
                      image = roofTop;
                      break;
                    case "Club Night":
                      image = clubNight;
                      break;
                    case "All White Party":
                      image = allWhite;
                      break;
                  }
                }

                return (
                  <Eventcard key={i}
                    month={event.month.slice(0,3)}
                    date={event.date}
                    location={event.location}
                    category={event.category}
                    title={event.title}
                    imageUrl={image}
                    ticketUrl={event.ticketUrl}
                  />
                )
              })
            )
            }
          </div>
        </div>
      </section>
    </>
  )
})

export default UpcomingEvents;
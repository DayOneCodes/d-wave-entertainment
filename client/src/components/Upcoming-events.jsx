import { Link } from "react-router-dom";
import Eventcard from "./Event-cards";
import { forwardRef, useState, useEffect } from "react";

const UpcomingEvents = forwardRef(function UpcomingEvents (props, ref) {
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  useEffect(() => {
    async function fetchEvents () {
      try {
        const res = await fetch("https://d-wave-entertainment.onrender.com/api/events/");
        const data = await res.json();
        setUpcomingEvents(data);
        console.log("Fetched upcoming events:", data);
      } catch (error) {
      console.error("Error fetching upcoming events:", error);
      }
    };

    fetchEvents();
  }, [])

  return (
    <> 
      <section className="py-24 px-4 md:px-10 lg:px-40 bg-background-light dark:bg-background-dark" id="events" ref={ref}>
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
          <h2 className="text-4xl font-bold tracking-tight text-primary mb-2">Upcoming Events</h2>
          <p className="text-slate-600 dark:text-gray-400">Don't miss out on the hottest parties in the city.</p>
          </div>
          <Link className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all"   to={"/full-calendar"}>
          View Full Calendar <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Eventcard 
            month="DEC"
            date="27"
            location="Catch twenty two"
            category="Club Night"
            title="Secret Saturday: Santa's Party"
            imageUrl=""
            ticketUrl="Fatsoma.com/auranbeats."
          />
          <Eventcard 
            month="DEC"
            date="06"
            location="Players"
            category="All white Party"
            title="The winter soiée"
            imageUrl=""
          />
          <Eventcard 
            month="NOV"
            date="22"
            location="Junction 1ten"
            category="After Party"
            title="The Gist: Sodom & Gomorrah"
            imageUrl=""
          />

          </div>
        </div>
      </section>
    </>
  )
})

export default UpcomingEvents;
import StatsCard from "../components/admin-components/StatsCard.jsx";
import EventListItem from "../components/admin-components/EventListItem.jsx";
import { useState } from "react";
import { useEvents } from "../contexts/EventContext.jsx";


function Admin () {
  const { events, loading, error, futureEvents, pastEvents, todaysEvents } = useEvents();

  const [eventpagination, setEventPagination] = useState({
    currentPage: 1,
    eventsPerPage: 3
  })

  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <div className="flex flex-wrap justify-between items-end gap-4 mb-8">
      <div className="flex flex-col gap-2">
      <p className="text-primary text-4xl font-black leading-tight tracking-tight">Event Management</p>
      <p className="text-[#9da6b9] text-base font-normal">System database of all D-Wave Entertainment events.</p>
      </div>
      <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-primary/20">
      <span className="material-symbols-outlined text-xl">add_circle</span>
      <span>Create New Event</span>
      </button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <StatsCard 
        name="Total Events"
        icon="event_available"
        value={events.length}
        analysis="+12% from last month"/>

      <StatsCard 
        name="Tickets Sold"
        icon="confirmation_number"
        value="250"
        analysis="+8% increase"/>

      <StatsCard 
        name="Avg. Occupancy"
        icon="groups"
        value="84%"
        analysis="Based on 12 active locations"/> 
    </div>

    <div className="flex flex-col gap-4">
      {
        loading ? <p>Loading Events...</p> :
        error ? <p>Unable to load Events</p> :
        events.length === 0 ? <p>No Events Found</p> :

        events
         .slice(
            (eventpagination.currentPage - 1) * eventpagination.eventsPerPage, 
            eventpagination.currentPage * eventpagination.eventsPerPage
         )
         .reverse()
         .map((event) => {
          const future = futureEvents.includes(event);
          const today = todaysEvents.includes(event);

          return <EventListItem key={event._id} event={event} future={future} today={today}/>
         })
      }
    </div>
    </div>
  )
}

export default Admin;
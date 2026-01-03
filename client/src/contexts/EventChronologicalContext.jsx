import { useEventData } from "./EventDataContext";
import { createContext, useContext, useEffect, useState } from "react";

//UPDATE: Import useMemo instead of a second context
const EventsChronologicalContext = createContext(null); 

export function EventChronologicalProvider ({children}) {

  const { eventData, error } = useEventData();
  const [ eventsChronological, setEventsChronological] = useState(null);

  
  useEffect(() => {
    if (!eventData) return;

    const reversed = [...eventData].reverse();
    setEventsChronological(reversed);
  }, [eventData])

  return (
    <EventsChronologicalContext.Provider value={{eventsChronological}}>
      {children}
    </EventsChronologicalContext.Provider>
  )
}


export function useChronologicalEvents () {
  const chronologicalEvents = useContext(EventsChronologicalContext);

  if (!chronologicalEvents){
    throw new Error("useChronologicalEvents can only be used within EventsChronologicalContext")
  }

  return chronologicalEvents;
}



import { useEventData } from "./EventDataContext";
import { createContext, useContext, useEffect, useState } from "react";

//UPDATE: Import useMemo instead of a second context
const EventsChronologicalContext = createContext(null); 

export function EventChronologicalProvider ({children}) {

  const { eventData, error } = useEventData();
  const [ eventsChronological, setEventsChronological] = useState(null);
  const [thisMonthEvent, setThisMonthEvent ] = useState([
    {
    title: "Secret Saturday: Santa's Party", 
    date: "27",
    location: "Catch Twenty Two",
    month: "December",
    year: "2025",
    category: "Club Night",
    imageUrl: "",
   ticketUrl: ""
}
  ]);
  const lesMoins = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const [ceMoinIndexI, setCeMoinIndexI] = useState(new Date().getMonth());

  
  useEffect(() => {
    if (!eventData) return;

    const reversed = [...eventData].reverse();
    setEventsChronological(reversed);

    const thisMonth = []
    reversed.forEach((event) => {
      if (event.month.toLowerCase() === lesMoins[ceMoinIndexI].toLowerCase()){
        thisMonth.unshift(event)
      }
    });

    setThisMonthEvent(thisMonth)

  }, [eventData, ceMoinIndexI])

  return (
    <EventsChronologicalContext.Provider value={{eventsChronological, thisMonthEvent, setCeMoinIndexI}}>
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



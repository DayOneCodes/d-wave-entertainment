import { createContext, useContext, useState, useEffect } from "react";
import fetchEvents from "../api/eventApi";

const EventDataContext = 
createContext(null);

export function EventDataProvider ({ children }) {
  const [ eventData, setEventData ] = useState(null);
  const [ error,  setError ] = useState(null)

  useEffect(() => {
      async function loadEventData () {
        try {
          const events = await fetchEvents();
          setEventData(events);
        }
        catch (err) {
          setError(err.message)
        }
      }

      loadEventData();
  }, [])

  return (
    <EventDataContext.Provider value={{eventData, error}}>
      {children}
    </EventDataContext.Provider> 
  )
}

export function useEventData () {
  const context = useContext(EventDataContext);

  if (!context) {
    throw new Error (" useEventData must be used within EventDataProvider");
  }

  return context
  
}
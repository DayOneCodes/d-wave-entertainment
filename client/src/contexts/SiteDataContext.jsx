import { createContext, useState, useEffect } from "react";

export const EventDataContext = 
createContext(null);

export function EventDataProvider ({ children }) {
  const [ eventData, setEventData ] = useState(null);

  useEffect(() => {

  }, [])

  return (
    <EventDataContext.Provider value={eventData}>
      {children}
    </EventDataContext.Provider> 
  )
}
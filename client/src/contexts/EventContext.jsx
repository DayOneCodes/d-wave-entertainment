import {createContext, useContext, useState, useEffect} from "react";
import fetchEvents from "../api/eventApi";

const EventContext = createContext();

export const EventProvider = ({children}) => {
  const [events, setEvents] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const data = await fetchEvents();
        setEvents(data);
      }
      catch (err) {
        setError(err);
      }
      finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, []);

  return (
    <EventContext.Provider value={{events, loading, error}}>
      {children}
    </EventContext.Provider>
  );
};

export const useEvents = () => {
  return useContext (EventContext);
}
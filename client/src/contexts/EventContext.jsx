import {createContext, useContext, useState, useEffect} from "react";
import fetchEvents from "../api/eventApi";
import addNormalizedDateKey from "../utils/eventNormalizer";

const EventContext = createContext();

export const EventProvider = ({children}) => {
  const [events, setEvents] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pastEvents, setPastEvents] = useState(null);
  const [futureEvents, setFutureEvents] = useState(null);
  const [todaysEvents, setTodaysEvents] = useState(null);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const data = await fetchEvents();
        const normalizedEvents = addNormalizedDateKey(data);
        setEvents(normalizedEvents);

        const past = [];
        const future = [];
        const today = [];

        const now = new Date();
        const todayKey = new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate()
        ).getTime();

        normalizedEvents.forEach((event) => {
          const eventKey = event.normalizedDateKey.getTime();

          if (eventKey > todayKey){
            future.unshift(event);
          }
          else if (eventKey < todayKey){
            past.unshift(event)
          } else {
            today.unshift(event)
          }
        });

        setFutureEvents(future);
        setPastEvents(past);
        setTodaysEvents(today);
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
    <EventContext.Provider value={{events, loading, error, pastEvents, futureEvents, todaysEvents}}>
      {children}
    </EventContext.Provider>
  );
};

export const useEvents = () => {
  return useContext (EventContext);
}
import {createContext, useContext, useState, useEffect} from "react";
import { eventService } from "../services/event.service";
import addNormalizedDateKey from "../utils/eventNormalizer";

const EventContext = createContext();

export const EventProvider = ({children}) => {
  const [events, setEvents] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pastEvents, setPastEvents] = useState([]);
  const [futureEvents, setFutureEvents] = useState([]);
  const [todaysEvents, setTodaysEvents] = useState([]);
  const [thisMonthEvents, setThisMonthEvents] = useState([]);
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const thisMonthIndex = new Date().getMonth();

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const data = await eventService.getEvents();
        const normalizedEvents = addNormalizedDateKey(data);
        setEvents(normalizedEvents);

        normalizedEvents.forEach((event) => {
          if (event.month.toLowerCase() === monthNames[thisMonthIndex]) {
            setThisMonthEvents(prev => [...prev, event])
          }
        })

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
    <EventContext.Provider value={{events, loading, error, pastEvents, futureEvents, todaysEvents, thisMonthEvents}}>
      {children}
    </EventContext.Provider>
  );
};

export const useEvents = () => {
  return useContext (EventContext);
}
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Hero from "../components/event-details-components/Hero.jsx";
import EventDetailsMainContent from "../components/event-details-components/Main-Content.jsx";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useEvents } from "../contexts/EventContext.jsx";
import { useState, useEffect } from "react";

function EventDetails () {
  const [event, setEvent] = useState("");
  const navigate = useNavigate();
  const location = useLocation(); 
  const {events, loading, error} = useEvents();
  const { eventId } = useParams();


  useEffect(() => {
    if (loading) return;
    if (!events || events.length === 0) return;


    const foundEvent = events.find(e => e._id.toString() === eventId.toString());
    setEvent(foundEvent);
  }, [eventId, events,, loading]);

  return (
    <>
        <Header />
        <Hero event={event}/>
        <EventDetailsMainContent event={event} />
        <Footer />
    </>
  )
}

export default EventDetails;
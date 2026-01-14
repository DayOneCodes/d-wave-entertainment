import Header from "../components/Header.jsx";
import LandingHero from "../components/Landing-hero.jsx";
import Footer from "../components/Footer.jsx";
import UpcomingEvents from "../components/Upcoming-events.jsx";
import Services from "../components/Services.jsx";
import Newsletter from "../components/Newsletter.jsx";
import { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Landingpage ({scrollTop}) {
  const scrollEvent = useRef(null);
  const scrollService = useRef(null);
  const newsLetterRef = useRef(null)
  

 const onScrollToEvents = () => {
  scrollEvent.current?.scrollIntoView({
    behavior: 'smooth',
  })
 }

 const onScrollToServices = () => {
  scrollService.current?.scrollIntoView({
    behavior: 'smooth',
  })
 }

 const onScrollToNewsLetter = () => {
  newsLetterRef.current?.scrollIntoView({
    behavior: "smooth",
  })
 }

 const location = useLocation();

 useEffect(() => {
  if (location.state &&location.state.scrollTo === "events") {
  scrollEvent.current?.scrollIntoView({
    behavior: 'smooth',
  })
 };

 if (location.state && location.state.scrollTo === "services") {
  scrollService.current?.scrollIntoView({
    behavior: 'smooth',
  })
 }

  window.history.replaceState({}, document.title)
 }, [location])  


  return (
  <>
        <Header scrollTop={scrollTop} onScrollToEvents={onScrollToEvents} onScrollToServices={onScrollToServices} />
        <LandingHero onScrollToEvents={onScrollToEvents} onScrollToServices={onScrollToServices}/>
        <UpcomingEvents ref={scrollEvent} onScrollToNewsLetter={onScrollToNewsLetter} />
        <Services ref={scrollService} />
        <Newsletter ref={newsLetterRef}/>
        <Footer />
   </>
  )
}

export default Landingpage;
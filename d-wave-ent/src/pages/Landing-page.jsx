import Header from "../components/header.jsx";
import LandingHero from "../components/Landing-hero.jsx";
import Footer from "../components/Footer.jsx";
import UpcomingEvents from "../components/Upcoming-events.jsx";
import Services from "../components/Services.jsx";
import Newsletter from "../components/Newsletter.jsx";
import { useRef } from "react";

function Landingpage () {
  const scrollEvent = useRef(null);
  const scrollService = useRef(null);

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


  return (
  <>
        <Header onScrollToEvents={onScrollToEvents} onScrollToServices={onScrollToServices} />
        <LandingHero />
        <UpcomingEvents ref={scrollEvent} />
        <Services ref={scrollService} />
        <Newsletter />
        <Footer />
   </>
  )
}

export default Landingpage;
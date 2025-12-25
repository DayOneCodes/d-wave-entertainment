import Header from "../components/header.jsx";
import LandingHero from "../components/Landing-hero.jsx";
import Footer from "../components/Footer.jsx";
import UpcomingEvents from "../components/Upcoming-events.jsx";
import Services from "../components/Services.jsx";
import Newsletter from "../components/Newsletter.jsx";

function Landingpage () {
  return (
  <>
        <Header />
        <LandingHero />
        <UpcomingEvents />
        <Services />
        <Newsletter />
        <Footer />
   </>
  )
}

export default Landingpage;
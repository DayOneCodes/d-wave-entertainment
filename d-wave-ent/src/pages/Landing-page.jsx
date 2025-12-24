import Header from "../components/header.jsx";
import Hero from "../components/Hero.jsx";
import Footer from "../components/Footer.jsx";
import UpcomingEvents from "../components/Upcoming-events.jsx";
import Services from "../components/Services.jsx";
import Newsletter from "../components/Newsletter.jsx";

function Landingpage () {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden antialiased selection:bg-primary selection:text-white">
      <div className="relative flex min-h-screen w-full flex-col group/design-root">
        <Header />
        <Hero />
        <UpcomingEvents />
        <Services />
        <Newsletter />
        <Footer />
      </div>
    </div>
  )
}

export default Landingpage;
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import FullCalendarHero from "../components/FullCalendarHero.jsx";
import FullCalendarMainContent from "../components/FullCalendarMainContent.jsx";


function FullCalendar () {
  return (
    <>
    <Header />
    <div className="flex-1 flex flex-col items-center">
    <FullCalendarHero />
    <FullCalendarMainContent />
    </div>
    <Footer />
    </>
  )
}

export default FullCalendar;
import Header from '../components/header.jsx';
import Footer from "../components/Footer.jsx";
import AboutUsHero from '../components/About-us-hero.jsx';
import Stats from '../components/Stats.jsx';
import MissionSection from '../components/Mission.jsx';
import CTA from '../components/CTA.jsx';
import { useNavigate } from 'react-router-dom';

function AbooutUs () {
  const navigate = useNavigate();

  const onScrollToEvents = () => {
    navigate("/", {
      state: { scrollTo: "events"}
    })
  }

  const onScrollToServices = () => {
    navigate("/", {
      state: { scrollTo: "services"}
    })
  }
  
  return (
    <>
      <main>
      <Header onScrollToEvents={onScrollToEvents} onScrollToServices={onScrollToServices}/>
      <AboutUsHero />
      <Stats />
      <MissionSection />
      <CTA />
      </main>
      <Footer />
    </>
  )
}

export default AbooutUs;
import Header from '../components/Header.jsx';
import Footer from "../components/Footer.jsx";
import AboutUsHero from '../components/About-us-hero.jsx';
import Stats from '../components/Stats.jsx';
import MissionSection from '../components/Mission.jsx';
import CTA from '../components/CTA.jsx';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

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

  const [scrollData, setScrollData] = useState(0);
    
  useEffect(() => {
      const handleScroll = () => {
        const { scrollTop } = document.documentElement;
        setScrollData(
          scrollTop);
      };
    
      window.addEventListener('scroll', handleScroll);
      handleScroll(); 
    
      return () => {
        window.removeEventListener('scroll', handleScroll);
      }
    }, [])
  
  return (
    <>
      <main>
      <Header scrollTop={scrollData} onScrollToEvents={onScrollToEvents} onScrollToServices={onScrollToServices}/>
      <AboutUsHero />
      <Stats />
      <MissionSection />
      <CTA onScrollToEvents={onScrollToEvents} onScrollToServices={onScrollToServices}/>
      </main>
      <Footer />
    </>
  )
}

export default AbooutUs;
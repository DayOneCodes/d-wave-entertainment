import Header from '../components/Header.jsx';
import ContactHero from '../components/Contact-hero.jsx';
import MainContentContact from '../components/Main-content-contact.jsx';
import FAQSection from '../components/FAQ.jsx';
import Footer from '../components/Footer.jsx';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Contact () {
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
      <Header scrollTop={scrollData} onScrollToEvents={onScrollToEvents} onScrollToServices={onScrollToServices}/>
      <ContactHero />
      <MainContentContact />
      <FAQSection />
      <Footer />
    </>
  )
}

export default Contact;
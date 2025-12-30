import Header from '../components/Header.jsx';
import ContactHero from '../components/Contact-hero.jsx';
import MainContentContact from '../components/Main-content-contact.jsx';
import FAQSection from '../components/FAQ.jsx';
import Footer from '../components/Footer.jsx';
import { useNavigate } from 'react-router-dom';

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

  return (
    <>
      <Header onScrollToEvents={onScrollToEvents} onScrollToServices={onScrollToServices}/>
      <ContactHero />
      <MainContentContact />
      <FAQSection />
      <Footer />
    </>
  )
}

export default Contact;
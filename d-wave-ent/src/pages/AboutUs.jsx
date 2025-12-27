import Header from '../components/header.jsx';
import Footer from "../components/Footer.jsx";
import AboutUsHero from '../components/About-us-hero.jsx';
import Stats from '../components/Stats.jsx';
import MissionSection from '../components/Mission.jsx';
import CTA from '../components/CTA.jsx';

function AbooutUs () {
  return (
    <>
      <main>
      <Header />
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
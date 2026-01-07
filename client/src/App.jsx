import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Landingpage from './pages/Landing-page';
import Contact from './pages/Contact.jsx';
import AboutUs from './pages/AboutUs.jsx';
import FullCalendar from './pages/FullCalendar.jsx';
import Admin from './pages/Admin.jsx';
import { Route, Routes } from "react-router-dom";


function App() {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentValue = document.documentElement.scrollTop
      setScrollTop(currentValue);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Landingpage scrollTop={scrollTop}/>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/events" element={<FullCalendar />}/>
      <Route path="/admin" element={<Admin />}/>
      <Route path="*" element={<div className="layout-container py-20"><h1 className="text-3xl font-bold text-center">404 - Page Not Found</h1></div>} />
    </Routes>
  )
}

export default App

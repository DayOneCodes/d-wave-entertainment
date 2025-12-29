import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Landingpage from './pages/Landing-page';
import Contact from './pages/contact.jsx';
import AboutUs from './pages/AboutUs.jsx';
import FullCalendar from './pages/FullCalendar.jsx';
import { Route, Routes } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/full-calendar" element={<FullCalendar />}/>
      <Route path="*" element={<div className="layout-container py-20"><h1 className="text-3xl font-bold text-center">404 - Page Not Found</h1></div>} />
    </Routes>
  )
}

export default App

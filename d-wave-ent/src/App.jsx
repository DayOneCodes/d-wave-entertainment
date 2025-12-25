import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Landingpage from './pages/Landing-page';
import Contact from './pages/contact.jsx';
import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App

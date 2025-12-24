import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Landingpage from './pages/Landing-page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Landingpage />
    </>
  )
}

export default App

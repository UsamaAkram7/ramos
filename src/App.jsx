import { useState } from 'react'
import './App.scss'
import Navbar from './components/Navbar/navbar.jsx'
import Dashboard from './components/Dashboard/dashboard.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <section id="Dashboard">
          <Navbar />
          <Dashboard />
        </section>
        {/* <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section> */}
        {/* Framer Motion Crash Course */}
        {/* <Test/>
    <Test/> */}
      </div>
    </>
  )
}

export default App

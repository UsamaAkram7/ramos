import { useState } from 'react'
import './App.scss'
import Navbar from './components/Navbar/navbar.jsx'
import Dashboard from './components/Dashboard/dashboard.jsx'
import Documents from './components/Documents/documents.jsx'
import GetStarted from './components/Get-Started/start.jsx'
import Contact from './components/Contact/contact.jsx'
import Reports from './components/Reports/reports.jsx'
import History from './components/History/history.jsx'
import Settings from './components/Settings/settings.jsx'

function App() {
  return (
    <>
      <div>
        <section id="Dashboard">
          <Navbar />
          <Dashboard />
        </section>
        <section id='Reports'>
          <Reports />
        </section>
        <section id='Documents'>
          <Documents />
        </section>
        <section id='History'>
          <History />
        </section>
        <section id='Settings'>
          <Settings />
        </section>
        <section id="GetStarted">
          <GetStarted />
        </section>
        <section id='Contact'>
          <Contact />
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

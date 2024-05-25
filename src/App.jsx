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
        <section id="navbar">
          <Navbar />
        </section>
        <section id="Dashboard">
          <div className='container'>
            <Dashboard />
          </div>
        </section>
        <section id='Reports'>
          <div className='container'>
            <Reports />
          </div>
        </section>
        <section id='Documents'>
          <div className='container'>
            <Documents />
          </div>
        </section>
        <section id='History'>
          <div className='container'>
            <History />
          </div>
        </section>
        <section id='Settings'>
          <div className='container'>
            <Settings />
          </div>
        </section>
        <section id="GetStarted">
          <div className='container'>
            <GetStarted />
          </div>
        </section>

        <section id='Contact'>
          <div className='container'>
            <Contact />
          </div>
        </section>
      </div>
    </>
  )
}

export default App

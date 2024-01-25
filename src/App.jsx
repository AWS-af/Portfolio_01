import React from 'react'
import './App.scss'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import Projects from './Components/Projects'


function App() {
  return (
    <main className='main'>
      <NavBar />
      <Hero />
      <Projects />
    </main>
  )
}

export default App
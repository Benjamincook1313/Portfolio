import React from 'react'
import AboutMe from '../About/About'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import './Home.css'

function Home() {
    return(
    <div className='landing-page'>
      <div className='Home' id='home'>
        <div className='box'>
          <h1 className='H-name'>Benjamin Cook</h1>
          <p className='H-title'> (Full-Stack Web Developer) </p>
        </div>
      </div>
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home;
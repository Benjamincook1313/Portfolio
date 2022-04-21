import React from 'react';
import './App.css';
import Home from './Components/Home'
import Nav from './Components/Nav/Nav'
import Contact from './Components/Contact'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import About from './Components/About/About'


function App() {
  return (
    <div className='App'>
      <Nav/>
      <Home/>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App;

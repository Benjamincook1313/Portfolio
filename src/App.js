import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Home from './Components/Home/Home'
// import AboutMe from './Components/AboutMe/AboutMe'
// import Skills from './Components/Skills/Skills'
// import Projects from './Components/Projects/Projects'
import Nav from './Components/Nav/Nav'

function App() {
  return (
    <div className='App'>
      <Nav/>
      <Route path='/' component={ Home } />
    </div>
  )
}

export default App;

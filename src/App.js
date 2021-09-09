import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Nav from './Components/Nav/Nav'


function App() {
  return (
    <div className='App'>
      <Nav/>
      <Route path='/' component={ Home } />
      <img src='Method' alt='' />
    </div>
  )
}

export default App;

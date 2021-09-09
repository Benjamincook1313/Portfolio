import React from 'react';
import TicTacToe from '../TicTacToe/TicTacToe';
import './Projects.css'

function Projects() {
  return(
    <div className='Projects'>
      <h1 className='title'> Projects </h1>
      <div className='P-info'>
        <img src='' alt='' />
        <a href='http://159.89.149.251:3333' style={{margin: 20, fontSize: 18, color: 'blue'}}>Dental </a>
        <a href='http://165.22.157.101:4001/' style={{margin: 20, fontSize: 18}}> Group Project </a>
      </div>
      {/* <TicTacToe/> */}
    </div>
  )
}

export default Projects
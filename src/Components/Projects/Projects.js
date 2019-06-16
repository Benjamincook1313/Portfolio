import React, { Component } from 'react'

class Projects extends Component {
  render() {
    return(
      <div className='Projects' id='projects'>
        <h1 className='title'> Projects </h1>
        <div className='P-info'>
          <img src='' alt='' />
          <a href='http://159.89.149.251:3333' style={{margin: 20, fontSize: 18, color: 'blue'}}>First full-stack Project</a>
          <a href='http://165.22.157.101:4001/' style={{margin: 20, fontSize: 18}}> Group Project </a>
        </div>
      </div>
    )
  }
}

export default Projects
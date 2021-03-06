import React, { Component } from 'react'

class Skills extends Component {
  render() {
    return(
      <div className='Skills' id='skills'>
        <h1 className='title' style={{color: 'whitesmoke'}}>Skills</h1>
        <div className='icons'>
          <div className='icon'>
            <i className="devicon-github-plain colored"></i>
            <p className='icon-text'>GITHUB</p>
          </div>
          <div className='icon'>
            <i className="devicon-visualstudio-plain colored"></i>
            <p className='icon-text'>VSCODE</p>
          </div>
          <div className='icon'>
            <i className="devicon-html5-plain colored"></i>
            <p className='icon-text'>HTML</p>
          </div>
          <div className='icon'>
            <i className="devicon-css3-plain colored"></i>
            <p className='icon-text'>CSS</p>
          </div>
          <div className='icon'>
            <i className="devicon-javascript-plain colored"></i>
            <p className='icon-text'>JAVASCRIPT</p>
          </div>
          <div className='icon'>
            <i className="devicon-react-original colored"></i>
            <p className='icon-text'>REACT</p>
          </div>
          <div className='icon'>
            <i className="devicon-express-original colored"></i>
            <p className='icon-text'>EXPRESS</p>
          </div>
          <div className='icon'>
            <i className="devicon-nodejs-plain colored"></i>
            <p className='icon-text'>NODEJS</p>
          </div>
          <div className='icon'>
            <i className="devicon-heroku-plain colored"></i>
            <p className='icon-text'>HEROKU</p>
          </div>
          <div className='icon'>
            <i className="devicon-postgresql-plain colored"></i>
            <p className='icon-text'>POSTGRESSQL</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Skills
import React from 'react';
import './Skills.css';

function Skills() {
  return(
    <div className='Skills' id='skills'>
      <h1 className='title' style={{color: 'whitesmoke'}}>Skills</h1>
      <div className='icons'>
        <div className='icon'>
          <i class="devicon-java-plain colored"></i>
          <p className='icon-text'>JAVA</p>
        </div>
        <div className='icon'>
          <i class="devicon-spring-plain colored"></i>
          <p className='icon-text'>SPRING</p>
        </div>
        <div className='icon'>
          <i class="devicon-intellij-plain colored"></i>
          <p className='icon-text'>INTELLIJ</p>
        </div>
        <div className='icon'>
          <i className="devicon-react-original colored"></i>
          <p className='icon-text'>REACT</p>
        </div>
        <div className='icon'>
          <i className="devicon-visualstudio-plain colored"></i>
          <p className='icon-text'>VSCODE</p>
        </div>
        <div className='icon'>
          <i className="devicon-javascript-plain colored"></i>
          <p className='icon-text'>JAVASCRIPT</p>
        </div>
        <div className='icon'>
          <i className="devicon-nodejs-plain colored"></i>
          <p className='icon-text'>NODEJS</p>
        </div>
        <div className='icon'>
          <i className="devicon-postgresql-plain colored"></i>
          <p className='icon-text'>POSTGRESQL</p>
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
          <i className="devicon-express-original colored"></i>
          <p className='icon-text'>EXPRESS</p>
        </div>
        <div className='icon'>
          <i className="devicon-heroku-plain colored"></i>
          <p className='icon-text'>HEROKU</p>
        </div>
        <div className='icon'>
          <i className="devicon-bootstrap-plain colored"></i>
          <p className='icon-text'>BOOTSTRAP</p>
        </div>
        <div className='icon'>
          <i class="devicon-selenium-original colored"></i>
          <p className='icon-text'>SELENIUM</p>
        </div>
        <div className='icon'>
          <i class="devicon-jest-plain colored"></i>
          <p className='icon-text'>JEST</p>
        </div>
      </div>
    </div>
  )
}

export default Skills
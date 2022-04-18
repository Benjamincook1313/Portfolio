import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './Projects.css';
import CatchTracker from '/Users/benjamin/Desktop/portfolio/src/images/Screen Shot 2019-12-06 at 5.17.57 PM.png';
import Dental from '/Users/benjamin/Desktop/portfolio/src/images/Screen Shot 2019-12-06 at 5.19.21 PM.png';
import UsCounty from '/Users/benjamin/Desktop/portfolio/src/images/Screen Shot 2019-12-06 at 5.25.44 PM.png';

function Projects() {

  const [showImg, setShowImg] = useState(false)
  const [index, setIndex] = useState(0)

  const img = ['', CatchTracker, Dental, UsCounty]



  const handleZoom = (id) => {
    setShowImg(true)
    setIndex(id)
  };

  const handleClose = () => {
    setShowImg(false)
    setIndex(0)
  };



  return(
    <div className='Projects' id='projects'>
      <h1 className='title'> Projects </h1>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className='project-links'>
        <a href='https://benjamincook1313.github.io/benjamincook1313/'>TicTacToe</a>
        <a href='https://benjamincook1313.github.io/Pokemon-api/'>Pokemon Matching Game</a>
        <a href='https://benjamincook1313.github.io/stop-watch/'>Stop Watch</a>
      </div>
      <section className='p-img-section' >

      {/* project image expand code block */}

      {showImg? 
        <div className='exp'>
          <Button className='close-exp' variant='dark' onClick={handleClose}>X</Button>
          <img className='p-img-exp' src={img[index]} alt='none'/>
        </div>
        : null
      }


        <div className='p-img-container' cursor='zoom-in'>
          <h4>Catch Tracker</h4>
          <p>
            Web Application for Fly Fisherman to select and store catch data; Location, Weather, Fly, Species, Date, Time, and additional comments. Bootstrap for dropdowns and inputs, REDUX for state managment, RESTful API's, Google FIREBASE to store uploaded images and Bcrypt, Hash and salt to secure passwords.
          </p>
          <img className='p-img' src={CatchTracker} alt='' onClick={() => handleZoom(1)}/>
          <a href='https://github.com/Benjamincook1313/catch-tracker-app'>github repo</a>
        </div>
        <div className='p-img-container'>
          <h4>Dental Website</h4>
          <p>
            First full stack project, User's could request an appointment by entering in their contact information Form. Nodemailer sends administrator a notification when a request is submited. React-Router-Dom for page routes where users can learn more about the Dental Office and Services they Provided.
          </p>
          <img className='p-img' src={Dental} alt='' onClick={() => handleZoom(2)}/>
          <a href='https://github.com/Benjamincook1313/personal-project'>github repo</a>
        </div>
        <div className='p-img-container'>
          <h5>U.S. County Explorer</h5>
          <p>
            Group Project, my responsibilities: connecting to API's to pull in Data for all US Counties to determine the best places to live based on average temperature, household incomes, property values, commute times, and median age of the general population. Also built the password reset feature using NODEMAILER to send the user a temporary password to login and create a new password. 
          </p>
          <img className='p-img' src={ UsCounty } alt='' onClick={() => handleZoom(3)}/>
          <a href='https://github.com/where-should-i-live/us-map'>github repo</a>
        </div>
      </section>
      <p>
        ( these projects are not currently hosted however the code for each project is available to view on github )
        {/* <a href='https://benjamincook1313.github'>github</a> ) */}
      </p>
    </div>
  )
}

export default Projects
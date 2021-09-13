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
    console.log('hit', index, showImg)
  };

  const handleClose = () => {
    setShowImg(false)
    setIndex(0)
    console.log('hit')
  };



  return(
    <div className='Projects' id='projects'>
      <h1 className='title'> Projects </h1>
      <br/>
      <br/>
      <br/>
      <br/>
      <a href='https://benjamincook1313.github.io/benjamincook1313/'>Tic Tac Toe</a>
      <section className='p-img-section' >

      {/* project image expand code block */}

      {showImg? 
        <div className='exp'>
          <Button className='close-exp' variant='dark' onClick={handleClose}>X</Button>
          <img className='p-img-exp' src={img[index]} />
        </div>
        : null
      }


        <div className='p-img-container' cursor='zoom-in'>
          <h4>Catch Tracker</h4>
          <p>
            This project is a single page application for fly fisherman to be able to 
            store data about each catch; such as location, weather, fly used, fish 
            species, date, time of day, and comments. I used REACT BOOTSTRAP for 
            dropdown menus and inputs, REDUX for managing all the data, full CRUD for 
            each catch, Google FIREBASE for the user to be able to upload images 
            and a POSTICO and HEROKU DATABASE with two tables for the users information
            and the other for catch data. 
          </p>
          <img className='p-img' src={CatchTracker} alt='' onClick={() => handleZoom(1)}/>
          <a href='https://github.com/Benjamincook1313/catch-tracker-app'>repository</a>
        </div>
        <div className='p-img-container'>
          <h4>Dental Website</h4>
          <p>
            This was my first full stack project, it contains EXPRESS/NODE authentication for 
            admins to be able to add or remove information on each page, I got to 
            work with REACT ROUTER DOM for each page. the user on the page could 
            request an appointment by entering in their contact information which
            would then be able to be accessed by a pages admin. I used nodemailer
            send an email to the admins so that they would only have to login to the
            site when an appointment request had been made. 
          </p>
          <img className='p-img' src={Dental} alt='' onClick={() => handleZoom(2)}/>
          <a href='https://github.com/Benjamincook1313/personal-project'>repository</a>
        </div>
        <div className='p-img-container'>
          <h5>U.S. County Explorer</h5>
          <p>
            Group Project , My responsibilities for this were to 
            connect to API's to pull in the data for all the us counties that we than used 
            determine the best places to live based on average temperature, household incomes, 
            property values, commute time, and median age of the general population. I also 
            built the password reset feature using NODEMAILER to send the user a random 10
            character temporary password that they could login with and create a new password. 
          </p>
          <img className='p-img' src={UsCounty} alt='' onClick={() => handleZoom(3)}/>
        </div>
      </section>
      <p>
        ( these projects are not currently hosted however the code for each project is 
        available to view on github )
        {/* <a href='https://benjamincook1313.github'>github</a> ) */}
      </p>
    </div>
  )
}

export default Projects
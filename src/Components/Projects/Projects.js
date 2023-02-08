import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './Projects.css';
import CatchTracker from '../../images/Screen Shot 2019-12-06 at 5.17.57 PM.png';
import Dental from '../../images/Screen Shot 2019-12-06 at 5.19.21 PM.png';
import UsCounty from '../../images/Screen Shot 2019-12-06 at 5.25.44 PM.png';
import Memory from "../../images/Memory.png"

// Projects Page

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
      <div className='project-links'>
        <Button variant='dark' href='https://benjamincook1313.github.io/benjamincook1313/'>TicTacToe</Button>
        {/* <Button variant='dark' href='https://benjamincook1313.github.io/Pokemon-api/'>Pokemon Matching Game</Button> */}
        <Button variant='dark' href='https://benjamincook1313.github.io/stop-watch/'>Stop Watch</Button>
      </div>
      <section className='p-img-section' >
      {showImg? 
        <div className='exp'>
          <Button className='close-exp' variant='dark' onClick={handleClose}>X</Button>
          <img className='p-img-exp' src={img[index]} alt='none'/>
        </div>
        : null
      }
        <div className='p-img-container'>
          <h4 className='p-title'>Pokemon Memory Game</h4>
          <p> React | JavaScript | Bootstrap | SweetAlert2 | Pokemon API </p>
          <p>
            Fun game using data from a pokemon api, select groups by generation or type. Sort alphabetically, by id or just shuffle into a random order. User's can also search for a specific pokemon and play a game of memory. The game has 2 player mode and a timer to track how fast you can make it through the chosen deck.
          </p>
          <img className='p-img' src={Memory} alt='' onClick={() => handleZoom(2)}/>
          <br/>
          <span className='card-btns'>
            <Button variant='dark' size='sm' href='https://github.com/Benjamincook1313/Pokemon-api'>Github repo</Button>
            <Button variant='dark' size='sm' href='https://benjamincook1313.github.io/Pokemon-api/'>Game</Button> 
          </span>
        </div>

        <div className='p-img-container'>
          <h4 className='p-title'>Dental Website</h4>
          <p> React | NodeJS | PostgreSQl | Express | React-Router-Dom | Nodemailer </p>
          <p>
            User's can learn more about the Dental Office and Services they Provided and request an appointment by entering in their contact information in form. the administrator also will receive an email notification when a request is submited. 
          </p>
          <img className='p-img' src={Dental} alt='' onClick={() => handleZoom(2)}/>
          <br/>
          <Button variant='dark' size='sm' href='https://github.com/Benjamincook1313/personal-project'>Github repo</Button>
        </div>

        <div className='p-img-container' cursor='zoom-in'>
          <h4 className='p-title'>Catch Tracker</h4>
          <p> React | JavaScript | NodeJS | Java | SpringBoot | Maven | Redux | SweetAlert2 | Bcrypt</p>
          <p>
            A RESTful Web Application for Fly Fisherman to store data about each catch to better understand how conditions affect the food availabilty of the fish.
          </p>
          <img className='p-img' src={CatchTracker} alt='' onClick={() => handleZoom(1)}/>
          <br/>
          <Button variant='dark' size='sm' href='https://github.com/Benjamincook1313/catch-tracker-app'>Github repo</Button>
        </div>

        <div className='p-img-container'>
          <h4 className='p-title'>U.S. County Explorer</h4>
          <p> API's | React-Hooks | NodeJS | Sass | User Authentication | Nodemailer</p>
          <p>
            Group Project, Determines the best places to live based on average temperature, household incomes, property values, commute times, and median age of local population. 
          </p>
          <img className='p-img' src={ UsCounty } alt='' onClick={() => handleZoom(3)}/>
          <br/>
          <Button variant='dark' size='sm' href='https://github.com/where-should-i-live/us-map'>Github Repo</Button>
        </div>
      </section>
      <p> ~ view code for each project on github ~ </p>
    </div>
  )
}

export default Projects
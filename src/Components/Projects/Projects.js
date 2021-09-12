import React from 'react';
import './Projects.css';
import CatchTracker from '/Users/benjamin/Desktop/portfolio/src/images/Screen Shot 2019-12-06 at 5.17.57 PM.png';
import Dental from '/Users/benjamin/Desktop/portfolio/src/images/Screen Shot 2019-12-06 at 5.19.21 PM.png';
import UsCounty from '/Users/benjamin/Desktop/portfolio/src/images/Screen Shot 2019-12-06 at 5.25.44 PM.png';

function Projects() {
  return(
    <div className='Projects' id='projects'>
      <h1 className='title'> Projects </h1>
      <br/>
      <br/>
      <br/>
      <br/>
      <a href='https://benjamincook1313.github.io/benjamincook1313/'>Tic Tac Toe</a>
      <section className='p-img-section' >
        <div className='p-img-container' >
          <h4>Catch Tracker</h4>
          <p>
            This project is a single page application for fly fisherman to be able to 
            store data about each catch; such as location, weather, fly used, fish 
            species, date, time of day, and comments. I used REACT BOOTSTRAP for 
            dropdown menus and inputs, REDUX for managing all the data, full CRUD for 
            each catch, I use Google FIREBASE for the user to be able to upload images 
            and a POSTICO and HEROKU DATABASE with two tables for the users information
            and the other for catch information. 
          </p>
          <img className='p-img' src={CatchTracker} alt='' />
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
          <img className='p-img' src={Dental} alt='' />
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
          <img className='p-img' src={UsCounty} alt='' />
        </div>
      </section>
      <p>
        ( these projects are not currently hosted however the code for each project is 
        available to view on {' '}
        <a href='https://benjamincook1313.github'>github</a> )
      </p>
    </div>
  )
}

export default Projects
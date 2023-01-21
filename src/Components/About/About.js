import React from 'react';
import './About.css';
import { Carousel } from 'react-bootstrap';
import Main from '../../images/64827663_2809731762387672_1789481639793917952_n copy.jpg';
import Stealhead from '../../images/steelhead.jpg'
// import Bells from '../../images/80093560_10221063967652828_1252318498219098112_o.jpg';

function About() {
  return(
    <div className='About' id='about'>
      <h1 className='title'>About</h1>
      <div className='A-info'>
        <Carousel className='carousel-wrapper'>
          <Carousel.Item>
            <img className="a-img" src={Main} alt="First slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="a-img" src={Stealhead} alt="Third slide"/>
          </Carousel.Item>
        </Carousel>
        <br/>
        <div className='text-container'>
          <span className='A-text'>
            I am an adventurous Software Engineer 
            <br/>
            from the Salt Lake, Utah area. 
            <p></p>
            - Built several full-stack applications in React with Javascript | Node.js | Express | Redux | PostgreSQL | Heroku | HTML | CSS
            <p></p>
            My hobbies include Programming, Solving Puzzles, Snowboarding, Fly Fishing and Surfing. 
          </span>
          <p className='A-text'> 
            I chose Programming as my career to be able to work remote and travel. After attending DevMountain's Web Development Immersive Program and becoming part of the Tech Community, 
            I am also excited to advance my knowledge and skill as an Engineer and be part of this rapidly expanding industry.
          </p>
          <br/>
        </div>
      </div>
    </div>
  )
};

export default About;
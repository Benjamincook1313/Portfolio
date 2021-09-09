import React from 'react';
import './About.css';
import { Carousel } from 'react-bootstrap';
import Method from '../../images/method.jpeg';
import Main from '/Users/benjamin/Desktop/portfolio/src/images/64827663_2809731762387672_1789481639793917952_n copy.jpg';
import Stealhead from '/Users/benjamin/Desktop/portfolio/src/images/steelhead.jpg'
import Bells from '/Users/benjamin/Desktop/portfolio/src/images/80093560_10221063967652828_1252318498219098112_o.jpg';

function About() {

  return(
    <div className='AboutMe' >
      <h1 className='title'>About Me</h1>
      <div className='A-info'>
      <Carousel className='carousel-wrapper'>
        <Carousel.Item>
          <img className="a-img" src={Main} alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="a-img" src={Bells} alt="Second slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="a-img" src={Stealhead} alt="Third slide"/>
          </Carousel.Item>
        </Carousel>
        <div className='text-container'>
          <p className='A-text'>
             I was born and raised in Utah, I love the outdoors and spend most of 
             my free time there
            <br/>
            My hobbies include Snowboarding, Surfing, 
            FlyFishing, Backpacking, and more. My wife Melissa and I
            have been married since January of 2013, shortly after we moved 
            to Alaska, where I became an expert fly fisherman. I worked as a full time delivery driver 
            with U.P.S but soon realized that I wanted to do more than just deliver boxes.
            so we decided to move back to utah to figure out a new career path. I found that 
            Web Development could be a viable option as a career and to be able continue traveling 
            and pursue our Outdoor Adventures, 
          </p>
          <p className='A-text'> 
            I chose web development as my career to be able to work remotely and travel, however
            after attending DevMountain and becoming part of the Web Development Community, 
            I am excited to advance my knowledge and education of coding and am excited to 
            work on a team to build web apps, work with software systems, be part of this 
            rapidly expanding industry. coding has become something that I enjoy doing along side
            of my other hobbies
          </p>
          <br/>
        </div>
      </div>
    </div>
  )
};

export default About;
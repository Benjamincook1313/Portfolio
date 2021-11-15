import React from 'react';
import './About.css';
import { Carousel } from 'react-bootstrap';
import Main from '/Users/benjamin/Desktop/portfolio/src/images/64827663_2809731762387672_1789481639793917952_n copy.jpg';
import Stealhead from '/Users/benjamin/Desktop/portfolio/src/images/steelhead.jpg'
import Bells from '/Users/benjamin/Desktop/portfolio/src/images/80093560_10221063967652828_1252318498219098112_o.jpg';

function About() {

  return(
    <div className='About' id='about'>
      <h1 className='title'>About</h1>
      <div className='A-info'>
      <Carousel className='carousel-wrapper'>
        <Carousel.Item>
          <img className="a-img" src={Main} alt="First slide"/>
        </Carousel.Item>
        {/* <Carousel.Item>
          <img className="a-img" src={Bells} alt="Second slide"/>
        </Carousel.Item> */}
        <Carousel.Item>
          <img className="a-img" src={Stealhead} alt="Third slide"/>
        </Carousel.Item>
      </Carousel>
        <br/>
        <div className='text-container'>
          <p className='A-text'>
             I am a full stack Software Developer in SLC, Utah. 
             I love the outdoors and spend most of my free time there.
            <br/>
            My hobbies include snowboarding, surfing, 
            fly fishing, backpacking, and more. My wife Melissa and I
            have been married since January of 2013, shortly after we moved 
            to Alaska for a few years. I worked as a full time delivery driver 
            with U.P.S. but soon realized that I wanted to do more than just deliver boxes.
            We decided to move back to Utah to figure out a new career path. I found that 
            Web/Software Development could be a viable option as a career that would allow us to continue traveling 
            and pursue our outdoor adventures.
          </p>
          <p className='A-text'> 
            I chose Software Development as my career to be able to work remotely and travel. However,
            after attending DevMountain and becoming part of the Software Development Community, 
            I am excited to advance my knowledge and education of coding, to 
            work on a team to build web apps, work with software systems, and be part of this 
            rapidly expanding industry.
          </p>
          <br/>
        </div>
      </div>
    </div>
  )
};

export default About;
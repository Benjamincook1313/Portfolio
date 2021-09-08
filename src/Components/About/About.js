import React from 'react';
import './About.css';

function About() {

  return(
    <div className='AboutMe' >
      <h1 className='title'>About Me</h1>
      <div className='A-info'>
        <img className='A-image' src='' alt=''/>
        <div className='text-container'>
          <p className='A-text'>
             I was born and raised in Utah, I love the outdoors and spend most of my free time 
            <br/>
            My hobbies include Traveling, Snowboarding, Surfing, 
            FlyFishing, Backpacking, and more. My wife Melissa and I
            have been married since in Jan. 2013, shortly after we moved 
            to Alaska, where I became an expert Fly fisherman.
            after moving back to Utah I wanted to find a career path and came across Web Development 
            as a viable option to be able continue to travel and pursue my Outdoor Adventures
          </p>
          <p className='A-text'> 
            I chose Web development to be able to work remotely and travel,
            after attending DevMountain and becoming part of the Web Development Community, 
            I am excited to advance my knowledge and education of computer systems and coding languages 
            and am excited to work on a fantastic team to build web apps and work with software systems. 
            <br/>
          </p>
        </div>
      </div>
    </div>
  )
};

export default About;
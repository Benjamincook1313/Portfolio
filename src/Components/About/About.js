import React from 'react';
import './About.css';
import { Carousel } from 'react-bootstrap';
import Main from '../../images/64827663_2809731762387672_1789481639793917952_n copy.jpg';
import Stealhead from '../../images/steelhead.jpg'
// import Bells from '../../images/80093560_10221063967652828_1252318498219098112_o.jpg';
import styled from "styled-components"

const P = styled.p`
  /* text-align: center; */
  display: flex;
  flex-direction: column;
  height: 60%;
  margin: 10px 10px;
  font-size: 18px;
`

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
          <br/>
          <span>
            <P>
              I am an adventurous Software Engineer from the Salt Lake, Utah area. 
            </P>

            <P> - Started in the Tech industry at Devmountain where I earned certifications in   Web Development and Java Software Engineering.
            </P>

            <P>- Built several P.E.R.N. full stack web applications using VSCode, and a backend API with Java / Spring Boot using IntelliJ  </P>

            <P>- Currently work as Mentor at Devmountain where I get to refine my skill as a Developer and teach code to an upcoming generation of engineers 
            </P>

            <P>
              Hobbies: Snowboard, Fly Fish, Surf, VanLife, Rubik's Cubes
            </P>
          </span>
          <br/>
        </div>
      </div>
    </div>
  )
};

export default About;
import React, { Component } from 'react'
// import Image from './Image'

class AboutMe extends Component {
  constructor(){
    super()
    this.state={
      index: 1
    }
  }
  render() {
    return(
      <div className='AboutMe' id='about'>
        <h1 className='title'>About Me</h1>
        <div className='A-info'>
          {/* <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="..." class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                  <img src="" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                  <img src=`${ Image }` class="d-block w-100" alt="..."/>
                </div>
              </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div> */}
          <img className='A-image' src='../' alt=''/>
          <div className='text-container'>
            <p className='A-text'>
              I currently live in Utah where I was born and raised. 
              the outdoors are where I try to spend as much time as possible.
              My hobbies include Traveling, Snowboarding, Surfing, 
              FlyFishing, Backpacking, and many more! My wife Melissa and I
              have been married since in Jan. 2013, shortly after we moved 
              to Alaska, where I became an expert Flyfisherman!
            </p>
            <p className='A-text'> 
              I originally chose Web development to be able to work remotely and travel,
              after attending DevMountain and becoming part of this awesome industry, I am excited to advance my development skills,
              my current development experience includes | HTML | CSS | JavaScript | 
              React | NodeJS | Express | PostgreSQL 
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutMe
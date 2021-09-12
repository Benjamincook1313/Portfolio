import './Contact.css';
import React from 'react'

function Contact() {
    return(
      <div className='Contact' id='contact'>
      <h5 className='c-title'>Contact</h5>
      <section className='icon-wrapper'>
        <div className='c-icon'>
          <i class="devicon-linkedin-plain-wordmark colored" href='https://www.linkedin.com/in/benjamincook1313/'></i>
        </div>
        <div className='c-icon'>
            <i class="devicon-github-original-wordmark colored" href='https://github.com/Benjamincook1313'></i>
        </div>
      </section>
    </div>
  )
}

export default Contact
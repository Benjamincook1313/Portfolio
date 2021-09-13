import './Contact.css';
import React from 'react'

function Contact() {
    return(
      <div className='Contact' id='contact'>
      <div className='icon-wrapper'>
      {/* <h4 className='c-title'>Contact</h4> */}
        <div className='c-icon' >
          {/* <i class="devicon-linkedin-plain-wordmark colored"></i> */}
          <i className="devicon-linkedin-plain colored" style={{'fontSize': '45px'}}></i>
          <a href='https://www.linkedin.com/in/benjamincook1313/'>Linked In</a>
        </div>
        <div className='c-icon' >
            {/* <i class="devicon-github-original-wordmark colored"></i> */}
            <i className="devicon-github-original colored" style={{'fontSize': '45px'}}></i>
            <a href='https://github.com/Benjamincook1313' >GitHub</a>
        </div>
      </div>
    </div>
  )
}

export default Contact
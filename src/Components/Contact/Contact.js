import React, { Component } from 'react'
import axios from 'axios';

class Contact extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  sendEmail = async () => { 
    const { name, email, message } = this.state
    await axios.post('/api/sendEmail', { name, email, message })
    this.setState({
      name: '',
      email: '',
      message: ''
    })
  }

  render(){
    const { name, email, message } = this.state
    return(
      <div className='Contact' id='contact'>
        <h1 className='title' style={{color: 'gainsboro'}}>Connect</h1>
        <div className='inputs'>
        <h1 className='link-text' style={{color: 'black'}}>Email</h1>
          <div className='name-email'>
            <input 
              onChange={this.handleChange}
              className='Name'
              placeholder='Name'
              name='name'
              value={name}
            />
            <input
              onChange={this.handleChange} 
              className='email'
              placeholder='Email'
              name='email'
              value={email}
            />
          </div>
          <input 
            onChange={this.handleChange}
            name='message'
            value={message}
            className='message'
            placeholder='Message'
          />
          <button className='send' onClick={() => this.sendEmail()}>Send Email</button>
        </div>
        <div className='links'>
          <div className='link'>
            <p className='link-text'>Facebook</p>
            <a href='https://www.facebook.com/BenjaminCook1313' style={{textDecoration: 'none'}}>
              <i className="devicon-facebook-plain colored"/>
            </a>
          </div>
          <div className='link'>
            <p className='link-text'>linked in</p>
            <a  href='https://www.linkedin.com/in/benjamincook1313/' style={{textDecoration: 'none'}}>
              <img className='img' src='https://image.flaticon.com/icons/svg/174/174857.svg' alt='' />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
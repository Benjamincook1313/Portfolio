import React, { useState } from 'react'
import axios from 'axios';
import './Contact.css';

function Contact() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    const { value } = e.target
    setName(value)
    console.log(value)
  }

  const sendEmail = async () => { 
    await axios.post('/api/sendEmail', { name, email, message })
      setName('')
      setEmail('')
      setMessage('')
  }

    return(
      <div className='Contact' id='contact'>
        <h1 className='title' style={{color: 'gainsboro'}}>Connect</h1>
      <div className='inputs'>
      <h1 className='link-text' style={{color: 'black'}}>Email</h1>
        <div className='name-email'>
          <input onChange={handleChange} className='Name' 
            placeholder='Name' name='name' value={name} />
          <input onChange={handleChange} className='email'
            placeholder='Email' name='email' value={email} />
        </div>
        <input onChange={handleChange} name='message'
          value={message} className='message' placeholder='Message' />
        <button className='send' onClick={() => sendEmail()}>Send Email</button>
      </div>
      <div className='links'>
        <div className='link'>
          <p className='link-text'>LinkedIn</p>
          <a href='https://github.com/Benjamincook1313' style={{textDecoration: 'none'}}>
            <i className="devicon-github-plain colored"/>
          </a>
        </div>
        <div className='link'>
          <div className='icon'>
            <i className="devicon-github-plain colored"></i>
            <p className='icon-text'>GITHUB</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
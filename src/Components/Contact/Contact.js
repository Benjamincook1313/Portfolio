import React, { useState } from 'react'
import axios from 'axios';
import './Contact.css';
import Swal from 'sweetalert2';
import { Button } from 'react-bootstrap';

function Contact() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
    console.log(e.target.value)
  }

  const handleMessage = (e) => {
    setMessage(e.target.value)
  }

  const sendEmail = async () => { 
    console.log(email)
    if(name && email.includes('@')){
      const res = await axios.post('/api/sendEmail', { name, email, message })
      .catch(err => console.log(err))
      if(res.data){
        Swal.fire({type: 'success', title: 'Email Sent', showConfirmButton: false, timer: 2000, toast: true})
      }
        setName('')
        setEmail('')
        setMessage('')
    }
  }

    return(
      <div className='Contact' id='contact'>
        <h1 className='title' style={{color: 'gainsboro'}}>Connect</h1>
      <div className='inputs'>
      <h1 className='link-text' style={{color: 'black'}}>Email</h1>
        <div className='name-email'>
          <input onChange={handleName} className='Name' 
            placeholder='Name' name='name' value={name} />
          <input onChange={handleEmail} className='email'
            placeholder='Email' name='email' value={email} />
        </div>
        <input onChange={handleMessage} name='message'
          value={message} className='message' placeholder='Message' />
        <Button className='send' onClick={sendEmail} variant='secondary' >Send Email</Button>
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
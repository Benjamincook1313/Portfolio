import React from 'react'
import styled from 'styled-components'

const CPage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-family: Roboto;
  background-color: black;
  color: whitesmoke;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 80vw;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  margin: 10px;
`

const Icon = styled.a`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-decoration: unset;
  font-weight: bolder;
`

function Contact() {
  return(
    <CPage className='contact' id='contact'>
      <h1 className='title' style={{color: "white"}}>Connect</h1>
      <Wrapper >
        <Icon href='https://www.linkedin.com/in/benjamincook1313/' style={{cursor: 'pointer'}}>
          <i className="devicon-linkedin-plain colored" style={{'fontSize': '45px'}}/>
          <p>LinkedIn</p>
        </Icon>
        <Icon className='c-icon' style={{cursor: 'pointer'}} href='https://github.com/Benjamincook1313'>
          <i className="devicon-github-original colored" style={{'fontSize': '45px'}}/>
          <p>GitHub</p>
        </Icon>
      </Wrapper>
    </CPage>
  )
}

export default Contact
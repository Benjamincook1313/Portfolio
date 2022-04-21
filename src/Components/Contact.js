import React from 'react'
import styled from 'styled-components'

const CPage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-family: Roboto;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 80vw;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  position: relative;
  top: 8px;
`

const Icon = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: black;
`

function Contact() {
  return(
    <CPage id='Contact'>
      <Wrapper >
        <Icon href='https://www.linkedin.com/in/benjamincook1313/' style={{cursor: 'pointer'}}>
          <i className="devicon-linkedin-plain colored" style={{'fontSize': '45px'}}/>
          <p>LinkedIn</p>
        </Icon>
        <div className='c-icon' href='https://github.com/Benjamincook1313' style={{cursor: 'pointer'}}>
          <i className="devicon-github-original colored" style={{'fontSize': '45px'}}/>
          <p>GitHub</p>
        </div>
      </Wrapper>
    </CPage>
  )
}

export default Contact
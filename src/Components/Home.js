import React from 'react'
import styled from 'styled-components'

const Page = styled.div`
  position: relative;
  background-image: url('https://images.unsplash.com/photo-1531884422565-1b4a26326a31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');
  background-image: url('https://images.unsplash.com/photo-1455156218388-5e61b526818b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');
  background-size: cover;
  background-position: center;
  height: 700px;
  min-height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Roboto,  sans-serif;
`
const Box = styled.div`
  font-size: 3em;
  color: black;
  height: 300px; 
  width: 500px;
  background-color: rgb(255, 255, 255);
  opacity: .8;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 10px 10px 20px 0px;
`
const Name = styled.h1`
  color: rgb(49, 49, 49);
  font-size: 1.7em;
  text-align: center;
`
const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: rgb(49, 49, 49);
  margin-bottom: 35px;
`

function Home() {
    return(
    <Page id='home'>
      <Box>
        <Name> Benjamin Cook </Name>
        <Title> ~ Software Engineer ~ </Title>
      </Box>
    </Page>
  )
}

export default Home;
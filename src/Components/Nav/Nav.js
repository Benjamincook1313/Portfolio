import React from 'react';
import { Dropdown, DropdownButton, Button } from 'react-bootstrap';
import './Nav.css';
import Styled from "styled-components";

const Wrapper = Styled.div`
  margin-right: 50px;
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function Nav(){

  return(
    <div className='nav'>
        <a className='name' href='#home' style={{textDecoration: 'none'}}> Benjamin Cook </a>
        {/* <Wrapper>
          <Button variant='light' href="#about">About</Button>
          <Button variant='light' href="#skills">Skills</Button>
          <Button variant='light' href="#projects">Projects</Button>
          <Button variant='light' href="#contact">Connect</Button>
        </Wrapper> */}
        <DropdownButton className='menu' title='Menu' variant ='secondary'>
          <Dropdown.Item href="#about">About</Dropdown.Item>
          <Dropdown.Item href="#skills">Skills</Dropdown.Item>
          <Dropdown.Item href="#projects">Projects</Dropdown.Item>
          <Dropdown.Item href="#contact">Connect</Dropdown.Item>
        </DropdownButton>
    </div>
  )
};

export default Nav;
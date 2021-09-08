import React, { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import './Nav.css';

function Nav(){

  return(
    <div className='nav'>
        <a className='name' href='#home' style={{textDecoration: 'none'}}> Benjamin Cook </a>
        <DropdownButton className='menu' title='Menu' variant ='secondary' align='end'>
          <Dropdown.Item href="#about">About</Dropdown.Item>
          <Dropdown.Item href="#skills">Skills</Dropdown.Item>
          <Dropdown.Item href="#projects">Projects</Dropdown.Item>
          <Dropdown.Item href="#contact">Contact</Dropdown.Item>
        </DropdownButton>
    </div>
  )
};

export default Nav;
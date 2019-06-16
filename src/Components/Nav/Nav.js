import React, { Component } from 'react'

class Nav extends Component {
  constructor(){
    super()
    this.state = {
      showMenu: false
    }
  }
  render(){
    const { showMenu } = this.state
    return(
      <div>
        <nav className='nav'>
          <a className='name' href='#home' style={{textDecoration: 'none'}}>Benjamin Cook</a>
          <button className='menu' onClick={() => this.setState({showMenu: !showMenu})} >Menu</button>
        </nav>
        {showMenu &&
          <div className='drop-menu'>
            <a className='menu-btn' href='#about' style={{textDecoration: 'none'}}>About Me</a>
            <a className='menu-btn' href='#skills' style={{textDecoration: 'none'}}>Skills</a>
            <a className='menu-btn' href='#projects' style={{textDecoration: 'none'}}>Projects</a>
            <a className='menu-btn' href='#contact' style={{textDecoration: 'none'}}>Contact</a>
          </div>
        }
      </div>
    )
  }
}

export default Nav
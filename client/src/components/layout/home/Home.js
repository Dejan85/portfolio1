import React, { Component } from 'react';
// components
import Logo from './Logo';
import Nav from './Nav';
import NavRightSide from './NavRightSide';
import DropMenu from './DropMenu';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      resetClass: {
        borderLeft: 'none',
        paddingLeft: '1.4rem',
        lineHeight: 1.34
      },
      dropMenu: false
    };
  }

  dropMenu = () => {
    this.setState({
      dropMenu: !this.state.dropMenu
    });
  };

  render() {
    return (
      <div className='home'>
        {this.state.dropMenu && <DropMenu />}
        <a id='nav-toggle' href='#'>
          <span />
        </a>
        <div className='home__menu-button' onClick={this.dropMenu} />

        <div className='home__black-mask'>
          <div className='header-container'>
            <header className='home__header'>
              <Logo />
              <Nav />
            </header>
          </div>
          <div className='home__message'>
            <span className='home__message--span'>Heloo</span>
            <h1 className='home__message--h1'>`m Javascript </h1>
          </div>
        </div>
        <div className='home__blue-mask'>
          <header className='home__header'>
            <NavRightSide />
          </header>
          <div className='home__message' style={this.state.resetClass}>
            <h1 className='home__message--h1'>
              <span className='home__message--h1--span'>Developer</span>
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

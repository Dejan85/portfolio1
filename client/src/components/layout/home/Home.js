import React, { Component } from 'react';
// components
import Logo from './Logo';
import Nav from './Nav';
import NavRightSide from './NavRightSide';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      resetClass: {
        borderLeft: 'none',
        paddingLeft: '1.4rem',
        lineHeight: 1.34
      }
    };
  }

  render() {
    return (
      <div className='home'>
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

import React, { Component } from 'react';
// components
import Logo from './Logo';
import Nav from './Nav';

class Home extends Component {
  render() {
    return (
      <div className='home'>
        <div className='home__black-mask' />
        <div className='home__blue-mask' />
        <div className='container'>
          <header className='home__header'>
            <Logo />
            <Nav />
          </header>
        </div>
        <div className='home__message'>
          <span className='home__message--span'>Heloo</span>
          <h1 className='home__message--h1'>
            `m Javascript{' '}
            <span className='home__message--h1--span'>Developer</span>{' '}
          </h1>
        </div>
      </div>
    );
  }
}

export default Home;

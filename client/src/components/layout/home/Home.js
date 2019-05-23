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
      active: false
    };
  }

  handleDropMenu = () => {
    this.setState({
      active: !this.state.active
    });
  };

  render() {
    return (
      <div className='home'>
        <div className='home__left'>
          <header className='home__header'>
            <Logo />
            <Nav />
          </header>
          <div className='home__message'>
            <p className='home__p'>Hello </p>
            <h1 className='home__h1'>`m Javascript</h1>
          </div>
        </div>
        <div className='home__right'>
          <header className='home__header home__header--right'>
            <NavRightSide />
            <div id='nav-toggle' className={this.state.active ? 'active' : ''}>
              <span onClick={this.handleDropMenu} />
            </div>
          </header>
          <div className='home__message border--none'>
            <p className='home__p display--none'>Hello I`am</p>
            <h1 className='home__h1 color--dark'>Developer</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

import React, { Component } from "react";
// components
import Logo from "./Logo";
import Nav from "./Nav";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="container">
          <header className="home__header">
            <Logo />
            <Nav />
          </header>
        </div>
        <div className="home__message">
          <span className="home__message--span">Heloo</span>
          <h1 className="home__message--h1">I`m Developer </h1>
        </div>
      </div>
    );
  }
}

export default Home;

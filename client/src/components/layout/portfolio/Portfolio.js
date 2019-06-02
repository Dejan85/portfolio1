import React, { Component } from "react";
import { Element } from "react-scroll";
// images
import pigGame from "../../../sass/images/pigGame.jpg";
import colorGame from "../../../sass/images/colorGame.jpg";
import toDoApp from "../../../sass/images/toDoApp.jpg";
import node from "../../../sass/images/node3.jpg";
import bankApp from "../../../sass/images/bankapp.jpg";

import pigGame_grey from "../../../sass/images/pigGame_grey.jpg";
import colorGame_grey from "../../../sass/images/colorGame_grey.jpg";
import toDoApp_grey from "../../../sass/images/toDoApp_grey.jpg";

// import preview from '../../../sass/images/preview.svg';
//components
import Line from "../utilities/Line";

class Portfolio extends Component {
  constructor() {
    super();

    this.state = {};
  }

  handleActive = e => {
    const list = [...this.refs.list.children];
    list.forEach(item => {
      item.classList.remove("active");
      e.target.classList.add("active");
    });
  };

  render() {
    return (
      <div className="portfolio">
        {/* <Element name="portfolio" /> */}
        <h2 className="portfolio__h2">All my works</h2>
        <Line />
        <p className="portfolio__p">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit enean commodo
          eget dolor aenean massa eget dolor aenean massa
        </p>
        <div className="portfolio__content">
          <ul className="portfolio__nav container" ref="list">
            <li
              className="portfolio__nav--item active"
              onClick={this.handleActive}>
              All
            </li>
            <li className="portfolio__nav--item" onClick={this.handleActive}>
              Html/Css
            </li>
            <li className="portfolio__nav--item" onClick={this.handleActive}>
              Javascript
            </li>
            <li className="portfolio__nav--item" onClick={this.handleActive}>
              React/Redux
            </li>
            <li className="portfolio__nav--item" onClick={this.handleActive}>
              Node/Express
            </li>
            <li className="portfolio__nav--item" onClick={this.handleActive}>
              Fullstack
            </li>
          </ul>
          <div className="portfolio__projects">
            <div className="portfolio__box box-1">
              <div className="portfolio__box--mask opacity">
                <div className="portfolio__box--btn">
                  <i className="far fa-eye portfolio__box--icon" />
                  <p className="portfolio__box--p">Preview</p>
                </div>

                <div className="portfolio__box--btn">
                  <i className="fas fa-info portfolio__box--icon" />
                  <p className="portfolio__box--p">Description</p>
                </div>
              </div>
              <img src={pigGame} alt="slika" />
            </div>

            <div className="portfolio__box box-2">
              <div className="portfolio__box--mask opacity">
                <div className="portfolio__box--btn">
                  <i className="far fa-eye portfolio__box--icon" />
                  <p className="portfolio__box--p">Preview</p>
                </div>

                <div className="portfolio__box--btn">
                  <i className="fas fa-info portfolio__box--icon" />
                  <p className="portfolio__box--p">Description</p>
                </div>
              </div>

              <img src={bankApp} alt="slika" />
            </div>

            <div className="portfolio__box box-3">
              <div className="portfolio__box--mask opacity">
                <div className="portfolio__box--btn">
                  <i className="far fa-eye portfolio__box--icon" />
                  <p className="portfolio__box--p">Preview</p>
                </div>

                <div className="portfolio__box--btn">
                  <i className="fas fa-info portfolio__box--icon" />
                  <p className="portfolio__box--p">Description</p>
                </div>
              </div>

              <img src={toDoApp_grey} alt="slika" />
            </div>

            <div className="portfolio__box box-4">
              <div className="portfolio__box--mask opacity">
                <div className="portfolio__box--btn">
                  <i className="far fa-eye portfolio__box--icon" />
                  <p className="portfolio__box--p">Preview</p>
                </div>

                <div className="portfolio__box--btn">
                  <i className="fas fa-info portfolio__box--icon" />
                  <p className="portfolio__box--p">Description</p>
                </div>
              </div>

              <img src={node} alt="slika" />
            </div>

            <div className="portfolio__box box-5">
              <div className="portfolio__box--mask opacity">
                <div className="portfolio__box--btn">
                  <i className="far fa-eye portfolio__box--icon" />
                  <p className="portfolio__box--p">Preview</p>
                </div>

                <div className="portfolio__box--btn">
                  <i className="fas fa-info portfolio__box--icon" />
                  <p className="portfolio__box--p">Description</p>
                </div>
              </div>

              <img src={colorGame} alt="slika" />
            </div>

            <div className="portfolio__box box-6">
              <div className="portfolio__box--mask opacity">
                <div className="portfolio__box--btn">
                  <i className="far fa-eye portfolio__box--icon" />
                  <p className="portfolio__box--p">Preview</p>
                </div>

                <div className="portfolio__box--btn">
                  <i className="fas fa-info portfolio__box--icon" />
                  <p className="portfolio__box--p">Description</p>
                </div>
              </div>

              <img src={toDoApp} alt="slika" />
            </div>

            <div className="portfolio__box box-7">
              <div className="portfolio__box--mask opacity">
                <div className="portfolio__box--btn">
                  <i className="far fa-eye portfolio__box--icon" />
                  <p className="portfolio__box--p">Preview</p>
                </div>

                <div className="portfolio__box--btn">
                  <i className="fas fa-info portfolio__box--icon" />
                  <p className="portfolio__box--p">Description</p>
                </div>
              </div>

              <img src={colorGame_grey} alt="slika" />
            </div>

            <div className="portfolio__box box-8">
              <div className="portfolio__box--mask opacity">
                <div className="portfolio__box--btn">
                  <i className="far fa-eye portfolio__box--icon" />
                  <p className="portfolio__box--p">Preview</p>
                </div>

                <div className="portfolio__box--btn">
                  <i className="fas fa-info portfolio__box--icon" />
                  <p className="portfolio__box--p">Description</p>
                </div>
              </div>
              <img src={pigGame_grey} alt="slika" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;

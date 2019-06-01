import React, { Component } from "react";

// components
import Line from "../utilities/Line";

class Services extends Component {
  render() {
    return (
      <div className="services">
        <div className="services__left-box">
          <div className="services__content">
            <h2 className="services__h2">ART OF WORK</h2>
            <Line />

            <div className="services__box">
              <div className="services__icon">
                <i className="fas fa-pager" />
              </div>
              <div className="services__box__container">
                <h3 className="services__h3">Static Page</h3>
                <p className="services__p">
                  We at Caliber design and create brilliance at work in a
                  uniquely stylish process.
                </p>
              </div>
            </div>

            <div className="services__box">
              <div className="services__icon">
                {/* <i className='fas fa-desktop' /> */}
                <i className="fas fa-window-maximize" />
              </div>
              <div className="services__box__container">
                <h3 className="services__h3">Web App</h3>
                <p className="services__p">
                  We at Caliber design and create brilliance at work in a
                  uniquely stylish process.
                </p>
              </div>
            </div>

            <div className="services__box">
              <div className="services__icon">
                <i className="far fa-object-group" />
              </div>
              <div className="services__box__container">
                <h3 className="services__h3">Fullstack </h3>
                <p className="services__p">
                  We at Caliber design and create brilliance at work in a
                  uniquely stylish process.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="services__right-box">
          <div className="services__decoration-div" />
        </div>
      </div>
    );
  }
}

export default Services;

import React, { Component } from "react";

// components
import Line from "../utilities/Line";

class Services extends Component {
  render() {
    return (
      <div className="services">
        <div className="services__left-box">
          <div className="services__content">
            {/* <h2 className="services__h2">ART OF WORK</h2> */}
            <h2 className="services__h2">Sta radim?</h2>
            <Line />

            <div className="services__box">
              <div className="services__icon">
                <i className="fas fa-pager" />
              </div>
              <div className="services__box__container">
                {/* <h3 className="services__h3">Static Page</h3> */}
                <h3 className="services__h3">Web sajtove</h3>
                <p className="services__p">
                  Prvi moj napravljen sajt je bio davne 2010. godine.
                </p>
              </div>
            </div>

            <div className="services__box">
              <div className="services__icon">
                {/* <i className='fas fa-desktop' /> */}
                <i className="fas fa-window-maximize" />
              </div>
              <div className="services__box__container">
                {/* <h3 className="services__h3">Web App</h3> */}
                <h3 className="services__h3">Web Aplikacije</h3>
                <p className="services__p">
                  Web aplikacije bazirane na frontendu radim skoro 2 godine.
                  Najvise radim React js. Takodje radim applikacije i u cistom
                  Javascriptu.
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
                  Fullstack radim zadnjih godinu dana. Nije mi primarna oblast,
                  ali tezim ka tome da usavrsim MERN do maksimuma.
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

import React, { Component } from "react";

//components
import Line from "../utils/Line";

class About extends Component {
  render() {
    return (
      <div className="about container">
        {/* <h2 className="about__h2">Why Choose Me</h2> */}
        <h2 className="about__h2">Zasto ja...?</h2>
        <Line />
        <p className="about__p">
          Ja jednostavno uzivam u programiranju. Neko pusti film da se opusti,
          ja sednem i kodiram. Vrlo sam posvecen poslu, zasto i nebi kad mi
          posao nije posao.
        </p>
        <div className="about__content">
          <div className="about__box">
            <div className="about__icon--container">
              <i
                className="fab fa-html5 about__icon"
                style={{ color: "#F16529" }}
              />
            </div>
            <div className="about__box--container">
              <h3 className="about__h3">Html/Css/Sass</h3>
              <p className="about__box__p">
                Prvo moje upoznavanje sa ove dve tehnologije je bilo 2010.
                godine.
              </p>
            </div>
          </div>

          <div className="about__box">
            <div className="about__icon--container">
              <i
                className="fab fa-js-square about__icon"
                style={{ color: "#F7DF1D" }}
              />
            </div>
            <div className="about__box--container">
              <h3 className="about__h3">Javascript</h3>
              <p className="about__box__p">
                Javascript sam poceo da radim krajem 2017. godine. Zavrsio sam
                kurs Krojaceva skola.
              </p>
            </div>
          </div>

          <div className="about__box">
            <div className="about__icon--container">
              <i
                className="fab fa-react about__icon"
                style={{ color: "#53C1DE" }}
              />
            </div>
            <div className="about__box--container">
              <h3 className="about__h3">React/Redux</h3>
              <p className="about__box__p">
                React je dosao na moja vrata sredinom 2018. Od tada smo
                nerazdvojni.
              </p>
            </div>
          </div>

          <div className="about__box">
            <div className="about__icon--container">
              <i
                className="fab fa-node-js about__icon"
                style={{ color: "#77B163" }}
              />
            </div>
            <div className="about__box--container">
              <h3 className="about__h3">Node/Express</h3>
              <p className="about__box__p">
                Node jako volim, ali ga ne radim puno. Vise sam posvecen
                frontendu, a node koristim kada mi zatreba.
              </p>
            </div>
          </div>

          <div className="about__box">
            <div className="about__icon--container">
              <i
                className="fas fa-database about__icon"
                style={{ color: "#16A54E" }}
              />
            </div>
            <div className="about__box--container">
              <h3 className="about__h3">Mongo Db</h3>
              <p className="about__box__p">Mongo koristim koliko i Node js.</p>
            </div>
          </div>

          <div className="about__box">
            <div className="about__icon--container">
              <i className="fas fa-skiing about__icon" />
              {/* <i className='fab fa-linux about__icon' /> */}
              {/* <i class='fab fa-suse about__icon' /> */}
            </div>
            <div className="about__box--container">
              <h3 className="about__h3">Other</h3>
              <p className="about__box__p">
                Racunarima se bavim 15. godina. Inace sam IT inzenjer
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;

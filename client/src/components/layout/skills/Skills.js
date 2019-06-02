import React, { Component } from "react";

// components
import Line from "../utilities/Line";

// methods
import { percentageCircle } from "../utilities/percentageCircle";

class Skills extends Component {
  componentDidMount() {
    const canvas = this.refs.canvas;
    const canvas2 = this.refs.canvas2;
    const canvas3 = this.refs.canvas3;

    percentageCircle(canvas, canvas2, canvas3);
  }

  render() {
    return (
      <div className="skills">
        <div className="skills__mask" />
        <h2 className="skills__h2">MY CAPABILITIES</h2>
        <Line />
        <div className="container">
          <p className="skills__p">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit enean
            commodo eget dolor aenean massa eget dolor aenean massa
          </p>
        </div>
        <div className="skills__content container">
          <div className="skills__box">
            <canvas
              ref="canvas"
              width={320}
              height={320}
              className="skills__canvas"
            />
            <div className="skills__progress" />
            <div className="skills__description">
              <h5 className="skills__h5">Html/Css</h5>
              <div className="skills__line" />
              <p className="skills__description__p">
                This crash course in layers reveals or shows you in photoshop
                and create wonders in graphics industry...
              </p>
            </div>
          </div>

          <div className="skills__box">
            <canvas
              ref="canvas2"
              width={320}
              height={320}
              className="skills__canvas"
            />
            <div className="skills__progress" />
            <div className="skills__description">
              <h5 className="skills__h5">Javascript/React</h5>
              <div className="skills__line" />
              <p className="skills__description__p">
                This crash course in layers reveals or shows you in photoshop
                and create wonders in graphics industry...
              </p>
            </div>
          </div>

          <div className="skills__box">
            <canvas
              ref="canvas3"
              width={320}
              height={320}
              className="skills__canvas"
            />
            <div className="skills__progress" />
            <div className="skills__description">
              <h5 className="skills__h5">Node/Mongo</h5>
              <div className="skills__line" />
              <p className="skills__description__p">
                This crash course in layers reveals or shows you in photoshop
                and create wonders in graphics industry...
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;

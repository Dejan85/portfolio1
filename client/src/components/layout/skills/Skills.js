import React, { Component } from "react";

// components
import Line from "../utilities/Line";

class Skills extends Component {
  render() {
    return (
      <div className="skills">
        <h2 className="skills__h2">Skills</h2>
        <Line />
        <p className="skills__p">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit enean commodo
          eget dolor aenean massa eget dolor aenean massa
        </p>
        <div className="skills__box">
          <div className="skills__progress">90%</div>
          <div className="skills__description">
            <h5 className="skills__h5">WEB DESIGN</h5>
            <div className="skills__line" />
            <p className="skills__p">
              This crash course in layers reveals or shows you in photoshop and
              create wonders in graphics industry...
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;

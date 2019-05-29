import React, { Component } from "react";

import avatar from "../../../sass/images/avatar.jpg";

// component
import Line from "../utilities/Line";

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="contact__mask" />
        <h2 className="contact__h2">Contact Me</h2>
        <Line />
        <p className="contact__p">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit enean commodo
          eget dolor aenean massa eget dolor aenean massa
        </p>

        <div className="contact__content container">
          <div className="contact__image">
            <img className="contact__image--img" alt="slika" src={avatar} />
          </div>
          <div className="contact__form">
            <form>
              <div className="contact__input-holder">
                <input placeholder="Your Name" />
              </div>
              <div className="contact__input-holder">
                <input placeholder="Your Email" />
              </div>
              <div className="contact__input-holder">
                <input placeholder="Subject" />
              </div>
              <div className="contact__input-holder">
                <textarea rows="10">Message</textarea>
              </div>
              <div className="contact__input-holder">
                <button className="contact__btn">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;

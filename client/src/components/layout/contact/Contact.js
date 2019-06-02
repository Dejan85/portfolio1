import React, { Component } from "react";

import avatar from "../../../sass/images/avatar.jpg";
import avatar_2 from "../../../sass/images/avatar_2.jpg";
import avatar_3 from "../../../sass/images/avatar_3.jpg";
import avatar_4 from "../../../sass/images/avatar_4.jpg";

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
          <div className="contact__form">
            <div className="contact__image">
              <img className="contact__image--img" alt="slika" src={avatar_2} />
            </div>
            <form>
              <input className="contact__input" placeholder="Your Name" />
              <input className="contact__input" placeholder="Your Email" />
              <input className="contact__input" placeholder="Subject" />
              <textarea className="contact__input" rows="8">
                Message
              </textarea>
              <button className="contact__btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;

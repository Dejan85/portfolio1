import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content container">
        <div className="footer__box">
          <h6 className="footer__h6">Lets talk about</h6>
          <p className="footer__p">
            Bilo mi je izuzetno drago da smo se upoznali. Za sva pitanja
            osecajte se slobodno da me kontaktirate. Srdacan Pozdrav!
          </p>
        </div>
        <div className="footer__box">
          <h6 className="footer__h6">Links</h6>
          <ul className="footer__list">
            <li className="footer__item">
              <i className="fas fa-long-arrow-alt-right" />
              Home
            </li>
            <li className="footer__item">
              <i className="fas fa-long-arrow-alt-right" />
              About
            </li>
            <li className="footer__item">
              <i className="fas fa-long-arrow-alt-right" />
              Services
            </li>
            <li className="footer__item">
              <i className="fas fa-long-arrow-alt-right" />
              Home
            </li>
            <li className="footer__item">
              <i className="fas fa-long-arrow-alt-right" />
              Popular
            </li>
            <li className="footer__item">
              <i className="fas fa-long-arrow-alt-right" />
              Skills
            </li>
            <li className="footer__item">
              <i className="fas fa-long-arrow-alt-right" />
              Portfolio
            </li>
            <li className="footer__item">
              <i className="fas fa-long-arrow-alt-right" />
              Blog
            </li>
            <li className="footer__item">
              <i className="fas fa-long-arrow-alt-right" />
              Contact
            </li>
          </ul>
        </div>
        <div className="footer__box">
          <h6 className="footer__h6">Services</h6>
          <ul className="footer__list">
            <li className="footer__item">
              <i className="fas fa-long-arrow-alt-right" />
              Static Page
            </li>
            <li className="footer__item">
              <i className="fas fa-long-arrow-alt-right" />
              Responsive Page
            </li>
            <li className="footer__item">
              <i className="fas fa-long-arrow-alt-right" />
              Rest App
            </li>
            <li className="footer__item">
              <i className="fas fa-long-arrow-alt-right" />
              Crud App
            </li>
            <li className="footer__item">
              <i className="fas fa-long-arrow-alt-right" />
              Fullstack
            </li>
          </ul>
        </div>
        <div className="footer__box">
          <h6 className="footer__h6">Have a Question?</h6>
          <ul className="footer__list">
            <li className="footer__item">
              <i className="fab fa-google" />
              xypnotica@gmail.com
            </li>
            <li className="footer__item">
              <i className="fas fa-phone" />
              069/1907978
            </li>
            <li className="footer__item">
              <i className="fab fa-viber" />
              069/1907978
            </li>
            <li className="footer__item">
              <i className="fas fa-city" />
              Obrenovac
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

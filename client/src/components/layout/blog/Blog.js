import React, { Component } from "react";
import { Link } from "react-router-dom";

// components
import Line from "../utilities/Line";

// image
import pigGame_grey from "../../../sass/images/pigGame_grey.jpg";
import colorGame_grey from "../../../sass/images/colorGame_grey.jpg";

class Blog extends Component {
  render() {
    return (
      <div className="blog container">
        {/* <h2 className="blog__h2">LATEST BLOG</h2> */}
        <h2 className="blog__h2">Moji Blogovi</h2>
        <Line />
        <p className="blog__p">
          Pratite moje aktivnosti i generalno aktivnosti iz sveta IT industrije.
        </p>

        <div className="blog__content container">
          <div className="blog__image">
            <div className="blog__image--mask" />
            <img src={pigGame_grey} alt="slika" />
          </div>
          <div className="blog__description">
            <span className="blog__description--span">28TH AUGUST 2019</span>
            <h6 className="blog__description--h6">
              TEN AMAZING AND STRANGE PICTURES BY PROFESSIONALS
            </h6>
            <p className="blog__description--p">
              Donec pede justo, fringilla, aliquet nec, vulputatee egerdiet
              erdiett arcu. In justo, rhoncus ut, imperdiet a, venenatis
              vitaerdiet erde justo. llam dictum felis eu pede mollis pretium
              diet a, venenatis vita sto. Nullam dictum felis eu pede mollis
              pretiumdiet a, venenatis ie ust. ullam dictum felis eu pedemol
              iumpretium ieta...
            </p>
            <Link className="blog__description--link" to="/">
              Read More
            </Link>
          </div>
        </div>

        <div className="blog__content container">
          <div className="blog__image">
            <div className="blog__image--mask" />
            <img src={colorGame_grey} alt="slika" />
          </div>
          <div className="blog__description">
            <span className="blog__description--span">28TH AUGUST 2019</span>
            <h6 className="blog__description--h6">
              TEN AMAZING AND STRANGE PICTURES BY PROFESSIONALS
            </h6>
            <p className="blog__description--p">
              Donec pede justo, fringilla, aliquet nec, vulputatee egerdiet
              erdiett arcu. In justo, rhoncus ut, imperdiet a, venenatis
              vitaerdiet erde justo. llam dictum felis eu pede mollis pretium
              diet a, venenatis vita sto. Nullam dictum felis eu pede mollis
              pretiumdiet a, venenatis ie ust. ullam dictum felis eu pedemol
              iumpretium ieta...
            </p>
            <Link className="blog__description--link" to="/">
              Read More
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;

import React, { Component } from 'react';

// components
import Line from '../utilities/Line';

class Skills extends Component {
  componentDidMount() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');
    let no = 0;
    const pointToFill = 4.72;
    const cw = ctx.canvas.width;
    const ch = ctx.canvas.height;
    let diff;

    function fillCounter() {
      diff = (no / 100) * Math.PI * 2 * 10;
      ctx.clearRect(0, 0, cw, ch);
      ctx.lineWidth = 15;
      ctx.fillStyle = 'white';
      ctx.strokeStyle = '#29b6f6';
      ctx.textAlign = 'center';
      ctx.font = '25px monospace';
      ctx.fillText(no, 100, 110);

      ctx.beginPath();
      ctx.arc(100, 100, 120, pointToFill, diff / 10 + pointToFill);

      ctx.stroke();

      if (no >= 100) {
        clearTimeout(fill);
      }

      no++;
    }
    const fill = setInterval(fillCounter, 50);
  }

  render() {
    return (
      <div className='skills'>
        <div className='skills__mask' />
        <h2 className='skills__h2'>Skills</h2>
        <Line />
        <div className='container'>
          <p className='skills__p'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit enean
            commodo eget dolor aenean massa eget dolor aenean massa
          </p>
        </div>
        <div className='skills__content container'>
          <canvas ref='canvas' width={440} height={440} />

          {/* <div className='skills__box'>
            <div className='skills__progress'>
              <div className='skills__progress--border' />
              <p className='skills__progress--p'>90%</p>
            </div>
          </div> */}

          {/* <div className='skills__box'>
            <div className='skills__progress--border'>
              <div className='skills__progress'>
                <p className='skills__progress--p'>70%</p>
              </div>
            </div>
            <div className='skills__description'>
              <h5 className='skills__h5'>Javascript/React</h5>
              <div className='skills__line' />
              <p className='skills__description--p'>
                This crash course in layers reveals or shows you in photoshop
                and create wonders in graphics industry...
              </p>
            </div>
          </div>

          <div className='skills__box'>
            <div className='skills__progress--border'>
              <div className='skills__progress'>
                <p className='skills__progress--p'>20%</p>
              </div>
            </div>
            <div className='skills__description'>
              <h5 className='skills__h5'>Node/Mongo</h5>
              <div className='skills__line' />
              <p className='skills__description--p'>
                This crash course in layers reveals or shows you in photoshop
                and create wonders in graphics industry...
              </p>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Skills;

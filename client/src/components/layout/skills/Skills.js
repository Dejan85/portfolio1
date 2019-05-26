import React, { Component } from 'react';

// components
import Line from '../utilities/Line';

class Skills extends Component {
  componentDidMount() {
    const canvas = this.refs.canvas;
    const canvas2 = this.refs.canvas;
    const canvas3 = this.refs.canvas;

    const ctx = canvas.getContext('2d');
    const ctx2 = canvas2.getContext('2d');
    const ctx3 = canvas3.getContext('2d');

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
      ctx.padding = 10;
      ctx.strokeStyle = '#29b6f6';
      ctx.textAlign = 'center';
      ctx.font = '3.7rem monospace';
      ctx.fillText(no + '%', 165, 165);

      ctx.beginPath();
      ctx.arc(160, 160, 150, pointToFill, diff / 10 + pointToFill);

      ctx.stroke();

      if (no >= 80) {
        clearTimeout(fill);
      }

      no++;
    }
    const fill = setInterval(fillCounter, 10);
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
          <div className='skills__box'>
            <canvas
              ref='canvas'
              width={320}
              height={320}
              className='skills__canvas'
            />
            <div className='skills__progress' />
          </div>

          <div className='skills__box'>
            <canvas
              ref='canvas2'
              width={320}
              height={320}
              className='skills__canvas'
            />
            <div className='skills__progress' />
          </div>

          <div className='skills__box'>
            <canvas
              ref='canvas3'
              width={320}
              height={320}
              className='skills__canvas'
            />
            <div className='skills__progress' />
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;

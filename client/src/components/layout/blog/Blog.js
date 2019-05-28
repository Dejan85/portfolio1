import React, { Component } from 'react';

// components
import Line from '../utilities/Line';

class Blog extends Component {
  render() {
    return (
      <div className='blog container'>
        <h2 className='blog__h2'>LATEST BLOG</h2>
        <Line />
        <p className='blog__p'>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit enean commodo
          eget dolor aenean massa eget dolor aenean massa
        </p>
      </div>
    );
  }
}

export default Blog;

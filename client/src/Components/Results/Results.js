import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Carousel } from 'react-responsive-carousel';

class PreFilter extends Component {
  constructor({ results }) {
    super();
    this.results = results;
  }

  render() {
    console.log(this.results);
    return (
      <Carousel>
        <div>
          <img src="https://demo.phpgang.com/crop-images/demo_files/pool.jpg" alt="test1" />
          Legend1
          <p className="legend1">
          </p>
        </div>
        <div>
          <img src="https://demo.phpgang.com/crop-images/demo_files/pool.jpg" alt="test2" />
          <p className="legend2">
            Legend2
          </p>
        </div>
        <div>
          <img src="https://demo.phpgang.com/crop-images/demo_files/pool.jpg" alt="test3" />
          <p className="legend3">
            Legend3
          </p>
        </div>
      </Carousel>
    );
  }

}

export default PreFilter;

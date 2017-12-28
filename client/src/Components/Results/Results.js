import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Carousel } from 'react-responsive-carousel';

// import GeneralQuestions from '../GeneralQuestions/GeneralQuestions';

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


// var React = require('react');
// var Carousel = require('react-responsive-carousel').Carousel;

// var DemoCarousel = React.createClass({
//     render() {
//         return (
//             <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
//                 <div>
//                     <img src="assets/1.jpeg" />
//                     <p className="legend">Legend 1</p>
//                 </div>
//                 <div>
//                     <img src="assets/2.jpeg" />
//                     <p className="legend">Legend 2</p>
//                 </div>
//                 <div>
//                     <img src="assets/3.jpeg" />
//                     <p className="legend">Legend 3</p>
//                 </div>
//                 <div>
//                     <img src="assets/4.jpeg" />
//                     <p className="legend">Legend 4</p>
//                 </div>
//                 <div>
//                     <img src="assets/5.jpeg" />
//                     <p className="legend">Legend 5</p>
//                 </div>
//                 <div>
//                     <img src="assets/6.jpeg" />
//                     <p className="legend">Legend 6</p>
//                 </div>
//             </Carousel>
//         );
//     }
// });
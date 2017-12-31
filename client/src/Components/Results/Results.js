import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/main.css';
import Result from '../Result/Result';
import { Carousel } from 'react-responsive-carousel';

class PreFilter extends Component {
  constructor({ items }) {
    super();
    this.items = items;
    this.renderedItems = this.items.map((item, index) =>
      <Result key={index} item={item} />
    );
  }

  render() {

    return (
      <Carousel showThumbs={false} showIndicators={false} showArrows={true}>
        {this.renderedItems}
      </Carousel>
    );
  }

}

export default PreFilter;

import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/main.css';
import Result from '../Result/Result';
import NoItemsFound from '../NoItemsFound/NoItemsFound';

class PreFilter extends Component {
  constructor({ items }) {
    super();
    this.renderedItems = items.map((item, index) =>
      <Result key={index} item={item} />
    );
  }

  render() {
    let itemsFound = !!this.renderedItems.length;

    console.log(itemsFound);

    return (
      <div>
        {itemsFound && <Carousel showThumbs={false} showIndicators={false} showArrows={true}>
          {this.renderedItems}
        </Carousel>}
        {!itemsFound && <NoItemsFound />}
      </div>
    );
  }

}

export default PreFilter;

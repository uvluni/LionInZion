import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/main.css';
import LoadProgress from '../LoadProgress/LoadProgress';
import Result from '../Result/Result';
import NoItemsFound from '../NoItemsFound/NoItemsFound';
import style from './Results.css';


class PreFilter extends Component {
  constructor({ items }) {
    super();
    this.renderedItems = items.map((item, index) =>
      <Result key={index} item={item} />
    );
    this.state = {
      showProgress: true
    }
    setTimeout(() => {
      this.setState({ showProgress: false });
    }, 2000);

  }

  render() {
    let itemsFound = !!this.renderedItems.length;

    return (
      <div>
        <button className={style.back} onClick={() => document.location.reload()}>↶</button>
        {this.state.showProgress && <LoadProgress />}
        {itemsFound && <Carousel showThumbs={false} showIndicators={false} showArrows={true}>
          {this.renderedItems}
        </Carousel>}
        {!itemsFound && <NoItemsFound />}
      </div>
    );
  }

}

export default PreFilter;

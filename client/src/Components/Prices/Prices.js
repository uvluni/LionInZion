import React from 'react';
import style from './Prices.css';

const Prices = ({ prices }) => {
  let pricesList = prices.map((element) => {
    let price = <p><strong>{element.amount}</strong>: {element.total}</p>
    return price;
  }
  );

  return (
    <div className={style.pricesList}>
      {pricesList}
    </div>
  );
};

export default Prices;

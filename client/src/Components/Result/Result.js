import React from 'react';
import ReactStars from 'react-stars';

import style from './Result.css';

const Result = ({ item }) => {

  return (
    <div className={style.wrapper}>
      <h3 className={style.title}>{item.title}</h3>
      <img src={item.imgUrl} alt={item.title} />
      <div className={style.contentWrapper}>
        <h4 className={style.seller}>Seller: <span>{item.seller.user}</span></h4>
        <div className={style.ratingWrapper}>
          <ReactStars value={item.seller.rating} color2={'#7ABA71'} edit={false} char={'🍁'} size={'20px'} />
          ({item.seller.reviews} reviews)
        </div>
        <h4>1: 120  | 3: 350  | 5: 450  | 10: 850</h4>
        <p>Details: {item.text}</p>
      </div >
    </div >
  );
};

export default Result;

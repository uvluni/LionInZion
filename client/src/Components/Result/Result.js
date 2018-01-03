import React from 'react';
import ReactStars from 'react-stars';
import Prices from '../Prices/Prices'
import style from './Result.css';

const Result = ({ item }) => {

  let reviews = item.userId.receivedReviews;
  let sum = reviews.map(el => el.rating).reduce((max, cur) => (max + cur), 0);
  let average = sum / reviews.length;

  return (
    <div className={style.wrapper}>
      <img className={style.image} src={item.imageUrl} alt={item.title} />
      <h4 className={style.title}>{item.title}</h4>
      <div className={style.contentWrapper}>
        <h4 className={style.seller}>
          <span>@{item.userId.email.split('@')[0]}</span>
          <div className={style.ratingWrapper}>
            <ReactStars className={style.stars} value={average} color2={'#7ABA71'} edit={false} char={'🍁'} size={20} />
            ({reviews.length} reviews)
          </div>
        </h4>
        <Prices prices={item.price} />
        <p>{item.generalDesc}</p>
      </div >
    </div >
  );
};

export default Result;

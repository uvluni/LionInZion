import React from 'react';
import ReactStars from 'react-stars';
import Prices from '../Prices/Prices'
import style from './Result.css';

const Result = ({ item }) => {

  return (
    <div className={style.wrapper}>
      <img className={style.image} src={item.imageUrl} alt={item.title} />
      <h4 className={style.title}>{item.title}</h4>
      <div className={style.contentWrapper}>
        {/* <h4 className={style.seller}>Seller: <span>{item.seller.user}</span></h4> */}
        <div className={style.ratingWrapper}>
          {/* <ReactStars value={item.seller.rating} color2={'#7ABA71'} edit={false} char={'🍁'} size={'20px'} /> */}
          {/* ({item.seller.reviews} reviews) */}
        </div>
        <Prices prices={item.price} />
        <p>{item.generalDesc}</p>
      </div >
    </div >
  );
};

export default Result;

import React from 'react';

const Result = ({ item }) => {
  return (
    <div>
      <img src={item.imgUrl} alt={item.title} />
      <p>
        {item.title}
      </p>
    </div>
  );
};

export default Result;

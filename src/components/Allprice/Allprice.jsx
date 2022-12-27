import React from 'react';

const Allprice = ({ contracts }) => {
  let price = 0;
  contracts.forEach((item) => (price += +item.Price));

  return (
    <div className="all-price">
      Общая стоимость:
      <span>{price} руб.</span>
    </div>
  );
};

export default Allprice;

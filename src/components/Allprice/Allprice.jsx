import React from 'react';

const Allprice = ({ contracts, typeContract }) => {
  let price = 0;
  contracts.filter((contract) => contract.typeContract === typeContract).forEach((item) => (price += +item.Price));

  return (
    <div className="all-price">
      Общая стоимость:
      <span>{price} руб.</span>
    </div>
  );
};

export default Allprice;

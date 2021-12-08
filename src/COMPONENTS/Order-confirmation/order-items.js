import React from 'react';

const OrderItems = ({data: {imageUrl, name, quantity, price}}) => {

  return (
    <div>
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl}/>
      </div>
      <span className='name'>{name}</span>

      <span className='quantity'>
        <span className='value'>x{quantity}</span>
      </span>

      <span className='price'>${price}</span>


    </div>
    </div>
  )
}

export default OrderItems;

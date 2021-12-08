import React, {useEffect, useContext} from 'react';
import {appContext} from '../../Context/context.js';
import './cart-item.scss';

const CartItem = ( {item: {id, imageUrl, name, price, quantity}} ) => {

  const {data, actions} = useContext(appContext);
  useEffect(() => {
    console.log(data.cartItems)
  }, [data.cartItems])
  
  return (
    <div className='cart-item'>
      <img src={imageUrl} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>${price} x qty: {quantity}</span>
      </div>
    </div>
  )
}

export default CartItem

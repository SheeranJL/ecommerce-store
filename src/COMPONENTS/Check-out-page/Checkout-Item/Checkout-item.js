import './Checkout-item.scss';
import React, {useContext} from 'react';
import {appContext} from '../../../Context/context.js';

const CheckOutItem = ({id, item, imageUrl, name, price, quantity}) => {

  const {actions: {decreaseQuantity, increaseQuantity, removeItemFromCart, setCartItems, saveToStorage}, data: {cartItems}} = useContext(appContext);

  function handleDecrease() {
    const list = decreaseQuantity(cartItems, item);
    setCartItems(list);
  }

  function handleIncrease() {
    const list = increaseQuantity(cartItems, item);
    setCartItems(list);
  }

  function handleRemove () {
    const list = removeItemFromCart(cartItems, item)
     setCartItems(list);
  }

  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl}/>
      </div>
      <span className='name'>{name}</span>

      <span className='quantity'>
        <div className='arrow' onClick={() => handleDecrease()}>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => handleIncrease()}>&#10095;</div>
      </span>

      <span className='price'>${price}</span>
      <div className='remove-button' onClick={() => handleRemove()}>&#10005;</div>

    </div>
  )
}

export default CheckOutItem

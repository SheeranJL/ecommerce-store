import React, {useContext, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {appContext} from '../../Context/context.js';
import './cart-dropdown.scss';
import CartItem from '../Cart-item/cart-item.js';
import CustomButton from '../Buttons/buttons.js';


const CartDropdown = () => {

  const {data, actions} = useContext(appContext);

  const history = useHistory();

  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
      {
        data.cartItems.length
        ? data.cartItems.map( (item) => <CartItem key={item.id} item={item} quanitity={item.quantity} />)
        : <span className='empty-message'> Your cart is empty </span>
      }
      </div>
      <CustomButton onClick={() => history.push('/checkout')}>checkout</CustomButton>
    </div>
  )
}

export default CartDropdown;

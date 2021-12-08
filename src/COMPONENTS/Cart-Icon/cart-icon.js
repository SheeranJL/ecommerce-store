import React, {useContext} from 'react';
import {appContext} from '../../Context/context.js';
import './cart-icon.scss';
import {ReactComponent as ShoppingIcon} from '../../Images/shopping-bag.svg'

const CartIcon = (props) => {

  const {data: {cartItems}} = useContext(appContext);

  const totalItems = cartItems.reduce((total, item) => {
    return total + item.quantity
  }, 0)


  return (
    <div className='cart-icon' onClick={props.onClick}>
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>{totalItems}</span>
    </div>
  )
}

export default CartIcon

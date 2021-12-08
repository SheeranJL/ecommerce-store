import './check-out-page.scss'
import React, {useContext} from 'react';
import {appContext} from '../../Context/context.js';

import CheckOutItem from './Checkout-Item/Checkout-item.js';
import StripeButton from '../Buttons/stripe-button.js';


const CheckOutPage = () => {

  const {data, actions} = useContext(appContext);

  const totalCost = data.cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0)

  return (
    <div className='checkout-page'>
      <div className='checkout-header'>

        <div className='header-block'>
          <span>Product</span>
        </div>

        <div className='header-block'>
          <span>Description</span>
        </div>

        <div className='header-block'>
          <span>Quantity</span>
        </div>

        <div className='header-block'>
          <span>Price</span>
        </div>

        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {
        data.cartItems.map((item) => <CheckOutItem item={item} {...item}/>)
      }
      <div className='total'>
        <span>{`Total: $${totalCost}`}</span>
      </div>
      {
        totalCost !== 0
        ? <StripeButton price={totalCost}/>
        : null
      }
    </div>
  )

}

export default CheckOutPage;

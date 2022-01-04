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
        data.cartItems.map((item, index) => <CheckOutItem key={index} item={item} {...item}/>)
      }
      <div className='total'>
        <span>{`Total: $${totalCost}`}</span>
      </div>
      {
        totalCost !== 0
        ? <StripeButton price={totalCost}/>
        : null
      }
      <div className='test-detail-desc'>
        <p>If you want to test checkout please use the following details...</p>
        <p>Card Number: 4242 4242 4242 4242</p>
        <p>Month/Year: 01/22</p>
        <p>CCV: 123</p>
      </div>
    </div>
  )

}

export default CheckOutPage;

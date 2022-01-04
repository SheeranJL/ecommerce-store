import React, {useContext} from 'react';
import {appContext} from '../../Context/context.js';
import OrderItems from './order-items.js';

const OrderConfirmation = () => {

  const {data : {orderItems}} = useContext(appContext);


  return (
    <div>
    <h1>Order Confirmed</h1>
    <h2>Order Summary</h2>
    {orderItems.map((item) => <OrderItems key={item.id} data={item}/>)}
    </div>
  )
}

export default OrderConfirmation;

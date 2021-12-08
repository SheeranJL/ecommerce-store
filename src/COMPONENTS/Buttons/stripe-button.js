import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {appContext} from '../../Context/context.js'
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({price}) => {

  const stripeCost = price * 100;
  const publishKey = 'pk_test_51K3EX1GPqHiug325Lq0uBEqNU9zYqZNiLACvlZlOD21p9eD5HoWpaKiaPaUJh22WPTaSARGmf1Yjx7kGsfsQdR3V00eRuooUIK'

  const {actions, data} = useContext(appContext);
  const history = useHistory();

  const onToken = async (token) => {
    await actions.setOrderItems([...data.cartItems])
    await actions.setCartItems([]);
    await history.push('/thankyou');
  }

  return (
    <StripeCheckout
      bitcoin
      label='Pay Now'
      name='E-Com Clothing'
      billingAddress
      shippingAddress
      image='https:\/\/images.dog.ceo\/breeds\/hound-blood\/n02088466_10506.jpg'
      description={`Your price is $${price}`}
      amount={stripeCost}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishKey}
    />
  )
}

export default StripeButton

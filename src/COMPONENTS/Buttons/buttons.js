import React from 'react';
import './buttons.scss'

const CustomButton = ({children, isGoogleSignIn, inverted, ...rest}) => {

  return (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...rest}>
      {children}
    </button>
  )
}

export default CustomButton;

import React from 'react';
import './signinandup.scss';

import SignIn from './signin/sign-in.js';
import SignUp from './signup/signup.js';

const signInAndSignUp = () => {

  return (
    <div className='sign-in-and-up'>
      <SignIn />
      <SignUp />
    </div>
  )
}

export default signInAndSignUp;

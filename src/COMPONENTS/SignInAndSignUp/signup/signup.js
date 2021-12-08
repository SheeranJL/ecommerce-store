import React, {useState} from 'react';
import './signup.scss';
import FormInput from '../../Form-Input/form-input.js';
import CustomButton from '../../../COMPONENTS/Buttons/buttons.js';
import {auth, createUserProfileDocument} from '../../../Firebase/firebase-utilities.js'

const SignUp = () => {

  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'name') {
      setDisplayName(e.target.value)
    } else if (e.target.name === 'email') {
      setEmail(e.target.value)
    } else if (e.target.name === 'password') {
      setPassword(e.target.value)
    } else if (e.target.name === 'confirmPassword') {
      setConfirmPassword(e.target.value)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Both passwords must match')
      return
    };

    try {
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, {displayName})
      setDisplayName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');

    } catch(error) {
      console.log('Error creating account', error)
    }



  }

  return (
    <div className='sign-up'>
      <h2 className='title'>Don't have an account?</h2>
      <span>Create one below!</span>

      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput onChange={handleChange} label='name' name='name' type='text' value={displayName} />
        <FormInput onChange={handleChange} label='email' name='email' type='email' value={email} />
        <FormInput onChange={handleChange} label='password' name='password' type='password' value={password} />
        <FormInput onChange={handleChange} label='confirm password' name='confirmPassword' type='password' value={confirmPassword} />
        <CustomButton> Sign Up </CustomButton>
      </form>

    </div>
  )
};

export default SignUp;

import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import './sign-in.scss';
import FormInput from '../../Form-Input/form-input.js'
import CustomButton from '../../Buttons/buttons.js'
import {auth, signInWithGoogle} from '../../../Firebase/firebase-utilities.js';

const SignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [incorrectPassword, setIncorrectPassword] = useState(false);
  const history = useHistory();

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value)
    } else {
      setPassword(e.target.value)
    }
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password)
      setEmail('');
      setPassword('');
      setIncorrectPassword(false);
      history.push('/');
    } catch(error) {
      console.log(error);
      setIncorrectPassword(true);
    }

    setEmail('');
    setPassword('');
  }



  return (
    <div className='sign-in'>
      <h2>I already have an account!</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput name='email' label='Email' type='email' value={email} onChange={(handleChange)}/>
        <FormInput name='password' label='Password' type='password' value={password} onChange={handleChange}/>
        {
          incorrectPassword ? <p className='incorrect-password'>Incorrect username or password</p> : ''
        }
        <div className='buttons'>
          <CustomButton type='submit'>Sign in</CustomButton>
          <CustomButton isGoogleSignIn onClick={signInWithGoogle}>Google signin</CustomButton>
        </div>
      </form>


    </div>
  )
}

export default SignIn

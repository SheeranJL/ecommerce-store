import React, {useContext, useState} from 'react';
import {useHistory, Link} from 'react-router-dom';
import {appContext} from '../../Context/context.js';
import {auth} from '../../Firebase/firebase-utilities.js'
import {ReactComponent as Logo} from '../../Images/crown.svg';
import {OptionContainerStyles, HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv} from './header.styles.js';
import './header.scss';

import CartIcon from '../Cart-Icon/cart-icon.js';
import CartDropdrop from '../Cart-dropdown/cart-dropdown.js'

const Header = () => {

  const [hidden, setHidden] = useState(true);

  const history = useHistory();
  const {data: {currentUser}, actions} = useContext(appContext);

  const handleToggleCartDropdown = () => {
    setHidden(!hidden);
  }

  const handleSignOut = async() => {
    await auth.signOut()
    actions.setCartItems([]);
  }

  return (

    <HeaderContainer>

      <LogoContainer to='/'>
        <Link to='/' className='my-shop-title' style={{textDecoration: 'none'}}>My Shop</Link>
      </LogoContainer>

    <OptionsContainer>
      <OptionLink to='/shop'>Shop</OptionLink>
      <OptionLink to='/contact'>Contact</OptionLink>
      {
        currentUser
        ? <OptionDiv onClick={handleSignOut}>Sign Out</OptionDiv>
        : <OptionLink to='/signin'>Sign In</OptionLink>
      }
      <CartIcon onClick={handleToggleCartDropdown}/>
    </OptionsContainer>
    {
      hidden ? null : <CartDropdrop />
    }
    </HeaderContainer>
  )
}

export default Header;

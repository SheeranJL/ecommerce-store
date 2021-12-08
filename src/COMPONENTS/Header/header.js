import React, {useContext, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {appContext} from '../../Context/context.js';
import {auth} from '../../Firebase/firebase-utilities.js'
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../Images/crown.svg';
import {OptionContainerStyles, HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv} from './header.styles.js';
import './header.scss';

import CartIcon from '../Cart-Icon/cart-icon.js';
import CartDropdrop from '../Cart-dropdown/cart-dropdown.js'

const Header = () => {

  const [hidden, setHidden] = useState(true);

  const history = useHistory();
  const {data: {currentUser}} = useContext(appContext);

  const handleToggleCartDropdown = () => {
    setHidden(!hidden);
  }


  return (

    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo />
      </LogoContainer>

    <OptionsContainer>
      <OptionLink to='/shop'>Shop</OptionLink>
      <OptionLink to='/contact'>Contact</OptionLink>
      {
        currentUser
        ? <OptionDiv onClick={() => auth.signOut()}>Sign Out</OptionDiv>
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

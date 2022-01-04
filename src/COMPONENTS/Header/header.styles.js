import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';

export const OptionContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
  text-decoration: none;
  color: black;
`

export const HeaderContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  text-decoration: none;
`
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
  text-decoration: none;
  
`
export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

`

export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`
export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../atoms/Button';
import { LoginContext } from '../../App';
import Img from '../atoms/Img';

const StyledHeader = styled.div`
  display: flex;
  height: 60px;
  max-width: 1240px;
  background: ${props => props.color};
  border-bottom: 2px solid #eeeeee;
  justify-content: space-between;
  margin-left: 0 auto;
  padding: 0 8px;
  z-index: 10;
`;

const HeaderLogoButton = styled.div`
  height: 40px;
  width: 192px;
  background-image: url('/images/header_logo_black.png');
  margin-top: 10px;
`;

const HeaderButtonGroup = styled.div`
  display: float;
  padding-top: 13px;
`;

const HeaderButton = styled.button`
  color: #333333;
  border: 0;
  outline: none;
  background-color: rgba(0, 0, 0, 0);
  font-size: 12pt;
  margin-right: 50px;
  &: hover {
    cursor: pointer;
  }
`;

const Header = (): JSX.Element => {
  const { state, onclick } = useContext(LoginContext);
  const isLogin = localStorage.getItem('cookie') ? true : false;

  const onclickLoginButton = () => onclick(!state);

  const onclickLogoutButton = () => {
    localStorage.setItem('cookie', '');
    window.location.href = '/';
  };

  const buttonText = isLogin ? 'LOGOUT' : 'LOGIN';
  const loginOrOutclick = isLogin ? onclickLogoutButton : onclickLoginButton;

  return (
    <StyledHeader color="white">
      <Link to="/">
        <HeaderLogoButton />
      </Link>
      <HeaderButtonGroup>
        {isLogin ? (
          <Link to="/tracks">
            <HeaderButton>TRACK</HeaderButton>
          </Link>
        ) : (
          <></>
        )}
        <Button
          color="#FFFFFF"
          onclick={loginOrOutclick}
          height="34px"
          fontSize="14px"
          borderRadius="35px"
          background="#121137"
          lineHeight="1"
          marginTop="auto"
          marginBottom="auto"
        >
          {buttonText}
        </Button>
      </HeaderButtonGroup>
    </StyledHeader>
  );
};

export default Header;

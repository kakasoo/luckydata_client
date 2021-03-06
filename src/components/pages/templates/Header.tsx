import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../atoms/Button';
import { LoginContext } from '../../../App';
import { initFetch } from '../../../utils';
import HeaderWrapper from '../../molecules/Header/HeaderWrapper';
import HeaderLogoButton from '../../molecules/Header/HeaderLogoButton';
import HeaderButtonGroup from '../../molecules/Header/HeaderButtonGroup';

const Header = (): JSX.Element => {
  const { state, onclick } = useContext(LoginContext);
  const isLogin = localStorage.getItem('token') ? true : false;
  if (isLogin) {
    // initFetch();
  }

  const onclickLoginButton = () => onclick(!state);

  const onclickLogoutButton = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('/api/tracks');
    window.location.href = '/';
  };

  const buttonText = isLogin ? 'LOGOUT' : 'LOGIN';
  const loginOrOutclick = isLogin ? onclickLogoutButton : onclickLoginButton;

  return (
    <HeaderWrapper>
      <Link to="/">
        <HeaderLogoButton />
      </Link>
      <HeaderButtonGroup>
        {isLogin ? (
          <Link to="/tracks">
            <Button
              color="#333333"
              border="0"
              outline="none"
              backgroundColor="rgba(0,0,0,0)"
              fontSize="12pt"
              marginRight="50px"
            >
              TRACK
            </Button>
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
    </HeaderWrapper>
  );
};

export default Header;

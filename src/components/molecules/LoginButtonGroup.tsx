import React from 'react';
import Button from '../atoms/Button';
import setting from '../../config';

const LoginButtonGroup = (): JSX.Element => {
  const loginButtons = ['github', 'google', 'facebook'];
  const loginColor = ['rgb(70,70,70)', 'rgb(221,75,57)', 'rgb(59,89,152)'];
  const onLogin = (auth: string): (() => void) => {
    const login = (name: string) => () => {
      const url = setting.SERVER_ADDRESS + `/auth/${name}`;
      fetch(url).then(res => {
        window.location.href = res.url;
        localStorage.setItem('cookie', document.cookie.split('=')[1]);
      });
    };
    return login(auth);
  };

  return (
    <>
      {loginButtons.map((strategy, index) => (
        <Button
          width="100%"
          marginTop="5px"
          marginBottom="5px"
          background={loginColor[index]}
          key={index}
          onclick={onLogin(loginButtons[index])}
          children={`Connect with ${strategy}`}
        ></Button>
      ))}
    </>
  );
};

export default LoginButtonGroup;

import React from 'react';
import superagent from 'superagent';
import Button from '../atoms/Button';
import setting from '../../config';

const LoginButtonGroup = (): JSX.Element => {
  const loginButtons = [
    'github',
    'Unavailable. Plz wait.',
    'Unavailable. Plz wait.',
  ];
  const loginColor = ['rgb(70,70,70)', 'rgb(221,75,57)', 'rgb(59,89,152)'];
  const onLogin = (auth: string): (() => void) => {
    const login = (name: string) => () => {
      const url = setting.SERVER_ADDRESS + `/auth/${name}`;
      fetch(url, {
        cache: 'no-cache',
      }).then(res => {
        console.log('cookie : ', document.cookie.split('=')[1]);
        localStorage.setItem('cookie', document.cookie.split('=')[1]);
        console.log(15);
        window.location.href = res.url + `?+c=${new Date()}`;
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

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
    const login = (name: string) => async () => {
      const url = setting.SERVER_ADDRESS + `/auth/${name}`;
      const nextUrl = setting.SERVER_ADDRESS + `/auth`;
      const result = await fetch(url, {
        cache: 'no-cache',
      });
      window.location.href = result.url + `?+c=${new Date()}`;

      const nextResult: any = await fetch(nextUrl);
      console.log('cookie : ', nextResult);
      localStorage.setItem('cookie', nextResult.token);
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

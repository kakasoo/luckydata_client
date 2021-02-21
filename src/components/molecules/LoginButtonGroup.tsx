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
      fetch(url)
        .then(res => {
          console.log('res1 : ', res);
          return res.json();
        })
        .then(res => {
          console.log(res);
          window.location.href = res.url;
        });

      fetch(nextUrl)
        .then(res => {
          console.log('res2 : ', res);
          return res.json();
        })
        .then(res => {
          console.log(res);
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

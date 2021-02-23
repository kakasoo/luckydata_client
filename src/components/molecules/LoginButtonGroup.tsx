import React from 'react';
import Button from '../atoms/Button';
import { Link, Route } from 'react-router-dom';

const LoginButtonGroup = (props: any): JSX.Element => {
  const loginButtons = [
    'github',
    'Unavailable. Plz wait.',
    'Unavailable. Plz wait.',
  ];
  const loginColor = ['rgb(70,70,70)', 'rgb(221,75,57)', 'rgb(59,89,152)'];
  const onLogin = (auth: string): (() => void) => {
    const login = (name: string) => async () => {
      // const url = `/api/auth/${name}`;
      // console.log('url : ', url);
      // const response = await fetch(url);
      // console.log('response : ', response);
      // window.location.href = response.url;
    };
    return login(auth);
  };
  console.log('props : ', props);

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

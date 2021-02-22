import React from 'react';
import superagent from 'superagent';
import Button from '../atoms/Button';
import setting from '../../config';
import axios from 'axios';

const LoginButtonGroup = (): JSX.Element => {
  const loginButtons = [
    'github',
    'Unavailable. Plz wait.',
    'Unavailable. Plz wait.',
  ];
  const loginColor = ['rgb(70,70,70)', 'rgb(221,75,57)', 'rgb(59,89,152)'];
  const onLogin = (auth: string): (() => void) => {
    const login = (name: string) => () => {
      const url = setting.SERVER_ADRESS + `/auth/${name}`;
      console.log('url : ', url);

      // (1)
      // fetch(url).then(res => {
      //   console.log(res);
      //   console.log(url);
      //   console.log(document.cookie);
      //   localStorage.setItem('token', document.cookie.split('=')[1]);

      //   setTimeout(() => {
      //     window.location.href = res.url;
      //   }, 5000);
      // });
      // (2)
      // const xhr = new XMLHttpRequest();
      // xhr.open('GET', 'http://1.237.141.37:4000', true);
      // xhr.withCredentials = true;
      // xhr.send(null);

      const result = axios.get(url, { withCredentials: true });
      console.log('result : ', result);
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

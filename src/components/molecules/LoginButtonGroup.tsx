import React from 'react';
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
      const url = 'http://127.0.0.1:4000' + `/auth/${name}`;
      fetch(url, {
        credentials: 'same-origin',
      }).then(res => {
        console.log('res : ', res);
        console.log('res.header : ', res.headers);
        console.log('url : ', url);
        console.log('document : ', document);
        console.log('document.cookie : ', document.cookie);

        console.log(document.cookie.split('=')[1]);
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

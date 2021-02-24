import React from 'react';
import Button from '../atoms/Button';

const LoginButtonGroup = (): JSX.Element => {
  const loginButtons = ['github', 'google', 'facebook'];
  const loginColor = ['rgb(70,70,70)', 'rgb(221,75,57)', 'rgb(59,89,152)'];
  const onLogin = (auth: string): (() => void) => {
    const login = (name: string) => async () => {
      switch (name) {
        case 'github':
          location.href =
            'https://github.com/login/oauth/authorize?client_id=Iv1.483937f604dec290&redirect_uri=http://www.luckydata.site/callback';
          break;
        default:
          return;
      }
    };
    return login(auth);
  };

  return (
    <div style={{ marginTop: '30px' }}>
      {loginButtons.map((strategy, index) => (
        <Button
          width="340px"
          height="50px"
          marginTop="10px"
          marginBottom="10px"
          borderRadius="5px"
          background={loginColor[index]}
          key={index}
          onclick={onLogin(loginButtons[index])}
          children={`Connect with ${strategy}`}
        ></Button>
      ))}
    </div>
  );
};

export default LoginButtonGroup;

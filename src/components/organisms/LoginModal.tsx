import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { LoginContext } from '../../App';
import setting from '../../config';
import Span from '../atoms/Span';
import { modalProps } from '../interfaces';
import LoginModalInner from '../molecules/LoginModal/LoginModalInner';
import LoginModalWrapper from '../molecules/LoginModal/LoginModalWrapper';

const ModalOverlay = styled.div`
  box-sizing: border-box;
  color: ${({ color }) => color || 'white'};
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const LoginModal = ({
  className,
  visible,
  children,
}: modalProps): JSX.Element => {
  const { state, onclick } = useContext(LoginContext);
  const [id, setID] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('정보를 입력 후 로그인을 눌려주세요.');
  const [messageColor, setMEssageColor] = useState('red');

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setMessage('이미 로그인에 성공한 유저입니다.');
      setMEssageColor('blue');
    }
  }, [state]);

  const changeID = (event: React.ChangeEvent<HTMLInputElement>) =>
    setID(event.target.value);
  const changePassword = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);

  const clickOutside = ({
    target,
  }: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (state && document.getElementById('modalBackground') === target) {
      onclick();
    }
  };

  const login = () => {
    const url = setting.FETCH_ADDRESS + '/api/auth/local';
    try {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'same-origin',
        body: JSON.stringify({
          USER_ID: id,
          PASSWORD: password,
        }),
      })
        .then(res => {
          return res.json();
        })
        .then(res => {
          if (res.message === 'success') {
            localStorage.setItem('token', res.result);
            setMessage('이미 로그인에 성공한 유저입니다.');
            setMEssageColor('blue');
            onclick();
            window.location.href = String(setting.CLIENT_ROOT);
          } else {
            setMessage('아이디와 비밀번호를 다시 확인해주세요.');
            setMEssageColor('red');
            return;
          }
        });
    } catch (error) {
      setMessage('알 수 없는 이유로 로그인에 실패하였습니다.');
      setMEssageColor('red');
    }
  };

  const isEnter = (event: React.KeyboardEvent<HTMLInputElement>) =>
    event.charCode === 13 && login();
  return (
    <ModalOverlay visible={visible}>
      <LoginModalWrapper
        className={className}
        tabIndex={-1}
        visible={visible}
        onclick={clickOutside}
      >
        <LoginModalInner tabIndex={0}>
          <Span
            fontSize="xx-large"
            fontWeight="bold"
            color="black"
            marginBottom="5px"
            text="Login"
          ></Span>
          <input
            placeholder="아이디를 입력해주세요."
            style={{
              background: 'rgb(243, 243, 243)',
              width: '100%',
              height: '50px',
              border: 'none',
              marginBottom: '20px',
            }}
            id="user_id"
            name="user_id"
            onChange={changeID}
          ></input>
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            style={{
              background: 'rgb(243, 243, 243)',
              width: '100%',
              height: '50px',
              border: 'none',
              marginBottom: '54px',
            }}
            id="password"
            name="password"
            onChange={changePassword}
            onKeyPress={isEnter}
          ></input>
          <button
            style={{
              background: 'rgb(25,24,59)',
              width: '340px',
              height: '50px',
              marginBottom: '5px',
              color: 'white',
              fontSize: '20px',
              lineHeight: '28px',
              letterSpacing: '-1px',
              borderRadius: '5px',
            }}
            id="login_button"
            onClick={login}
          >
            sign in
          </button>
          <Span
            color={messageColor}
            fontSize="12px"
            fontWeight="bold"
            text={message}
          />
          {children}
        </LoginModalInner>
      </LoginModalWrapper>
    </ModalOverlay>
  );
};

export default LoginModal;

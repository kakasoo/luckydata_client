import React from 'react';
import styled from 'styled-components';

const BackgroundLoadingScreen = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border: 1px solid red;
  height: 100%;
  width: 100%;
  background: rgb(0, 0, 0);
  opacity: 0.4;
  z-index: 1;
`;

const LoadingContents = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  width: 100%;
  align-items: center;
  text-align: center;
  transform: translate(-50%, -50%);
  color: red;
  font-size: 100px;
  z-index: 1;
  font-family: InkLipquid;
`;

const LoadingScreen = (): JSX.Element => {
  return (
    <BackgroundLoadingScreen>
      <LoadingContents>loading...</LoadingContents>
    </BackgroundLoadingScreen>
  );
};

export default LoadingScreen;

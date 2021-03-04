import React from 'react';
import LoadingBackgroundScreen from '../molecules/Loading/LoadingBackgroundScreen';
import LoadingContents from '../molecules/Loading/LoadingContents';

const LoadingScreen = (): JSX.Element => {
  return (
    <LoadingBackgroundScreen>
      <LoadingContents>loading...</LoadingContents>
    </LoadingBackgroundScreen>
  );
};

export default LoadingScreen;

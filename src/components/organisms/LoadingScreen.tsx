import React from 'react';
import BackgroundLoadingScreen from '../molecules/BackgroundLoadingScreen';
import LoadingContents from '../molecules/LodingContents';

const LoadingScreen = (): JSX.Element => {
  return (
    <BackgroundLoadingScreen>
      <LoadingContents>loading...</LoadingContents>
    </BackgroundLoadingScreen>
  );
};

export default LoadingScreen;

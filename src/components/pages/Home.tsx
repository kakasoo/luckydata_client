import React from 'react';
import styled from 'styled-components';
import Banner from '../unreuse/Banner';
import About from '../unreuse/About';

const MainWrapper = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
`;

const Home = (): JSX.Element => {
  return (
    <MainWrapper>
      <Banner />
      <About />
    </MainWrapper>
  );
};

export default Home;

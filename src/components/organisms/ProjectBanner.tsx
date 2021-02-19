import React from 'react';
import styled from 'styled-components';

const ProjectBannerWrapper = styled.div`
  position: relative;
  height: 119px;
  background-color: black;
`;

const ProjectBannerBackground = styled.img`
  position: relative;
  width: 1920px;
  height: 100%;
  max-height: 119px;
  left: 50%;
  margin-left: -960px;
  object-fit: cover;
`;

const ProjectBannerText = styled.h2`
  position: absolute;
  z-index: 1;
  border: 2px soild yellow;
  width: 100%;
  top: 25px;
  text-align: center;
  color: white;
`;

const ProjectBanner = (): JSX.Element => {
  return (
    <ProjectBannerWrapper>
      <ProjectBannerBackground src="/images/head.png"></ProjectBannerBackground>
      <ProjectBannerText>TRACK</ProjectBannerText>
    </ProjectBannerWrapper>
  );
};

export default ProjectBanner;

import React from 'react';
import styled from 'styled-components';
import ProjectBannerWrapper from '../molecules/ProjectBannerWrapper';
import ProjectBannerBackground from '../molecules/Projects/ProjectBannerBackground';

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
      <ProjectBannerBackground />
      <ProjectBannerText>TRACK</ProjectBannerText>
    </ProjectBannerWrapper>
  );
};

export default ProjectBanner;

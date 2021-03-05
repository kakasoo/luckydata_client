import React from 'react';
import Div from '../../atoms/StyledDiv';

const PorjectBannerWrapper = (): JSX.Element => (
  <Div
    position="relative"
    width="1920px"
    height="100%"
    maxHeight="119px"
    left="50%"
    marginLeft="-960px"
    objectFit="cover"
    backgroundImage="url(/images/head.png)"
  />
);

export default PorjectBannerWrapper;

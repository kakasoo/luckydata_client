import React from 'react';
import Div from '../atoms/StyledDiv';

const PorjectBannerWrapper = (props: any): JSX.Element => (
  <Div position="relative" height="119px" backgroundColor="black">
    {props.children}
  </Div>
);

export default PorjectBannerWrapper;

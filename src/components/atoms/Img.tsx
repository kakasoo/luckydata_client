import React from 'react';
import styled from 'styled-components';
import { imgProps } from '../interfaces';

const StyledImg = styled.img<imgProps>`
  display: ${props => props.display};
  margin-top: ${props => props.marginTop};
  margin-left: ${props => props.marginLeft};
  margin-right: ${props => props.marginRight};
  width: ${props => props.width};
  src: ${props => props.src};
  overflow: ${props => props.overflow || 'hidden'};
  height: ${props => props.height || '100%'};
  margin-top: ${props => props.marginTop || '10px'};
  alt: ${props => props.alt};
`;

const Img = ({ ...rest }: imgProps): JSX.Element => {
  return <StyledImg {...rest}></StyledImg>;
};

export default Img;

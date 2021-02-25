import React from 'react';
import styled from 'styled-components';
import { pProps } from '../interfaces';

const StyledP = styled.p<pProps>`
  position: ${props => props.position || 'static'};
  padding-left: ${props => props.paddingLeft};
  padding-right: ${props => props.paddingRight};
  padding-top: ${props => props.paddingTop};
  padding-bottom: ${props => props.paddingBottom};
  margin-top${props => props.marginTop};
  font-size: ${props => props.fontSize};
  line-height: ${props => props.lineHeight};
  letter-spacing: ${props => props.letterSpacing};
  margin-right: ${props => props.marginRight};
  margin:${props => props.margin};
  color: ${props => props.color || 'black'};
  width: ${props => props.width};
  height: ${props => props.height};
  font-weight: ${props => props.fontWeight};
`;

const P = ({ text, ...rest }: pProps & { text: string }): JSX.Element => {
  return <StyledP {...rest}>{text}</StyledP>;
};

export default P;

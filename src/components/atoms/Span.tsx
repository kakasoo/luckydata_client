import React from 'react';
import styled from 'styled-components';
import { spanProps } from '../interfaces';

const StyledSpan = styled.span<spanProps>`
  position: ${props => props.position || 'static'};
  padding-left: ${props => props.paddingLeft};
  padding-right: ${props => props.paddingRight};
  padding-top: ${props => props.paddingTop};
  padding-bottom: ${props => props.paddingBottom};
  color: ${props => props.color || 'black'};
  font-size: ${props => props.fontSize};
  line-height: ${props => props.lineHeight};
  letter-spacing: ${props => props.letterSpacing};
  margin-right: ${props => props.marginRight};
  width: ${props => props.width};
  height: ${props => props.height};
  left: ${props => props.left};
  top: ${props => props.top};
  font-weight: ${props => props.fontWeight};
  margin-bottom: ${props => props.marginBottom};
  font-family: ${props => props.fontFamily};
  background-color: ${props => props.backgroundColor};
  user-selcet: ${props => props.userSelect};
  -webkit-user-select: ${props => props.webkitUserSelect};
`;

const Span = ({ text, ...rest }: spanProps & { text: string }): JSX.Element => {
  return <StyledSpan {...rest}>{text}</StyledSpan>;
};

export default Span;

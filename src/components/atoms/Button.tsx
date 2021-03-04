import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from '../interfaces';

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  outline: none;
  border: transparent;
  color: ${props => props.color || 'white'};
  cursor: pointer;

  width: ${props => props.width || '100px'};
  border-radius: ${props => (props.radius ? '10px' : '0px')};
  height: ${props => props.height || '2.25rem'};
  font-size: ${props => props.fontSize || '1.1rem'};
  line-height: ${props => props.lineHeight || '1'};
  background: ${props => props.background || 'transparent'};
  border-radius: ${props => props.borderRadius || '0%'};
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
  margin-right: ${props => props.marginRight};
  align-items: center;
  justify-content: ${props => props.justifyContent || 'center'};
  outline: none;
  onclick: ${props => props.onclick};
  text-align: ${props => props.textAlign || 'center'};
  border: ${props => props.border || 'none'};
  outline: ${props => props.outline || 'none'};
  background-color: ${props => props.backgroundColor};
`;

const Button = ({ onclick, children, ...rest }: ButtonProps): JSX.Element => {
  return (
    <StyledButton onClick={onclick} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;

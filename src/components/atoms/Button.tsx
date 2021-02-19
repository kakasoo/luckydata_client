import React from 'react';
import styled from 'styled-components';

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
  margin-top: ${props => props.marginTop || '20px'};
  margin-bottom: ${props => props.marginBottom || '20px'};
  align-items: center;
  justify-content: center;
  onclick: ${props => props.onclick};
`;

interface ButtonProps {
  children?: JSX.Element | string | null;
  radius?: boolean;
  color?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  lineHeight?: string;
  borderRadius?: string;
  marginTop?: string;
  marginBottom?: string;
  onclick?: () => void;
  background?: string;
}

const Button = ({ onclick, children, ...rest }: ButtonProps): JSX.Element => {
  return (
    <StyledButton onClick={onclick} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;

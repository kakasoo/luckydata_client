import React from 'react';
import styled from 'styled-components';
import { inputProps } from '../interfaces';

const StyledInput = styled.input<inputProps>`
  height: ${props => props.height};
  max-width: ${props => props.maxWidth};
  margin-left: ${props => props.marginLeft};
  id: ${props => props.id};
  name: ${props => props.name};
`;

const Input = ({ ...rest }: inputProps): JSX.Element => {
  return <StyledInput {...rest}></StyledInput>;
};

export default Input;

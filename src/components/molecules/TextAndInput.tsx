import React from 'react';
import Input from '../atoms/Input';
import Span from '../atoms/Span';
import Div from '../atoms/StyledDiv';

const TextAndInput = ({ name }: any): JSX.Element => {
  return (
    <Div display="flex">
      <Span fontSize="20px" text={name + ':'}></Span>
      <Input
        height="30px"
        maxWidth="100px"
        marginLeft="10px"
        id={name}
        name={name}
      ></Input>
    </Div>
  );
};
export default TextAndInput;

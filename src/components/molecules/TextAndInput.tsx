import React from 'react';
import Span from '../atoms/Span';

const TextAndInput = ({ name }: any): JSX.Element => {
  return (
    <>
      <Span fontSize="20px" text={name + ':'}></Span>
      <input
        style={{ height: '30px', maxWidth: '100px', marginLeft: '10px' }}
        id={name}
        name={name}
      ></input>
    </>
  );
};
export default TextAndInput;

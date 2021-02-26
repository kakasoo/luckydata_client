import React from 'react';
import styled from 'styled-components';
import Span from '../atoms/Span';
import setting from '../../config';

const StyledForm = styled.div`
  justify-content: space-between;
  display: flex;
`;

const TextAndInput = ({ name }: any): JSX.Element => {
  return (
    <>
      <Span fontSize="20px" text={name + ':'}></Span>
      <input
        style={{ width: '35%', height: '30px', marginLeft: '10px' }}
        id={name}
        name={name}
      ></input>
    </>
  );
};
// action={setting.FETCH_ADDRESS + '/api/tracks'} method="post"
const TrackAddForm = (): JSX.Element => {
  const addTrack = async () => {
    const DEPARTMENT: any = document.getElementById('DEPARTMENT');
    const DEPARTMENT_ORDER: any = document.getElementById('DEPARTMENT_ORDER');

    const cookie = localStorage.getItem('token');

    if (!DEPARTMENT.value) {
      return;
    }

    await fetch(setting.FETCH_ADDRESS + '/api/tracks', {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
        authorization: cookie || '',
      },
      body: JSON.stringify({
        DEPARTMENT: DEPARTMENT.value,
        ORDER: DEPARTMENT_ORDER?.value || 0,
      }),
    });
  };

  return (
    <StyledForm>
      <TextAndInput name="DEPARTMENT"></TextAndInput>
      <TextAndInput name="TRACK_ORDER"></TextAndInput>
      <button style={{ height: '30px' }} onClick={addTrack}>
        <Span text="생성"></Span>
      </button>
    </StyledForm>
  );
};

export default TrackAddForm;

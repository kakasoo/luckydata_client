import React from 'react';
import styled from 'styled-components';
import Span from '../atoms/Span';
import TextAndInput from '../molecules/TextAndInput';
import { StyledForm } from '../atoms/StyledDiv';
import { fetchPost } from '../../utils';

const AdminEditForm = (): JSX.Element => {
  const addTrack = async () => {
    const ADMIN_USER_ID: any = document.getElementById('ADMIN_USER_ID');

    if (!ADMIN_USER_ID.value) {
      return;
    }

    fetchPost('/api/admins', {
      USER_ID: ADMIN_USER_ID?.value,
    });
  };

  return (
    <StyledForm>
      <TextAndInput name="ADMIN_USER_ID"></TextAndInput>
      <button style={{ height: '30px' }} onClick={addTrack}>
        <Span text="생성"></Span>
      </button>
    </StyledForm>
  );
};

export default AdminEditForm;

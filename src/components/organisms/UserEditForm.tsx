import React from 'react';
import Span from '../atoms/Span';
import TextAndInput from '../molecules/TextAndInput';
import { fetchPost } from '../../utils';
import EditForm from '../molecules/EditForm';
import setting from '../../config';

const UserEditForm = (): JSX.Element => {
  const addTrack = async () => {
    const U_USER_ID: any = document.getElementById('U_USER_ID');
    const U_PASSWORD: any = document.getElementById('U_PASSWORD');
    const MAJOR: any = document.getElementById('MAJOR');
    const DOUBLE_MAJOR: any = document.getElementById('DOUBLE_MAJOR');
    const STUDENT_ID: any = document.getElementById('STUDENT_ID');

    if (!U_USER_ID.value || !U_PASSWORD.value) {
      return;
    }

    fetchPost(setting.SERVER_ADDRESS + '/api/users', {
      USER_ID: U_USER_ID?.value,
      PASSWORD: U_PASSWORD?.value,
      MAJOR: MAJOR?.value,
      DOUBLE_MAJOR: DOUBLE_MAJOR?.value,
      STUDENT_ID: STUDENT_ID?.value,
    });
  };

  return (
    <EditForm>
      <TextAndInput name="U_USER_ID"></TextAndInput>
      <TextAndInput name="U_PASSWORD"></TextAndInput>
      <TextAndInput name="MAJOR"></TextAndInput>
      <TextAndInput name="DOUBLE_MAJOR"></TextAndInput>
      <TextAndInput name="STUDENT_ID"></TextAndInput>
      <button style={{ height: '30px' }} onClick={addTrack}>
        <Span text="생성"></Span>
      </button>
    </EditForm>
  );
};

export default UserEditForm;

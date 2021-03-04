import React from 'react';
import Span from '../atoms/Span';
import TextAndInput from '../molecules/TextAndInput';
import { fetchPost } from '../../utils';
import EditForm from '../molecules/EditForm';
import setting from '../../config';

const AdminEditForm = (): JSX.Element => {
  const addTrack = async () => {
    const ADMIN_USER_ID: any = document.getElementById('ADMIN_USER_ID');

    if (!ADMIN_USER_ID.value) {
      return;
    }

    fetchPost(setting.SERVER_ADDRESS + '/api/admins', {
      ID: ADMIN_USER_ID?.value,
    });
  };

  return (
    <EditForm>
      <TextAndInput name="ADMIN_USER_ID"></TextAndInput>
      <button style={{ height: '30px' }} onClick={addTrack}>
        <Span text="생성"></Span>
      </button>
    </EditForm>
  );
};

export default AdminEditForm;

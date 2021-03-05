import React from 'react';
import Span from '../../atoms/Span';
import TextAndInput from '../../molecules/TextAndInput';
import { fetchPost } from '../../../utils';
import EditForm from '../../molecules/Edit/EditForm';
import setting from '../../../config';
import Button from '../../atoms/Button';

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
      <Button height="30px" onclick={addTrack}>
        <Span text="생성"></Span>
      </Button>
    </EditForm>
  );
};

export default AdminEditForm;

import React from 'react';
import Span from '../atoms/Span';
import setting from '../../config';
import TextAndInput from '../molecules/TextAndInput';
import { fetchPost } from '../../utils';
import EditForm from '../molecules/EditForm';
import Button from '../atoms/Button';

const TrackEditForm = (): JSX.Element => {
  const addTrack = async () => {
    const DEPARTMENT: any = document.getElementById('DEPARTMENT');
    const DEPARTMENT_ORDER: any = document.getElementById('T_ORDER');

    if (!DEPARTMENT.value) {
      return;
    }

    fetchPost(setting.SERVER_ADDRESS + '/api/tracks', {
      DEPARTMENT: DEPARTMENT.value,
      ORDER: DEPARTMENT_ORDER?.value || 0,
    });
  };

  return (
    <EditForm>
      <TextAndInput name="DEPARTMENT"></TextAndInput>
      <TextAndInput name="T_ORDER"></TextAndInput>
      <Button height="30px" onclick={addTrack}>
        <Span text="생성"></Span>
      </Button>
    </EditForm>
  );
};

export default TrackEditForm;

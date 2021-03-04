import React from 'react';
import Span from '../atoms/Span';
import TextAndInput from '../molecules/TextAndInput';
import { fetchPost } from '../../utils';
import EditForm from '../molecules/EditForm';
import setting from '../../config';

const ProjectEditForm = (): JSX.Element => {
  const addTrack = async () => {
    const P_TITLE: any = document.getElementById('P_TITLE');
    const P_WRITER: any = document.getElementById('P_WRITER');
    const P_TRACK_ID: any = document.getElementById('P_TRACK_ID');
    const P_ORDER: any = document.getElementById('P_ORDER');

    if (!P_TITLE.value || !P_WRITER.value || !P_TRACK_ID.value) {
      return;
    }

    fetchPost(setting.SERVER_ADDRESS + '/api/projects', {
      TITLE: P_TITLE?.value,
      WRITER: P_WRITER?.value,
      TRACK_ID: P_TRACK_ID?.value,
      ORDER: P_ORDER?.value,
    });
  };

  return (
    <EditForm>
      <TextAndInput name="P_TITLE"></TextAndInput>
      <TextAndInput name="P_WRITER"></TextAndInput>
      <TextAndInput name="P_TRACK_ID"></TextAndInput>
      <TextAndInput name="P_ORDER"></TextAndInput>
      <button style={{ height: '30px' }} onClick={addTrack}>
        <Span text="생성"></Span>
      </button>
    </EditForm>
  );
};

export default ProjectEditForm;

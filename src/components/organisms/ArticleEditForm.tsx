import React from 'react';
import Span from '../atoms/Span';
import TextAndInput from '../molecules/TextAndInput';
import { fetchPost } from '../../utils';
import EditForm from '../molecules/EditForm';
import setting from '../../config';
import Button from '../atoms/Button';

const ProjectEditForm = (): JSX.Element => {
  const addTrack = async () => {
    const A_TITLE: any = document.getElementById('A_TITLE');
    const A_ADMIN: any = document.getElementById('A_ADMIN');
    const A_PROJECT_ID: any = document.getElementById('A_PROJECT_ID');
    const A_CONTENTS: any = document.getElementById('A_CONTENTS');
    const A_ORDER: any = document.getElementById('A_ORDER');

    if (!A_TITLE.value || !A_ADMIN.value || !A_PROJECT_ID.value) {
      return;
    }

    fetchPost(setting.SERVER_ADDRESS + '/api/articles', {
      TITLE: A_TITLE?.value,
      ADMIN_ID: A_ADMIN?.value,
      CONTENTS: A_CONTENTS.value,
      PROJECT_ID: A_PROJECT_ID?.value,
      ORDER: A_ORDER?.value,
    });
  };

  return (
    <EditForm>
      <TextAndInput name="A_TITLE"></TextAndInput>
      <TextAndInput name="A_CONTENTS"></TextAndInput>
      <TextAndInput name="A_ADMIN"></TextAndInput>
      <TextAndInput name="A_PROJECT_ID"></TextAndInput>
      <TextAndInput name="A_ORDER"></TextAndInput>
      <Button height="30px" onclick={addTrack}>
        <Span text="생성"></Span>
      </Button>
    </EditForm>
  );
};

export default ProjectEditForm;

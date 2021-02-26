import React from 'react';
import styled from 'styled-components';
import Span from '../atoms/Span';
import TextAndInput from '../molecules/TextAndInput';
import { StyledForm } from '../atoms/StyledDiv';
import { fetchPost } from '../../utils';

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

    fetchPost('/api/articles', {
      TITLE: A_TITLE?.value,
      ADMIN_ID: A_ADMIN?.value,
      CONTENTS: A_CONTENTS.value,
      PROJECT_ID: A_PROJECT_ID?.value,
      ORDER: A_ORDER?.value,
    });
  };

  return (
    <StyledForm>
      <TextAndInput name="A_TITLE"></TextAndInput>
      <TextAndInput name="A_CONTENTS"></TextAndInput>
      <TextAndInput name="A_ADMIN"></TextAndInput>
      <TextAndInput name="A_PROJECT_ID"></TextAndInput>
      <TextAndInput name="A_ORDER"></TextAndInput>
      <button style={{ height: '30px' }} onClick={addTrack}>
        <Span text="생성"></Span>
      </button>
    </StyledForm>
  );
};

export default ProjectEditForm;

import React from 'react';
import styled from 'styled-components';
import Span from '../atoms/Span';
import TextAndInput from '../molecules/TextAndInput';
import { StyledForm } from '../atoms/StyledDiv';
import { fetchPost } from '../../utils';

const ProjectEditForm = (): JSX.Element => {
  const addTrack = async () => {
    const P_TITLE: any = document.getElementById('P_TITLE');
    const P_WRITER: any = document.getElementById('P_WRITER');
    const P_TRACK_ID: any = document.getElementById('P_TRACK_ID');
    const P_ORDER: any = document.getElementById('P_ORDER');

    if (!P_TITLE.value || !P_WRITER.value || !P_TRACK_ID.value) {
      return;
    }

    fetchPost('/api/projects', {
      TITLE: P_TITLE?.value,
      WRITER: P_WRITER?.value,
      TRACK_ID: P_TRACK_ID?.value,
      ORDER: P_ORDER?.value,
    });
  };

  return (
    <StyledForm>
      <TextAndInput name="P_TITLE"></TextAndInput>
      <TextAndInput name="P_WRITER"></TextAndInput>
      <TextAndInput name="P_TRACK_ID"></TextAndInput>
      <TextAndInput name="P_ORDER"></TextAndInput>
      <button style={{ height: '30px' }} onClick={addTrack}>
        <Span text="생성"></Span>
      </button>
    </StyledForm>
  );
};

export default ProjectEditForm;

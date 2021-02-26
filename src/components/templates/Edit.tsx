import React from 'react';
import styled from 'styled-components';
import { fetchDataHook } from '../../utils';
import Table from '../molecules/AdminTable';
import TrackAddForm from '../organisms/TrackAddForm';

const EditTrackWrapper = styled.div`
  width: 100%;
  max-width: 1240px;
  min-height: 700px;
  margin: 0 auto;
`;

const HrUnderTable = styled.hr`
  margin-top: 30px;
  margin-bottom: 30px;
`;

const StyledEdit = styled.div``;

const Edit = (): JSX.Element => {
  const data = fetchDataHook('/api/tracks');
  return (
    <StyledEdit>
      <EditTrackWrapper>
        <Table data={data} />
        <HrUnderTable></HrUnderTable>
        <TrackAddForm></TrackAddForm>
      </EditTrackWrapper>
    </StyledEdit>
  );
};

export default Edit;

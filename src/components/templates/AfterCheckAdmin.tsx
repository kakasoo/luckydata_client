import React from 'react';
import styled from 'styled-components';
import { fetchDataHook } from '../../utils';
import Span from '../atoms/Span';
import AdminTable from '../molecules/AdminTable';
import ArticleEditForm from '../organisms/Edit/ArticleEditForm';
import ProjectEditForm from '../organisms/Edit/ProjectEditForm';
import TracEditForm from '../organisms/Edit/TrackEditForm';
import AdminEditForm from '../organisms/Edit/AdminEditForm';
import UserEditForm from '../organisms/Edit/UserEditForm';
import LoadingScreen from '../organisms/LoadingScreen';

const EditContext = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 50px auto;
`;

const HrUnderTable = styled.hr`
  margin-top: 30px;
  margin-bottom: 30px;
`;

const StyledEdit = styled.div``;

const AfterCheckAdmin = (): JSX.Element => {
  const data: any = fetchDataHook('/api/all', 60 * 1000);

  return data ? (
    <StyledEdit>
      <EditContext>
        <Span text="TRACKS Dashboard" fontSize="38px" fontWeight="bold"></Span>
        <AdminTable data={data.tracks} dataName="tracks" />
        <HrUnderTable></HrUnderTable>
        <TracEditForm></TracEditForm>
      </EditContext>

      <EditContext>
        <Span
          text="PROJECTS Dashboard"
          fontSize="38px"
          fontWeight="bold"
        ></Span>
        <AdminTable data={data.projects} dataName="projects" />
        <HrUnderTable></HrUnderTable>
        <ProjectEditForm></ProjectEditForm>
      </EditContext>

      <EditContext>
        <Span
          text="ARTICLES Dashboard"
          fontSize="38px"
          fontWeight="bold"
        ></Span>
        <AdminTable data={data.articles} dataName="articles" />
        <HrUnderTable></HrUnderTable>
        <ArticleEditForm></ArticleEditForm>
      </EditContext>

      <EditContext>
        <Span text="ADMINS Dashboard" fontSize="38px" fontWeight="bold"></Span>
        <AdminTable data={data.admins} dataName="admins" />
        <HrUnderTable></HrUnderTable>
        <AdminEditForm></AdminEditForm>
      </EditContext>

      <EditContext>
        <Span text="USERS Dashboard" fontSize="38px" fontWeight="bold"></Span>
        <AdminTable data={data.users} dataName="users" />
        <HrUnderTable></HrUnderTable>
        <UserEditForm></UserEditForm>
      </EditContext>
    </StyledEdit>
  ) : (
    <LoadingScreen></LoadingScreen>
  );
};

export default AfterCheckAdmin;

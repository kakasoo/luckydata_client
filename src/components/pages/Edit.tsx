import React from 'react';
import styled from 'styled-components';
import { fetchDataHook } from '../../utils';
import Span from '../atoms/Span';
import AdminTable from '../molecules/AdminTable';
import ArticleEditForm from '../organisms/ArticleEditForm';
import ProjectEditForm from '../organisms/ProjectEditForm';
import TracEditForm from '../organisms/TrackEditForm';
import AdminEditForm from '../organisms/AdminEditForm';
import UserEditForm from '../organisms/UserEditForm';

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

const Edit = (): JSX.Element => {
  const tracks = fetchDataHook('/api/tracks');
  const projects = fetchDataHook('/api/projects');
  const articles = fetchDataHook('/api/articles');
  const admins = fetchDataHook('/api/admins');
  const users = fetchDataHook('/api/users');

  return (
    <StyledEdit>
      <EditContext>
        <Span text="TRACKS Dashboard" fontSize="38px" fontWeight="bold"></Span>
        <AdminTable data={tracks} dataName="tracks" />
        <HrUnderTable></HrUnderTable>
        <TracEditForm></TracEditForm>
      </EditContext>

      <EditContext>
        <Span
          text="PROJECTS Dashboard"
          fontSize="38px"
          fontWeight="bold"
        ></Span>
        <AdminTable data={projects} dataName="projects" />
        <HrUnderTable></HrUnderTable>
        <ProjectEditForm></ProjectEditForm>
      </EditContext>

      <EditContext>
        <Span
          text="ARTICLES Dashboard"
          fontSize="38px"
          fontWeight="bold"
        ></Span>
        <AdminTable data={articles} dataName="articles" />
        <HrUnderTable></HrUnderTable>
        <ArticleEditForm></ArticleEditForm>
      </EditContext>

      <EditContext>
        <Span text="ADMINS Dashboard" fontSize="38px" fontWeight="bold"></Span>
        <AdminTable data={admins} dataName="admins" />
        <HrUnderTable></HrUnderTable>
        <AdminEditForm></AdminEditForm>
      </EditContext>

      <EditContext>
        <Span text="USERS Dashboard" fontSize="38px" fontWeight="bold"></Span>
        <AdminTable data={users} dataName="users" />
        <HrUnderTable></HrUnderTable>
        <UserEditForm></UserEditForm>
      </EditContext>
    </StyledEdit>
  );
};

export default Edit;

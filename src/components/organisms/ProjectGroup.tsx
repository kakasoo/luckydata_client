import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Span from '../atoms/Span';
import Project from './Project';
import setting from '../../config';
import P from '../atoms/P';

const StyledProjectGroup = styled.div`
  top: 119px;
  padding-top: 62px;
`;

const ProjectGroup = ({ history, location, match }: any): JSX.Element => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjectsOfUser = async () => {
      const cookie = localStorage.getItem('token');
      const TRACK_ID = match.params.id;

      try {
        const url = setting.FETCH_ADDRESS + `/api/user_tracks/${TRACK_ID}`;
        const response = await fetch(url, {
          headers: {
            Authorization: cookie || '',
          },
        });
        const body = await response.json();
        setProjects(body.result);
      } catch (error) {
        throw new Error(error);
      }
    };
    getProjectsOfUser();
  }, [history, location]);

  return (
    <StyledProjectGroup>
      <Span
        fontSize="18pt"
        lineHeight="30px"
        text="PROJECT"
        letterSpacing="-0.72pt"
        marginRight="236px"
      ></Span>
      <Span
        fontSize="18pt"
        lineHeight="30pt"
        text="POST"
        letterSpacing="-0.72pt"
      ></Span>

      {projects.length ? (
        projects.map((project: any, index: number) => (
          <Project
            key={index}
            title={project.ptitle}
            articles={project.child}
            trackUrl={match.url}
          ></Project>
        ))
      ) : (
        <div>
          <P fontSize="30px" text="프로젝트 목록을 불러옵니다."></P>
        </div>
      )}
    </StyledProjectGroup>
  );
};

export default ProjectGroup;

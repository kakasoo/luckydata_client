import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Span from '../atoms/Span';
import Project from './Project';
import setting from '../../config';

const StyledProjectGroup = styled.div`
  top: 119px;
  padding-top: 62px;
`;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const ProjectGroup = (props: any): JSX.Element => {
  const [projects, setProjects] = useState<any>([]);
  // TODO : TRACK_ID를 받을 수 있도록 해야 한다.
  const TRACK_ID = props.match.params.id;

  const getProjectsOfUser = () => {
    const cookie = localStorage.getItem('cookie');
    try {
      const url = `/user_tracks/${TRACK_ID}`;
      fetch(url, {
        method: 'GET',
        headers: {
          Authorization: cookie || '',
        },
      })
        .then(res => res.json())
        .then(res => setProjects(res.result));
    } catch (error) {
      throw new Error('authCheck error');
    }
  };

  useEffect(() => {
    getProjectsOfUser();
  }, []);

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

      {projects?.map((project: any, index: number) => (
        <Project
          key={index}
          projectNum={project.pid}
          title={project.ptitle}
          articles={project.child}
          trackUrl={props.match.url}
        ></Project>
      ))}
    </StyledProjectGroup>
  );
};

export default ProjectGroup;

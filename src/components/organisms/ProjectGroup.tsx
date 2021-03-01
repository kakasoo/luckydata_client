/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import styled from 'styled-components';
import Span from '../atoms/Span';
import Project from './Project';
import LoadingScreen from './LoadingScreen';
import NoData from './NoData';
import { fetchDataHook } from '../../utils';

const StyledProjectGroup = styled.div`
  top: 119px;
  padding-top: 62px;
`;

const ProjectGroup = ({ match }: any): JSX.Element => {
  const TRACK_ID = match.params.id;
  const projects = fetchDataHook(`/api/user_tracks/${TRACK_ID}`, 60 * 1000);

  return (
    <StyledProjectGroup>
      <Span
        fontSize="18px"
        fontWeight="bold"
        lineHeight="30px"
        text="PROJECT"
        letterSpacing="-0.72pt"
        marginRight="236px"
      ></Span>
      <Span
        fontSize="18px"
        fontWeight="bold"
        lineHeight="30pt"
        text="POST"
        letterSpacing="-0.72pt"
      ></Span>

      <div style={{ marginTop: '24px' }}>
        {projects ? (
          projects.length ? (
            projects.map((project: any, index: number) => (
              <Project
                key={index}
                title={`${index + 1}. ` + project.ptitle}
                articles={project.child}
                trackUrl={match.url}
              ></Project>
            ))
          ) : (
            <NoData></NoData>
          )
        ) : (
          <LoadingScreen />
        )}
      </div>
    </StyledProjectGroup>
  );
};

export default ProjectGroup;

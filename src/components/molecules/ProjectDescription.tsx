import React from 'react';
import styled from 'styled-components';
import P from '../atoms/P';
import ProjectTitleDecoration from './ProjectTitleDecoration';

const StyledProjectDescription = styled.div`
  width: 25.2%;
  min-width: 312px;
`;

const ProjectDescription = (props: { title: string }): JSX.Element => {
  const title = props.title;

  return (
    <StyledProjectDescription>
      <ProjectTitleDecoration />
      <P
        margin="0px"
        paddingLeft="18px"
        fontSize="24px"
        lineHeight="32px"
        letterSpacing="-0.96pt"
        color="rgb(51,51,51)"
        text={title}
        fontWeight="bold"
      ></P>
    </StyledProjectDescription>
  );
};

export default ProjectDescription;

import React from 'react';
import styled from 'styled-components';
import P from '../atoms/P';

const StyledProjectDescription = styled.div`
  width: 25.2%;
  min-width: 312px;
`;

const ProjectDescription = (props: any) => {
  const title = props.title;
  return (
    <StyledProjectDescription>
      <P
        paddingLeft="1.5%"
        fontSize="24px"
        lineHeight="32px"
        letterSpacing="-0.96pt"
        color="rgb(51,51,51)"
        text={title}
      ></P>
    </StyledProjectDescription>
  );
};

export default ProjectDescription;

import React from 'react';
import Span from '../atoms/Span';
import Article from './Article';
import Styled from 'styled-components';

const StyledProjectList = Styled.div`
  width:74.8%;
  overflow:hidden;
  padding-top:16px;
  padding-bottom:20px;
  `;

const ProjectList = (props: any) => {
  const articles = props.articles;
  const trackUrl = props.trackUrl;

  return (
    <StyledProjectList>
      {articles?.map((article: any, index: any) => (
        <Article
          key={index}
          paddingLeft="312px"
          paddingBottom="20px"
          title={article.atitle}
          articleID={article.aid}
          trackUrl={trackUrl}
        ></Article>
      ))}
    </StyledProjectList>
  );
};

export default ProjectList;

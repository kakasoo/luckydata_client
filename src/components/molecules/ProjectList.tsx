import React from 'react';
import Article from './Article';
import Styled from 'styled-components';
import { article, projectListProps } from '../interfaces';

const StyledProjectList = Styled.div`
  width:74.8%;
  overflow:hidden;
  padding-top:16px;
  padding-bottom:20px;
  `;

const ProjectList = (props: projectListProps): JSX.Element => {
  const articles = props.articles;
  const trackUrl = props.trackUrl;

  return (
    <StyledProjectList>
      {articles?.map((article: article, index: number) =>
        article.aid ? (
          <Article
            index={index}
            key={index}
            title={article.atitle}
            articleID={article.aid}
            trackUrl={trackUrl}
          ></Article>
        ) : (
          <div key={index}></div>
        ),
      )}
    </StyledProjectList>
  );
};

export default ProjectList;

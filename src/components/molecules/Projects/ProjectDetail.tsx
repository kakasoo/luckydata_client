import React from 'react';
import Article from '../Article';
import { article, projectListProps } from '../../interfaces';
import Div from '../../atoms/StyledDiv';

const ProjectDetail = (props: projectListProps): JSX.Element => {
  const articles = props.articles;
  const trackUrl = props.trackUrl;

  return (
    <Div width="74.8%" overflow="hidden" paddingTop="16px" paddingBottom="20px">
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
          <></>
        ),
      )}
    </Div>
  );
};

export default ProjectDetail;

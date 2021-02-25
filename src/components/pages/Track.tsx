import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import ProjectBanner from '../organisms/ProjectBanner';
import ProjectGroup from '../organisms/ProjectGroup';
import TrackList from '../templates/TrackList';
import ArticleContents from './ArticleDetailPage';

const StyledTrack = styled.div`
  width: 100%;
`;

const TrackInnerWrapper = styled.div`
  width: 100%;
  max-width: 1240px;
  min-height: 700px;
  margin: 0 auto;
`;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Track = ({ match }: any): JSX.Element => {
  return (
    <BrowserRouter>
      <StyledTrack>
        <ProjectBanner />
        <TrackInnerWrapper>
          <Route exact path={match.path} component={TrackList}></Route>
          <Route
            exact
            path={`${match.path}/:id`}
            component={ProjectGroup}
          ></Route>
          <Route
            exact
            path={`${match.path}/:id/articles/:article_id`}
            component={ArticleContents}
          ></Route>
        </TrackInnerWrapper>
      </StyledTrack>
    </BrowserRouter>
  );
};

export default Track;

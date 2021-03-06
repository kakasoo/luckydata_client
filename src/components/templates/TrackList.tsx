import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { fetchDataHook } from '../../utils';
import { track } from '../interfaces';
import LoadingScreen from '../organisms/LoadingScreen';
import NoData from '../organisms/NoData';
import Snow from '../unreuse/Snow';

const StyledTrackList = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1240px;
  margin: 30px auto;
`;

const tada = keyframes`
  0% { 
    transform: scale3d(1, 1, 1);
  }
  20% {
    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, 0deg);
  }
  30% {
    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, 5deg);
  }
  40% {
    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -5deg);
  }
  50% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 5deg);
  }
  60% {
    transform: scale3d(1,1, 1.1, 1.1) rotate3d(0, 0, 1, -5deg);
  }
  70% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 5deg);
  }
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -5deg);
  }
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 5deg);
  }
  100% {
     transform: scale3d(1, 1, 1);
`;

const StyledOneTrack = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
  -webkit-box-shadow: 5px 5px 8px 0px rgba(0, 0, 0, 0.4);
  margin: 30px;

  &:hover {
    animation-name: ${tada};
    animation-duration: 1s;
    cursor: pointer;
  }
`;

const TrackCardImg = styled.img`
  width: 300px;
  height: 250px;
  object-fit: cover;
`;

const TrackCardTitle = styled.span`
  display: inline-block;
  width: 300px;
  height: 50px;
  font-size: 1.15rem;
  text-align: center;
  line-height: 50px;
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TrackList = ({ match }: any): JSX.Element => {
  const tracks = fetchDataHook('/api/tracks', 60 * 1000);
  console.log(tracks);
  return (
    <StyledTrackList>
      <Snow></Snow>
      {tracks ? (
        tracks.length ? (
          tracks.map((track: track, index) => (
            <StyledOneTrack key={index}>
              <Link
                to={`${match.url}/${track.ID}`}
                style={{ fontSize: '30px' }}
              >
                <TrackCardImg src="/images/tracks.png"></TrackCardImg>
                <TrackCardTitle>{track.DEPARTMENT}</TrackCardTitle>
              </Link>
            </StyledOneTrack>
          ))
        ) : (
          <div style={{ width: '100%' }}>
            <NoData></NoData>
          </div>
        )
      ) : (
        <LoadingScreen></LoadingScreen>
      )}
    </StyledTrackList>
  );
};

export default TrackList;

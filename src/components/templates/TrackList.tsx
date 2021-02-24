import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import setting from '../../config';
import { track } from '../interfaces';

const StyledTrackList = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1240px;
  margin: 30px auto;
`;

const StyledOneTrack = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
  -webkit-box-shadow: 5px 5px 8px 0px rgba(0, 0, 0, 0.4);
  margin: 30px;
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
const TrackList = (props: any): JSX.Element => {
  const [tracks, setTracks] = useState([]);
  const getTracks = async () => {
    const cookie = localStorage.getItem('token');
    try {
      const url = setting.FETCH_ADDRESS + '/api/tracks';
      const response = await fetch(url, {
        headers: {
          Authorization: cookie || '',
        },
      });
      const body = await response.json();
      setTracks(body.result);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    getTracks();
  }, []);

  return (
    <StyledTrackList>
      {tracks?.map((track: track, index) => (
        <StyledOneTrack key={index}>
          <Link
            to={`${props.match.url}/${track.ID}`}
            style={{ fontSize: '30px' }}
          >
            <TrackCardImg src="/images/tracks.png"></TrackCardImg>
            <TrackCardTitle>{track.DEPARTMENT}</TrackCardTitle>
          </Link>
        </StyledOneTrack>
      ))}
    </StyledTrackList>
  );
};

export default TrackList;

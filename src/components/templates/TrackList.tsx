import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledTrackList = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 30px auto;
`;

const StyledOneTrack = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 10px;
  overflow: hidden;
  -webkit-box-shadow: 5px 5px 8px 0px rgba(0, 0, 0, 0.4);
`;

const TrackCardImg = styled.img`
  width: 250px;
  height: 200px;
  object-fit: cover;
`;

const TrackCardTitle = styled.span`
  display: inline-block;
  width: 250px;
  height: 50px;
  font-size: 1.15rem;
  text-align: center;
  line-height: 50px;
  border: 1px solid red;
`;

const TrackList = (props: any): JSX.Element => {
  const [tracks, setTracks] = useState([]);
  const getTracks = () => {
    const cookie = localStorage.getItem('cookie');
    try {
      fetch(process.env.REACT_APP_SERVER_ADDRESS + `/tracks`, {
        method: 'GET',
        headers: {
          Authorization: cookie || '',
        },
      })
        .then(res => res.json())
        .then(res => setTracks(res.result));
    } catch (error) {
      throw new Error('authCheck error');
    }
  };

  useEffect(() => {
    getTracks();
  }, []);

  return (
    <StyledTrackList>
      {tracks?.map((track: any, index) => (
        <StyledOneTrack>
          <Link
            to={`${props.match.url}/${track.ID}`}
            style={{ fontSize: '30px' }}
          >
            <TrackCardImg src="/images/tracks.png"></TrackCardImg>
            <TrackCardTitle key={index}>{track.DEPARTMENT}</TrackCardTitle>
          </Link>
        </StyledOneTrack>
      ))}
    </StyledTrackList>
  );
};

export default TrackList;

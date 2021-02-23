import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import setting from '../../config';
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

const TrackList = (props: any): JSX.Element => {
  const [tracks, setTracks] = useState([]);
  const getTracks = async () => {
    const cookie = localStorage.getItem('token');
    try {
      const url = '/api/tracks';
      console.log(url);
      const response = await fetch(url, {
        headers: {
          Authorization: cookie || '',
        },
      });
      console.log('response : ', response);
      const body = await response.json();
      console.log('body : ', body);
      setTracks(body.result);
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };

  useEffect(() => {
    getTracks();
  }, []);

  return (
    <StyledTrackList>
      {tracks?.map((track: any, index) => (
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

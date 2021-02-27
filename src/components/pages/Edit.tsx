import React, { useEffect, useState } from 'react';
import setting from '../../config';
import { YouAreNotAdmin } from '../../utils';
import LoadingScreen from '../organisms/LoadingScreen';
import AfterCheckAdmin from '../templates/AfterCheckAdmin';

const Edit = (): JSX.Element => {
  const [isAdmin, setResult] = useState<number | null>(null);
  // const isAdmin = null;
  useEffect(() => {
    const getData = async () => {
      const cookie = localStorage.getItem('token');
      try {
        const url = setting.FETCH_ADDRESS + '/api/admins';
        const response = await fetch(url, {
          method: 'HEAD',
          headers: {
            Authorization: cookie || '',
          },
        });
        setResult(response.status);
      } catch (error) {
        throw new Error(error);
      }
    };
    getData();
  }, []);

  return (
    <>
      {isAdmin ? (
        isAdmin === 200 ? (
          <AfterCheckAdmin></AfterCheckAdmin>
        ) : (
          YouAreNotAdmin()
        )
      ) : (
        <LoadingScreen></LoadingScreen>
      )}
    </>
  );
};

export default Edit;

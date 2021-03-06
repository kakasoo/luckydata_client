/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useEffect, useState } from 'react';
import setting from '../config';

export const getKoreanTime = (mysqlDateTime: any) => {
  const koreanTime = new Date(mysqlDateTime);
  return (
    koreanTime.getFullYear() +
    ' / ' +
    (koreanTime.getMonth() - 0 + 1) +
    ' / ' +
    koreanTime.getDate()
  );
};

export const startInterval = (callback: () => void, ms: number) => {
  callback();
  return setInterval(callback, ms);
};

export const fetchDataHook = (API_PATH: string, ms: number) => {
  const [data, setData] = useState<null | []>(null);

  useEffect(() => {
    const interval_id = startInterval(() => {
      const getData = async () => {
        const cookie = localStorage.getItem('token');
        const initData = localStorage.getItem(API_PATH);

        if (initData && initData !== 'undefined' && initData !== 'null') {
          setData(JSON.parse(initData));
        }

        try {
          const url = setting.FETCH_ADDRESS + API_PATH;
          const response = await fetch(url, {
            headers: {
              Authorization: cookie || '',
            },
          });
          const body = await response.json();
          setData(body.result);

          const subData = JSON.stringify(body.result);
          localStorage.setItem(API_PATH, subData);
        } catch (error) {
          throw new Error(error);
        }
      };
      getData();
    }, ms);

    return () => {
      clearInterval(interval_id);
    };
  }, []);

  return data;
};

export const fetchPost = async (API_PATH: string, POST_DATA: any) => {
  const cookie = localStorage.getItem('token');

  await fetch(setting.FETCH_ADDRESS + API_PATH, {
    method: 'POST',
    headers: {
      'content-Type': 'application/json',
      authorization: cookie || '',
    },
    body: JSON.stringify(POST_DATA),
  });
};

export const YouAreNotAdmin = () => {
  window.location.href = '/';
  alert('You are not admin.');
};

export const initFetch = async () => {
  fetchDataHook('/api/tracks', 60 * 60 * 1000);
};

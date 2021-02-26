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

export const fetchDataHook = (API_PATH: string) => {
  const [data, setData] = useState<null | []>(null);

  useEffect(() => {
    const interval_id = setInterval(() => {
      const getData = async () => {
        const cookie = localStorage.getItem('token');

        try {
          const url = setting.FETCH_ADDRESS + API_PATH;
          const response = await fetch(url, {
            headers: {
              Authorization: cookie || '',
            },
          });
          const body = await response.json();
          setData(body.result);
        } catch (error) {
          throw new Error(error);
        }
      };
      getData();
    }, 4000);

    return () => {
      clearInterval(interval_id);
    };
  }, [data]);

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

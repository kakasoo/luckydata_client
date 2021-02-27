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

// export const checkIsAdmin = () => {
//   const [isAdmin, setResult] = useState<number>(400);

//   useEffect(() => {
//     const getData = async () => {
//       const cookie = localStorage.getItem('token');
//       try {
//         const url = setting.FETCH_ADDRESS + '/api/admins';
//         const response = await fetch(url, {
//           headers: {
//             Authorization: cookie || '',
//           },
//         });
//         setResult(response.status);
//       } catch (error) {
//         throw new Error(error);
//       }
//     };
//     getData();
//   }, []);
// };

export const fetchDataHook = (API_PATH: string, ms: number) => {
  const [data, setData] = useState<null | []>(null);

  useEffect(() => {
    const interval_id = startInterval(() => {
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

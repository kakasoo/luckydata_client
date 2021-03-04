/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import axios from 'axios';
import qs from 'qs';
import setting from '../../config';
import LoadingScreen from '../organisms/LoadingScreen';

const Callback = ({ history, location }: any): JSX.Element => {
  useEffect(() => {
    async function getToken() {
      const { code } = qs.parse(location.search, {
        ignoreQueryPrefix: true,
      });

      try {
        const url = setting.FETCH_ADDRESS + `/api/auth/github`;
        const response: any = await axios.post(url, {
          code,
        });

        localStorage.setItem('token', response.data.access_token);
        window.location.href = '/';
      } catch (error) {
        history.push('/error');
      }
    }

    getToken();
  }, [location, history]);
  return <LoadingScreen />;
};

export default Callback;

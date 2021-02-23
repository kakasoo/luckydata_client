/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import axios from 'axios';
import qs from 'qs';

function Callback({ history, location }: any) {
  useEffect(() => {
    async function getToken() {
      const { code } = qs.parse(location.search, {
        ignoreQueryPrefix: true,
      });

      try {
        // 이 부분은 express에 요청하여 JWT 토큰을 발급합니다.
        const response: any = await axios.post(
          `http://localhost:4000/api/auth/github`,
          {
            code,
          },
        );
        // 유저 JWT 토큰을 저장합니다.
        localStorage.setItem('token', response.data.access_token);
        // history.push('/'); // 로그인이 완료되면 보여줄 페이지
        window.location.href = '/';
      } catch (error) {
        history.push('/error'); // api요청이 실패했을때 애러 핸들링 페이지
      }
    }

    getToken();
  }, [location, history]);
  return <div style={{ border: '1px solid red' }}>잠시만 기다려주세요</div>; // 이 부분에 로딩바와 같은 페이지를 렌더링 해도 좋아요.
}

export default Callback;

import dotenv from 'dotenv';
dotenv.config();

// 로컬 서버에게 요청을 보낼 것인가, 아니면 aws 서버에게 요청을 보낼 것인가?
const setting: any = {
  development: {
    SERVER_ADDRESS: process.env.REACT_APP_DEVELOP_SERVER,
    CLIENT_ROOT: process.env.REACT_APP_CLIENT_DEV_ROOT_ADDRESS,
  },
  production: {
    SERVER_ADDRESS: process.env.REACT_APP_SERVER_ADDRESS,
    CLIENT_ROOT: process.env.REACT_APP_CLIENT_ROOT_ADDRESS,
  },
};

// local에서는 REACT_APP_STAGE로 표현하고 있지만, nginx에서는 NODE_ENV=production으로 나온다.
const option: string = (process.env.REACT_APP_STAGE as string) || 'production';

export default setting[option];

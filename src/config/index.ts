import dotenv from 'dotenv';
dotenv.config();

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

console.log(setting);

const option: string = process.env.NODE_ENV;

export default setting[option];

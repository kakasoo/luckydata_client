import { createProxyMiddleware } from 'http-proxy-middleware';
import dotenv from 'dotenv';
dotenv.config();

export default function (app: any): void {
  app.use(
    '/api',
    createProxyMiddleware({
      // target: process.env.REACT_APP_SERVER_ADDRESS,
      target: process.env.REACT_APP_DEVELOP_SERVER,
      changeOrigin: true,
    }),
  );
}

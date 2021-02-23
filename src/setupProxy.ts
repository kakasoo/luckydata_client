import { createProxyMiddleware } from 'http-proxy-middleware';

export default function (app: any): void {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:4000',
      changeOrigin: true,
    }),
  );
}

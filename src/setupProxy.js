const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/auth',
    createProxyMiddleware({
      target: 'http://localhost:4000',
      changeOrigin: true,
    }),
  );
  app.use(
    '/auth/github',
    createProxyMiddleware({
      target: 'http://localhost:4000',
      changeOrigin: true,
    }),
  );
  app.use(
    '/auth/local',
    createProxyMiddleware({
      target: 'http://localhost:4000',
      changeOrigin: true,
    }),
  );
};

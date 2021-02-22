const { createProxyMiddleware } = require('http-proxy-middleware');

const target = '1.237.141.37';
console.log(target);
module.exports = function (app) {
  app.use(
    '/auth',
    createProxyMiddleware({
      target: 'http://1.237.141.37:4000',
      changeOrigin: true,
    }),
  );
  app.use(
    '/auth/github',
    createProxyMiddleware({
      target: 'http://1.237.141.37:4000',
      changeOrigin: true,
    }),
  );
  app.use(
    '/auth/local',
    createProxyMiddleware({
      target: 'http://1.237.141.37:4000',
      changeOrigin: true,
    }),
  );
};

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '*',
    createProxyMiddleware({
      target: 'https://6cad-218-50-40-149.jp.ngrok.io',
      changeOrigin: true,
    })
  );
};

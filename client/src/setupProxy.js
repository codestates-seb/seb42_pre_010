const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/users/signup',
    createProxyMiddleware({
      target: 'https://6cad-218-50-40-149.jp.ngrok.io',
      changeOrigin: true,
    })
  ),
    app.use(
      '/users/login',
      createProxyMiddleware({
        target: 'https://6cad-218-50-40-149.jp.ngrok.io',
        changeOrigin: true,
      })
    ),
    app.use(
      '/users',
      createProxyMiddleware({
        target: 'https://6cad-218-50-40-149.jp.ngrok.io',
        changeOrigin: true,
      })
    ),
    app.use(
      '/questions',
      createProxyMiddleware({
        target: 'https://6cad-218-50-40-149.jp.ngrok.io',
        changeOrigin: true,
      })
    );
};

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/users/signup',
    createProxyMiddleware({
      target: `${process.env.REACT_APP_API_URL}`,
      changeOrigin: true,
    })
  ),
    app.use(
      '/users/login',
      createProxyMiddleware({
        target: `${process.env.REACT_APP_API_URL}`,
        changeOrigin: true,
      })
    ),
    app.use(
      '/users?page=1&size=1000',
      createProxyMiddleware({
        target: `${process.env.REACT_APP_API_URL}`,
        changeOrigin: true,
      })
    ),
    app.use(
      '/users/:userId',
      createProxyMiddleware({
        target: `${process.env.REACT_APP_API_URL}`,
        changeOrigin: true,
      })
    ),
    app.use(
      '/questions',
      createProxyMiddleware({
        target: `${process.env.REACT_APP_API_URL}`,
        changeOrigin: true,
      })
    );
};

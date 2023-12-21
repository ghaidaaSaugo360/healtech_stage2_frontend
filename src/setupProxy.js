// setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');
const { default: API_BASE_URL } = require('./config/config');

module.exports = function (app) {
  app.use(
    '/patients',
    createProxyMiddleware({
      target: `${API_BASE_URL}`, // Replace with your Django server URL
      changeOrigin: true,
    })
  );
};

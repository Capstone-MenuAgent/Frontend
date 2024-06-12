const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/user',
    createProxyMiddleware({
      target: 'http://localhost:8080/user',	// 서버 URL or localhost:설정한포트번호
      changeOrigin: true,
    })
  );
  // app.use
};
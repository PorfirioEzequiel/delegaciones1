const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', // Ruta base para las solicitudes
    createProxyMiddleware({
      target: 'https://api.deepseek.com', // URL de la API
      changeOrigin: true,
      secure: false, // Desactiva la verificación SSL si es necesario
    })
  );
};
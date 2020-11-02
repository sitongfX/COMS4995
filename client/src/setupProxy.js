const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(createProxyMiddleware(['/api', '/auth/postmessage/', 'postmessage'], { target: 'http://localhost:5000' }));
};
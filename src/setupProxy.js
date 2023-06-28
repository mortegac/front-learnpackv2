const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(createProxyMiddleware('/api', { target: 'http://localhost:3000', changeOrigin: true }));
};

// /* eslint-disable import/no-extraneous-dependencies */
// import { createProxyMiddleware } from 'http-proxy-middleware'

// export default function (app) {
//     app.use(
//         '/api',
//         createProxyMiddleware({
//             target: 'http://localhost:3000',
//             changeOrigin: true
//         })
//     )
// };

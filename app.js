const express = require('express');
const app = new express();
const httpProxy = require('http-proxy-middleware');
const env_port = 8082;

app.use('/', express.static('dist'));


app.use(
  '/reliefmgr',
  httpProxy({ target: 'http://47.99.183.164:8080', changeOrigin: true })
);

app.listen(env_port, () => {
  console.log(
    `
    Starting server on http://localhost:${env_port} \n
    `
  );
});

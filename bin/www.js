// 创建服务器(基础配置)
const serverHandler = require('../app.js');
const http = require('http');

const PORT = 5577;

const server = http.createServer(serverHandler);

server.listen(PORT, () => {
  console.log('node 服务器启动了...')
})
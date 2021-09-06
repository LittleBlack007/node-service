// 服务器的业务代码
const { resolve } = require('path');
const querystring = require('querystring');
const { URL } = require('url');
const handleBlogRoute = require('./src/routes/blog');

const serverHandler = async(req,res) => {
  res.setHeader('Content-Type', 'application/json');  // 设置相应内容的格式

  //const URL = new URL(req.url,'http://lacalhost:5577/');  //创建一个URL实例，方便取得里面的参数

  const reqUrlData = {
    method: req.method,
    url: req.url,
    path: req.url.split('?')[0],
    query: querystring.parse(req.url.split('?')[1])
  }
  console.log('============');
  console.log('请求路径部分数据',reqUrlData);

  // 路由判断入口，获得响应数据  相当于mvc模型中的controller
  req.path = reqUrlData.path;
  req.queryParams = reqUrlData.queryParams;  // 将路径的上的参数保存到req中
  getPostData(req).then(data => {  // 因为的读取post data 是异步的
    req.body = data;
    const responseData = handleBlogRoute(req,res);
    if(responseData){
      res.end(JSON.stringify(responseData));
      return;
    }

    // 所有路径匹配不上
    res.writeHead(404, {'Content-Type': 'text/plain;charset=utf-8'});
    res.write('页面迷路了o(╥﹏╥)o');
    res.end();

    res.end(
      JSON.stringify(responseData)
    )
  });
}

const getPostData = (req) => {
  return new Promise((resolve,reject) => {
    if(req.method !== "POST"){
      resolve({});
      return;
    }

    if(req.headers['content-type'] !== 'application/json'){  // 目前只能处理json数据
      resolve({});
      return;
    }

    let postData = '';
    req.on('data', chunk => {
      postData += chunk;
    });
    req.on('end', () => {
      if(!postData){
        resolve({})
        return;
      }
      resolve(JSON.parse(postData));
    })
  })
}

module.exports = serverHandler;
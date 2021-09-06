// 博客对应路由响应
const {SuccessModel, ErrorModel} = require('../model/respinseModel.js');
const {getList}  = require('../controller/blog.js')

const handleBlogRoute = async(req,res) => {
  const method = req.method;
  
  if(method === 'GET' && req.path === '/api/blog/list'){
    let data = getList();
    let resData = new SuccessModel(data,undefined,100);
    console.log('resData',resData);
    return resData;
  }

  if(method=== 'POST' && req.path === '/api/blog/detail'){
    console.log(req.body);

    return new SuccessModel(req.body);
  }
}

module.exports = handleBlogRoute;

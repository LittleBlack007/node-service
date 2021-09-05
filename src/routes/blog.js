// 博客对应路由响应
const {SuccessModel, ErrorModel} = require('../model/respinseModel.js');
const {getList}  = require('../controller/blog.js')

const handleBlogRoute = (req,res) => {
  const method = req.method;
  
  if(method === 'GET' && req.path === '/api/blog/user'){
    const author = req.queryParams.author || '';
    const keyword = req.queryParams.keyword || '';
    data = {
      user: 'ppp',
      age: 18
    }
    let resData = new SuccessModel(data,undefined,101);
    return resData;
  }

  if(method=== 'POST' && req.path === '/api/blog/detail'){
    console.log(req.body);

    return new SuccessModel(req.body);
  }
}

module.exports = handleBlogRoute;

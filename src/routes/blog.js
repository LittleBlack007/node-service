// 博客对应路由响应
const {SuccessModel, ErrorModel} = require('../model/respinseModel.js');
const {getList}  = require('../controller/blog.js');
const {connection} = require('../db'); 

const handleBlogRoute = async(req,res) => {
  const method = req.method;
  
  if(method === 'GET' && req.path === '/api/blog/list'){
    let data = await getList1();
    let resData = new SuccessModel(data,undefined,100);
    console.log('resData',resData);
    return resData;
  }

  if(method=== 'POST' && req.path === '/api/blog/detail'){
    console.log(req.body);

    return new SuccessModel(req.body);
  }
}

async function getList1(){
  return new Promise((resolve,reject) => {
    connection.query(`select * from blogs`, (err,result) => {
      if(!err){
        resolve(result);
        return;
      }
      reject(err)
    })
  })
}

module.exports = handleBlogRoute;

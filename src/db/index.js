const mysql = require('mysql');
const {MYSQL_CONFIG} = require('../config/db')

const connection = mysql.createConnection(MYSQL_CONFIG);

// 开始连接
connection.connect();

// 封装执行sql的方法
function execSql(sql){
  return new Promise((resolve,reject) => {
    connection.query(sql,(err,result) => {
      if(err){
         return reject(err);
      }
      return resolve(result);
    })
  })
}

module.exports = {
  execSql
}
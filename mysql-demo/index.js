const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  prot: 3306,
  user: 'root',
  password:'888888',
  database: 'myblog'
})

// 开始连接
connection.connect();

// 执行mysql语句
const sql = `select * from blogs`
connection.query(sql, (err, result) => {
  if(err){
    console.log(err);
    return;
  }
  console.log(result);
})

// 关闭连接
connection.end();
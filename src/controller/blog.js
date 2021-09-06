const {execSql} = require('../db');

const getList = async() => {
  let result = null;
  const sql = `select * from blogs`;
  result = await execSql(sql);
  console.log('result',result)
  return result;
}

module.exports = {
  getList
}
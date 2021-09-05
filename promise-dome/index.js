const fs = require('fs');
const path = require('path');

function getFileContent(filename){
  return new Promise((resolve, reject) => {
    // 数据文件的绝对路径
    let fullFileName = path.resolve(__dirname,filename);

    fs.readFile(fullFileName, (err, data) => {
      if(err){
        console.log(err);
        reject(err);
      }
      resolve(JSON.parse(data.toString()));
    })
  })
}

getFileContent('a.json').then(res => {
  console.log(res);
  return getFileContent(res.next);
}).then(res => {
  console.log(res);
  return getFileContent(res.next);
}).then(res => {
  console.log(res);
})
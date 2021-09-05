##相当于 spring mvc 中的 controller类

### 处理post请求
if(req.method === 'POST'){
  let postData = '';

  req.on('data', chunk => {  // post 请求的的数据为二进制数据读取的
    console.log('chunk',chunk)
    postData += chunk.toString();
  })

  req.on('end', () => {
    console.log('postData', postData);
    res.end('数据接收完毕')
  })
}
// 响应数据的模板

class BaseData {
  constructor(data, msg){
    if(typeof data === 'string'){  // 兼容性处理，当传入字符串默认为msg
      this.msg = msg;
      return;
    }
    if(data){
      this.data = data;
    }
    if(msg){
      this.msg = msg;
    }
  }
}

// 成功的模型
class SuccessModel extends BaseData {
  state = 100;
  constructor(data,msg = '成功',state){
    super(data,msg);
    if(state !== undefined){
      this.state = state;
    }
  }
}

// 失败模型
class ErrorModel extends BaseData {
  state = -1;
  constructor(data, msg = '失败',state){
    super(data,msg);
    if(state !== undefined){
      this.state = state;
    }
  }
}

module.exports = {
  SuccessModel,
  ErrorModel
}
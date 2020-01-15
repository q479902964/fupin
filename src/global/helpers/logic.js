// 目前只支持三个表达式 @zoe todo
function logic(left1, operator1, right1,logic12, left2, operator2, right2,logic23,left3, operator3, right3,options) {
  if (arguments.length < 11) {
    throw new Error('Handlerbars Helper "logic" needs 11 parameters');
  }
  let operators = {
    '==': function (l, r) {
      return l == r;
    },
    '===': function (l, r) {
      return l === r;
    },
    '!=': function (l, r) {
      return l != r;
    },
    '!==': function (l, r) {
      return l !== r;
    },
    '<': function (l, r) {
      return l < r;
    },
    '>': function (l, r) {
      return l > r;
    },
    '<=': function (l, r) {
      return l <= r;
    },
    '>=': function (l, r) {
      return l >= r;
    },
    'typeof': function (l, r) {
      return typeof l == r;
    }
  };

  if (!operators[operator1]) {
    throw new Error('Handlerbars Helper "logic" doesn\'t know the operator ' + operator1);
  }
  if (!operators[operator2]) {
    throw new Error('Handlerbars Helper "logic" doesn\'t know the operator ' + operator2);
  }
  if (!operators[operator3]) {
    throw new Error('Handlerbars Helper "logic" doesn\'t know the operator ' + operator3);
  }

  let result1,result2,result3;

  if(left1){
     result1 = operators[operator1](left1, right1);
  }
  if(left2){
    result2 = operators[operator2](left2, right2);
  }
  if(left3){
    result3 = operators[operator3](left3, right3);
  }

  if(logic12&&logic23){
    let logic12Result = false;

    if(logic12 == '&&'){
      if(result1 && result2){
        logic12Result = true;
      }
    }else if(logic12 == '||'){
      if(result1 || result2){

        logic12Result = true;
      }
    }

    if(logic23 == '&&'){
      if(logic12Result && result3){
        return options.fn(this);
      }else{
        return options.inverse(this);
      }
    }else if(logic23 == '||'){
      if(logic12Result || result3){
        return options.fn(this);
      }else{
        return options.inverse(this);
      }
    }


  }
}

module.exports = logic;

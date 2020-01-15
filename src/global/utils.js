let loc = window.location;

export function query(key) {
  let searchStr = loc.search.slice(1);
  let query = {};

  //根据key获取对应的value
  if (key) {
    let obj = {};
    searchStr.split('&').forEach(val => {
      obj[val.substr(0, val.indexOf('='))] = val.substr(val.indexOf('=') + 1);
    });

    let value = obj[key] ? obj[key] : '';

    return value === '' || isNaN(value) ? value : value - 0;
  }

  //把整个地址序列化成一个对象
  searchStr.split('&').forEach(function(str) {
    if (str) {
      let ary = str.split('=');
      if (ary && ary.length > 0) query[ary[0]] = ary[1];
    }
  });

  return query ? query : '';

}


export function parseString(str) {
  let strToArr = str.split('&');

  let result = {}

  strToArr.map(item => {
    const arr = item.split('=');
    result[arr[0]] = decodeURIComponent(arr[1])
  })


  return result;
}

export function count(from, to) {
  if(!from || !to) return [];

  let result = [];


  if(from >= to) {
    for(let i = from; i >= to; i --) {
      result.push(i)
    }
  } else {
    for(let i = from; i <= to; i ++) {
      result.push(i)
    }
  }


  return result;
}
const url = {
  query: function(key) {
    let searchStr = loc.search.slice(1);
    let query = {};

    //根据key获取对应的value
    if (key) {
      let obj = {};
      searchStr.split('&').forEach(val => {
        obj[val.substr(0, val.indexOf('='))] = val.substr(val.indexOf('=') + 1);
      });

      let value = obj[key] ? obj[key] : '';

      return value === '' || isNaN(value) ? value : value - 0;
    }

    //把整个地址序列化成一个对象
    searchStr.split('&').forEach(function(str) {
      if (str) {
        let ary = str.split('=');
        if (ary && ary.length > 0) query[ary[0]] = ary[1];
      }
    });

    return query ? query : '';
  },
  //url字符串转为对象形式
  serializeQuery: function(str) {
    let newObj = {};

    str = str || location.search.slice(1);

    str.split('&').forEach(function(str) {
      let ary = str.split('=');
      if (ary && ary.length > 0) newObj[ary[0]] = ary[1];
    });

    return newObj;
  },
  host: function() {
    return window.location;
  },
};



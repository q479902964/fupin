'use strict';

import axios, {CancelToken, isCancel} from 'axios';


const defaultOpts = {
  method: 'get',
  timeout: 10000,
  // withCredentials: true, //表示跨域请求时是否需要使用凭证
};

// global config
// axios.defaults.timeout = 10000;

// 请求拦截器
axios.interceptors.request.use(
  config => {
    // 请求前
    console.log(config);
    return config;
  },
  error => {
    // error 处理
    return Promise.reject(error);
  }
);

// 响应拦截器
axios.interceptors.response.use(
  res => {
    return res.data;
  },
  error => {
    // 处理请求失败
    console.log('请求失败', error);
    return Promise.reject(error);
  }
);

export default function ajax(opts) {
  let {method, params, data} = opts;
  method = method ? method.toLocaleLowerCase() : 'get';

  //兼容POST请求
  if (method === 'post' && params) {
    opts['data'] = params;
  }

  //兼容GET请求
  if (method === 'get' && data) {
    opts['params'] = data;
  }

  //错误处理

  opts.error = function (err) {
    if(err.toString() !== 'Cancel') {

      alert('Server Connection Failed. Please Retry to connect again.')
    }

  };

  let ajaxOpts = Object.assign({}, defaultOpts, {
    // 设置取消函数，通过回到返回，opts 如果传入 cancelToken 则会覆盖
    cancelToken: new CancelToken(c => {
      if (typeof opts.setCancel === 'function') {
        opts.setCancel(c);
      }
    }),
  }, opts);

  return axios(ajaxOpts).catch((error) => {
    error && ajaxOpts.error && ajaxOpts.error(error);
  });
}

ajax.isCancel = isCancel;

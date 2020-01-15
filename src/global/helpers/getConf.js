//获得网站的全局配置项
const conf = {
    host: __DEV__ ? '//easyrentcars.com' : '',
    protocol: 'https:'
};

module.exports = function(key) {
    return conf[key];
};
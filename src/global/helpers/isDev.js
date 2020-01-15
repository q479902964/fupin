//开发状态下的hbs模板控制

module.exports = function( options ){
    return __DEV__ ? options.fn(this) : options.inverse(this);
};
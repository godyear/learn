let path = require('path');
console.log(path.resolve('dist'));

module.exports = {
    mode:'development',//模式，production,development
    entry:'./src/index.js',//入口
    output:{
        filename:'bundle.js',//打包后的文件名
        path:path.resolve(__dirname,'dist'),//路劲必须是一个绝对路径
    }
}
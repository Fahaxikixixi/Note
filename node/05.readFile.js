// 1.通过模块的名字fs对模块进行引用
const fs = require('fs');

//2.通过模块内部的readFile读取文件内容
fs.readFile('./01.js', 'utf8', (err, doc) => {
    //如果文件读取出错err是一个对象包含错误信息
    //如果文件读取正确err是nu1l
    //doc是文件读取的结果
    console.log(err)
    console.log(doc)
});
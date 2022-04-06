const fs = require('fs')
const path = require('path')


// 权限 r读权限4，w写权限 2，x就是执行的权限 1，不具备该权限就是0

// readFile 
/* fs.readFile(path.resolve('data1.txt'), 'utf-8', (err, data) => {
  // 错误优先
  console.log(err) 
  if (!null) {
    console.log(data)
  }
}) */

// writeFile  w+会把之前的清空再进行写入，r+是直接从第一位开始进行写入操作
/* fs.writeFile('data.txt', '123', {
  mode: 438,
  flag: 'w+',
  encoding: 'utf-8'
}, (err) => {
  if (!err) {
    fs.readFile('data.txt', 'utf-8', (err, data) => {
      console.log(data)
    })
  }
}) */

// appendFile 不清空内容，直接往后加
 fs.appendFile('data.txt', 'hello node.js',{},  (err) => {
  console.log('写入成功')
}) 

// copyFile  第一个参数源，第二个拷贝出来的文件名
/* fs.copyFile('data.txt', 'test.txt', () => {
  console.log('拷贝成功')
}) */

// watchFile
// fs.watchFile('data.txt', {interval: 20}, (curr, prev) => {
//   if (curr.mtime !== prev.mtime) {
//     console.log('文件被修改了')
//     fs.unwatchFile('data.txt')
//   }
// })
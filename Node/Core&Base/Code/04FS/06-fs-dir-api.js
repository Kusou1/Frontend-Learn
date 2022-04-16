const fs = require('fs')

// 一、access 
/* fs.access('a.txt', (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('有操作权限')
  }
}) */

// 二、stat 
/* fs.stat('a.txt', (err, statObj) => {
  console.log(statObj.size)
  console.log(statObj.isFile())
  console.log(statObj.isDirectory())
}) */

// 三、mkdir 创建目录
// 要保证父级目录是存在的，创建的时候更像是创建结尾的__basename
// recursive 代表递归，开启后父级目录不存在也会递归创建成功
/* fs.mkdir('a/b/c', {recursive: true}, (err) => {
  if (!err) {
    console.log('创建成功')
  }else{
    console.log(err)
  }
}) */

// 四、rmdir 删除目录
// 默认使用时，只能删除非空的目录， 如果想要递归删除非空目录，就要加上recursive
fs.rmdir('a', {recursive: true}, (err) => {
  if (!err) {
    console.log('删除成功')
  } else {
    console.log(err)
  }
})

// 五、readdir 读取目录信息，返回字符串数组
/* fs.readdir('a/b', (err, files) => {
  console.log(files)
}) */

// 六、unlink 删除文件
/* fs.unlink('a/a.txt', (err) => {
  if (!err) {
    console.log('删除成功')
  }
}) */
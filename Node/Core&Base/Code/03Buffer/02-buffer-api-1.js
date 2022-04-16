let buf = Buffer.alloc(6)

// fill 
/* buf.fill(123)
buf.fill('123',1,3) //第一个 代表填充数据，第二位是写入的初始位置，第三位是写入的结束位置
console.log(buf)
console.log(buf.toString()) */

// write 和fill相比，没有重复写入，当前数据源有多少个写多少个，第二位参数也代表写入的开始位置，向buffer中写入的长度
/* buf.write('123', 1, 4)
console.log(buf)
console.log(buf.toString()) */

// toString  utf编码下，一个汉字占三个字节，第二个参数表示从buffer里的那一个下标开始开始截取，第三个参数截取截止下标
/* buf = Buffer.from('拉勾教育')
console.log(buf)
console.log(buf.toString('utf-8', 3, 9)) */

// slice 与字符串截取差不多，负数代表从后往前
/* buf = Buffer.from('拉勾教育')
let b1 = buf.slice(-3)
console.log(b1)
console.log(b1.toString()) */

// indexOf 查看想找的buffer里是否存在目标buffer
/* buf = Buffer.from('zce爱前端，爱拉勾教育，爱大家，我爱所有')
console.log(buf)
console.log(buf.indexOf('爱qc', 4)) */

// copy 拷贝
let b1 = Buffer.alloc(6)
let b2 = Buffer.from('拉勾')

// b1代表被拷贝的容器，b2代表数据源，第二个参数表示从容器buffer的第几个位置开始写入，第三个表示从数据源的第几位开始读取，第四个参数表示从数据源的第几位停止读取
b2.copy(b1, 3, 3, 6)
console.log(b1.toString())
console.log(b2.toString())

/* let b1 = Buffer.from('拉勾')
let b2 = Buffer.from('教育')


// contact可将buffer以数组的方式拼接

let b = Buffer.concat([b1, b2], 9)
console.log(b)
console.log(b.toString()) */

// isBuffer  判断是否是一个buffer
let b1 = '123'
console.log(Buffer.isBuffer(b1))
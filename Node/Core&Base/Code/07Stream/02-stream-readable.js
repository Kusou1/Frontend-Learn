const {Readable} = require('stream')

// 模拟底层数据
let source = ['lg', 'zce', 'syy']

// 自定义类继承 Readable
class MyReadable extends Readable{
  constructor(source) {
    super()
    this.source = source
  }
  // 只负责定义，并没有去实现
  _read() {
    // null表示底层数据被读取完
    let data = this.source.shift() || null 
    this.push(data)
  }
}

// 实例化
let myReadable = new MyReadable(source)

/* myReadable.on('readable', () => {
  let data = null 
  while((data = myReadable.read(2)) != null) {
    console.log(data.toString())
  }
}) */

myReadable.on('data', (chunk) => {
  console.log(chunk.toString())
})
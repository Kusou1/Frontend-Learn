let {Transform} = require('stream')


class MyTransform extends Transform{
  constructor() {
    super()
  }
  // chunk表示我们当前需要处理的数据,从传给read方法的stream转换而来，
  // encoding用于设置编码的类型，如过数据块是个buffer，他就是个特殊值，buffer
  // callback，一个chunk处理完之后必须要去执行的回调函数，也有两个回调参数，第一个产生错误时的回调对象，第二个是chunk，如果我们设置了，那么他的效果就跟调用push时所传入的chunk是一样的
  _transform(chunk, en, cb) {
    this.push(chunk.toString().toUpperCase())
    cb(null)
  }
}

let t = new MyTransform()

t.write('a')

t.on('data', (chunk) => {
  console.log(chunk.toString())
})
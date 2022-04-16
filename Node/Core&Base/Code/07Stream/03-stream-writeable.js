const {Writable} = require('stream')

class MyWriteable extends Writable{
  constructor() {
    super()
  }
  _write(chunk, en, done) {
    process.stdout.write(chunk.toString() + '<----')
    // 同步代码执行完成之后再执行回调，这样就可以保证，在数据写入完成之后再去使用这个回调
    process.nextTick(done)
  }
}

let myWriteable = new MyWriteable()

myWriteable.write('拉勾教育', 'utf-8', () => {
  console.log('end')
})
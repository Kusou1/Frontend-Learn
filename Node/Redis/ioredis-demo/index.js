const ioredis = require('ioredis')

// 1. 建立连接
const redis = new ioredis({
  port: 6379,
  host: '127.0.0.1',
  // 启用 showFriendlyErrorStack 时，ioredis 将为您优化错误堆栈
  // 但是，优化错误堆栈会大大降低性能。因此，默认情况下，此选项是禁用的，只能用于调试目的。不建议在生产环境中使用此功能
  showFriendlyErrorStack: true
})

// async function main () {
//   try {
//     await redis.set('adbs')
//     console.log('OK')
//   } catch (err) {
//     console.log('操作失败', err)
//   }
// }

// main()

// async function main () {
//   try {
//     const ret = await redis
//       .multi()
//       .set('Jack', 100)
//       .set('Rose', 200)
//       .exec()
//     console.log(ret)
//   } catch (err) {
//     console.log('操作失败', err)
//   }
// }

// main()

// 使用pipeline流水线可以使用流水线将命令在内存中排队，然后一次全部发送到Redis，性能提升
async function main () {
  try {
    const pipeline = redis.pipeline()
    for (let i = 0; i < 100; i++) {
      pipeline.set(`${i}-foo`, i)
    }
    const ret = await pipeline.exec()
    console.log(ret)
  } catch (err) {
    console.log('操作失败', err)
  }
}

main()

// async function main () {
//   try {
//     const ret = await redis.get('foo')
//     console.log(ret)
//   } catch (err) {
//     console.log('操作失败', err)
//   }
// }

// main()

// redis.get('foo')
//   .then(ret => {
//     console.log(ret)
//   })
//   .catch(err => {
//     console.log('获取失败', err)
//   })

// 2. 操作 Redis 数据库
// 写入数据
// redis.set('foo', 'bar', (err, ret) => {
//   if (err) {
//     return console.log('写入失败', err)
//   }

//   console.log('写入成功', ret)
// })

// get数据
// redis.get('foo', (err, ret) => {
//   if (err) {
//     return console.log('获取失败', err)
//   }
//   console.log(ret)
// })

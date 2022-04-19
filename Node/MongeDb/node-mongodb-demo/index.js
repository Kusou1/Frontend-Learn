const { MongoClient, ObjectID } = require('mongodb')

const client = new MongoClient('mongodb://127.0.0.1:27017', {
  useUnifiedTopology: true
})

async function run () {
  try {
    // 开始连接
    await client.connect()

    const testDb = client.db('test')
    const inventoryCollection = testDb.collection('inventory')

    // 创建文档
    // const ret = await inventoryCollection.insertOne({
    //   a: 1,
    //   b: '2',
    //   c: true,
    //   d: [1, 2, 3]
    // })

    // console.log(ret)


    // 查询文档
    // const ret = await inventoryCollection.findOne({
    //   item: 'notebook'
    // })

    // find()  ret.toArray()
    // findOne() ret
    // console.log(ret)
    // console.log(await ret.toArray())

    // 删除文档
    // const ret = await inventoryCollection({
    //   _id: ObjectID('5fa5164f95060000060078b1')
    // })
    // console.log(ret)

    // 更新文档
    const ret = await inventoryCollection.updateOne({
      _id: ObjectID('5fa5164f95060000060078af')
    }, {
      $set: {
        qty: 100
      }
    })
    console.log(ret)
  } catch (err) {
    // 连接失败
    console.log('连接失败', err)
  } finally {
    // 关闭连接
    await client.close()
  }
}

run()

// 开始连接
// client.connect().then(() => {
//   // 连接成功了
// }).catch(() => {
//   console.log('连接失败了')
// })

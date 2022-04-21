const fs = require('fs')
const { promisify } = require('util')
const path = require('path')

// 转化成promisy的形式
const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)

const dbPath = path.join(__dirname, './db.json')

exports.getDb = async () => {
  // 在node中，能用异步就不要用同步，同步会造成阻塞
  const data = await readFile(dbPath, 'utf8')
  return JSON.parse(data)
}

exports.saveDb = async db => {
  const data = JSON.stringify(db, null, '  ')
  await writeFile(dbPath, data)
}

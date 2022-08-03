class Queue {
  constructor () {
    // 用于存储队列数据
    this.queue = []
    this.count = 0
  }
  // 入队方法
  enQueue (item) {
    this.queue[this.count++] = item
  }
  // 出队方法
  deQueue () {
    if (this.isEmpty()) {
      return
    }
    // 删除 queue 的第一个元素
    // delete this.queue[0]
    // 利用 shift() 移除数组的第一个元素
    this.count--
    return this.queue.shift()
  }
  isEmpty () {
    return this.count === 0
  }
  // 获取队首元素值
  top () {
    if (this.isEmpty()) {
      return
    }
    return this.queue[0]
  }
  size () {
    return this.count
  }
  clear () {
    // this.queue = []
    this.length = 0
    this.count = 0
  }
}

const q = new Queue()
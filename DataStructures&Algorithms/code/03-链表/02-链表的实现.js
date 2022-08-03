// 节点类
class LinkedNode {
  constructor (value) {
    this.value = value
    // 用于存储下一个节点的引用
    this.next = null
  }
}

// 链表类
class LinkedList {
  constructor () {
    this.count = 0
    this.head = null
  }
  // 添加节点 (尾）
  addAtTail (value) {
    // 创建新节点
    const node = new LinkedNode(value)
    // 检测链表是否存在数据
    if (this.count === 0) {
      this.head = node
    } else {
      // 找到链表尾部节点，将最后一个节点的 next 设置为 node
      let cur = this.head
      while (cur.next != null) {
        cur = cur.next
      }
      cur.next = node
    }
    this.count++
  }
  // 添加节点（首）
  addAtHead (value) {
    const node = new LinkedNode(value)
    if (this.count === 0) {
      this.head = node
    } else {
      // 将 node 添加到 head 的前面
      node.next = this.head
      this.head = node
    }
    this.count++
  }
  // 获取节点（根据索引）
  get (index) {
    if (this.count === 0 || index < 0 || index >= this.count) {
      return
    }
    // 迭代链表，找到对应节点
    let current = this.head
    for (let i = 0; i < index; i++) {
      current = current.next
    }
    return current
  }
  // 添加节点（根据索引）
  addAtIndex (value, index) {
    if (this.count === 0 || index >= this.count) {
      return
    }
    // 如果 index <= 0，都添加到头部即可
    if (index <= 0) {
      return this.addAtHead(value)
    }
    // 后面为正常区间处理
    const prev = this.get(index - 1)
    const next = prev.next

    const node = new LinkedNode(value)
    prev.next = node
    node.next = next

    this.count++
  }
  // 删除（根据索引）
  removeAtIndex (index) {
    if (this.count === 0 || index < 0 || index >= this.count) {
      return
    }
    if (index === 0) {
      this.head = this.head.next
    } else {
      const prev = this.get(index - 1)
      prev.next = prev.next.next
    }
    this.count--
  }
}

// 测试代码
const l = new LinkedList()
l.addAtTail('a')
l.addAtTail('b')
l.addAtTail('c')


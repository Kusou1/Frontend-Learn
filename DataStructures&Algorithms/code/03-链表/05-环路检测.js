/**
 * @param {ListNode} head
 * @return {ListNode} 起始节点
 */
// 快慢指针相遇时的公式a+(b+nb+nc)=2(a+b)
// 推出 a= (n-1)(b+c)+c
// b+c为环的长度
// 故a=c
var detectCycle = function(head) {
    if (head === null || head.next === null) {
      return null
    }
    // 声明快慢指针
    let slow = head
    let fast = head

    while (fast !== null) {
      // 慢每次指针移动一位
      slow = slow.next
      // 如果满足条件，说明 fast 为尾部结点，不存在环
      if (fast.next === null) {
        return null
      }
      // 快指针每次移动两位
      fast = fast.next.next

      // 检测是否有环
      if (fast === slow) {
        // 找到环的起点位置
        let ptr = head
        while (ptr !== slow) {
          ptr = ptr.next
          slow = slow.next
        }
        // ptr 和 slow 的交点就是环的起始节点
        return ptr
      }
    }
    // while 结束，说明 fast 为 null，说明链表没有环
    return null
};
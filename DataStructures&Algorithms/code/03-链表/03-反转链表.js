/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  // 声明变量记录 prev、cur
  let prev = null
  let cur = head
  // 当 cur 是节点时，进行迭代
  while (cur) {
    // 先保存当前节点的下一个节点
    const next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }
  return prev
};
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (head === null || head.next === null) {
    return head
  }
  const newHead = reverseList(head.next)
  // 能够第一次执行这里的节点为 倒数第二个 节点
  head.next.next = head
  // head 的 next 需要在下一次递归执行时设置。当前设置为 null 不影响
  //   - 可以让最后一次（1）的 next 设置为 null
  head.next = null
  return newHead
};
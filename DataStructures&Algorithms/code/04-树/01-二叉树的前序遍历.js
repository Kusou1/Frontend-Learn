/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
/* var preorderTraversal = function(root) {
  // 用于存储遍历的结果
  const res = []
  // 设置函数用于进行递归遍历
  const preorder = (root) => {
    // 当前结点为空时，无需进行递归
    if (!root) {
      return
    }
    // 记录根节点值
    res.push(root.val)
    // 前序遍历左子树
    preorder(root.left)
    // 前序遍历右子树
    preorder(root.right)
  }
  preorder(root)
  return res
}; */

const preorderTraversal = function(root) {
  const res = []
  const stk = []
  while (root || stk.length) {
    while (root) {
      // 右子结点入栈
      stk.push(root.right)
      // 记录根节点
      res.push(root.val)
      // 下一步处理左子节点
      root = root.left
    }
    // 左子树处理完毕，将 stk 出栈，处理右子树
    root = stk.pop()
  }
  return res
}
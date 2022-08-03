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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const res = []
  if (!root) {
      return res
  }
  // 声明队列用于存储后续数据
  const q = []
  q.push(root)

  // 遍历队列
  while (q.length !== 0) {
      // 针对本轮操作，创建一个新的二维数组
      res.push([])
      let len = q.length
      for (let i = 0; i < len; i++) {
          // 将本次操作的结点出队
          const node = q.shift()
          res[res.length - 1].push(node.val)
          // 检测是否存在左右子结点，如果有，入队即可
          if (node.left) {
              q.push(node.left)
          }
          if (node.right) {
              q.push(node.right)
          }
      }
  }
  return res
};
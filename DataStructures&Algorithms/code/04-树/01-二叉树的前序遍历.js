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
    // res.push放在中间就为中序遍历
    // 前序遍历右子树
    preorder(root.right)
    // res.push放在后面就为后序遍历
  }
  preorder(root)
  return res
}; */

var preorderTraversal = function(root) {
  // 初始化数据
  const res =[];
  const stack = [];
  while (root || stack.length){
    while(root){
      res.push(root.val);
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    root = root.right;
  }
  return res;
};
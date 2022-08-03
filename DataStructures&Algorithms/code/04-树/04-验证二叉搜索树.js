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
 * @return {boolean}
 */
/* var isValidBST = function(root) {
  // 通过一个辅助函数来统一设置左右子树的比较
  return helper(root, -Infinity, Infinity);
};

const helper = (root, lower, upper) => {
  if (root === null) {
    return true
  }
	// 当前节点值超出边界，说明二叉树为非 BST
  if (root.val <= lower || root.val >= upper) {
    return false;
  }
  // 否则，递归处理左右子节点，并更新大小范围
  // 同时根据左右子节点的返回值进行返回，只有全部递归结果均为 true， 才说明二叉树为 BST
  return helper(root.left, lower, root.val) && helper(root.right, root.val, upper);
} */

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
 * @return {boolean}
 */
var isValidBST = function(root) {
  let stk = []
  // 用于记录上一次取得的节点值，BST 中这个值应小于当前节点
  // 设置默认值为 -Infinity 避免对比较结果产生干扰
  let oldNode = -Infinity

  while (root || stk.length) {
    while (root) {
      stk.push(root) 
      root = root.left
    }
    root = stk.pop()
    // 如果任意节点比上个节点值小，说明二叉树不是 BST
    if (root.val <= oldNode) {
      return false
    }
    // 通过比较，记录当前节点值
    oldNode = root.val
    root = root.right
  }
  return true
};
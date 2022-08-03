/**
 * @param {number[]} nums 传入数组
 * @param {number} k 滑动窗口宽度
 * @return {number[]} 
 */
var maxSlidingWindow = function(nums, k) {
  if (k <= 1) {
    return nums
  }
  const result = []
  const deque = []
  // 1 将窗口第一个位置的数据添加到 deque 中，保持递减
  deque.push(nums[0])
  let i = 1
  for (; i < k; i++) {
    // - 存在数据
    // - 当前数据大于队尾值
    //   - 出队，再重复比较
    while (deque.length && nums[i] > deque[deque.length - 1]) {
      deque.pop()
    }
    deque.push(nums[i])
  }
  // 将第一个位置的最大值添加到 result
  result.push(deque[0])

  // 2 遍历后续的数据
  const len = nums.length
  for (; i < len; i++) {
    // 同上进行比较
    while (deque.length && nums[i] > deque[deque.length - 1]) {
      deque.pop()
    }
    deque.push(nums[i])
    // 检测当前最大值是否位于窗口外
    if (deque[0] === nums[i - k]) {
      deque.shift()
    }
    // 添加最大值到 result
    result.push(deque[0])
  }

  return result
};
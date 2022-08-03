/**
 * @param {number[]} T 每日温度数组 [73, 74, 75, 71, 69, 72, 76, 73]
 * @return {number[]} 等待天数列表 [1, 1, 4, 2, 1, 1, 0, 0]
 */
var dailyTemperatures = function(T) {
  // 创建单调栈用于记录（存储索引值，用于记录天数）
  const stack = [0]
  let count = 1

  // 创建结果数组（默认将结果数组使用 0 填充）
  const len = T.length
  const arr = new Array(len).fill(0)

  // 遍历 T
  for (let i = 1; i < len; i++) {
    let temp = T[i]
    // 使用 temp 比较栈顶值，如果栈顶值小，出栈（计算日期差，并存储），并重复操作
    //  - stack[count - 1] 代表栈顶值
    while (count && temp > T[stack[count - 1]]) {
      // 出栈
      let index = stack.pop()
      count--
      // 计算 index 与 i 的差，作为 index 位置的升温日期的天数使用 
      arr[index] = i - index
    }
    // 处理完毕，当前温度入栈（等待找到后续的更大温度）
    stack.push(i)
    count++
  }
  return arr
}
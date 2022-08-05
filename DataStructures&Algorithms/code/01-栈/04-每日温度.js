/**
 * @param {number[]} T 每日温度数组 [73, 74, 75, 71, 69, 72, 76, 73]
 * @return {number[]} 等待天数列表 [1, 1, 4, 2, 1, 1, 0, 0]
 */
 var dailyTemperatures = function(temperatures) {
  // 创建单调栈用于记录 (存储索引值，用于记录天数)
  const stack = [0]
  let count = 1
  
  // 创建结果数组 (默认将结果数组使用0填充)
  const len = temperatures.length
  const arr = new Array(len).fill(0)
  
  for(let i = 1; i< len ; i++){
      let temp = temperatures[i]
      // 使用temp 比较栈顶值，如果栈顶值小，出栈，并重复操作
      // stack[count-1] 栈顶值
      while(count && temp > temperatures[stack[count-1]]){
          // 出栈
          let index = stack.pop()
          count--
          // 计算index与i的差作为升温日期的天数使用
          arr[index]= i - index
      }
      // 处理完毕，当前温度入栈（等待找到后续的更大温度）
      stack.push(i)
      count++
  }

  return arr
};
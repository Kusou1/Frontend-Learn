const arr = []
console.time('perfTest')
for (let i = 0; i < 100000; i++) {
  // arr.push(i)
  // 数组从头部进行添加会导致后面元素的下标都进行位移，性能开销大
  arr.unshift(i)
}
console.timeEnd('perfTest')
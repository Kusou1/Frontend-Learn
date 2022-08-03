const arr = []
console.time('perfTest')
for (let i = 0; i < 100000; i++) {
  // arr.push(i)
  arr.unshift(i)
}
console.timeEnd('perfTest')
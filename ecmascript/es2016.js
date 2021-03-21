//ECMAScript 2016

//Array.prototype.includes 检查数组中是否包含某个元素

// const arr=['foo',1,NaN,false]


//先前我们是用indexOf的方式来判断，有的话返回下标，没有的话返回负一，有一个缺点是无法查找NaN
// console.log(arr.indexOf('foo'));
// console.log(arr.indexOf(NaN));

//而include()方法直接返回存在或不存在
// console.log(arr.includes('foo'));
// console.log(arr.includes(NaN));

//指数运算符  ---------------------------------

//先前的做法
console.log(Math.pow(2,10));

//新
console.log(2 ** 10);


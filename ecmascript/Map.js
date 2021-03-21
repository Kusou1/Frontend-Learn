// Map数据结构  类似对象

// const obj={}

// obj[true]='value'
// obj[123]='value'
// obj[{a:1}]='value'
//传统对象的键会将其转换成字符串，返回toString()的结果
// console.log(Object.keys(obj))
//有些应用场景需要以对象作为键值，就会有问题返回的会是'[object,object]'无法区别

//Map才能是真正意义上的键值对集合，用来映射两种任意类型的数据的对应关系

const m=new Map()

const tom={name:"tom"}

m.set(tom,90)

console.log(m);
console.log(m.get(tom));

// m.has()
// m.delete()
//m.clear()

m.forEach((value,key)=>{
    console.log(value,key);
})

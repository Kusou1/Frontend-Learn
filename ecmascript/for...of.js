//先前遍历数组和对象的方式都存在一定的局限性，新出的for...of将作为遍历所有数据结构的统一方式
const arr=[100,200,300,400]

for(const item of arr){
    console.log(item);
}
//相较于forEach,for of 可以通过break去终止遍历，而forEach是做不到的

arr.forEach(item=>{
    console.log(item);
})

for(const item of arr){
    console.log(item);
    if(item>100){
        break
    }
}

//以前要终止的话只能用数组实例的arr.some(),或者arr.every()方法，在some方法的回调方法里返回true，在every方法的回调里返回false终止遍历

//除了数组可以被遍历以外，一些伪数组同样可以被遍历，或者在DOM操作中一些元素节点的列表
//他们的遍历都跟普通的数组遍历没有区别

//还有ES6新增的Set和Map对象

//遍历Map对象的时候返回的是键和值，我们可以用结构赋值进行遍历拿到键和值

const m = new Map()
m.set('foo','123')
m.set('bar','345')

for(const [key,value] of m){
    console.log(key,value);
}


//但不能直接遍历普通对象

// const obj={foo:123,bar:456}

// for (const item of obj){
//     console.log(item);
// }


const obj={
    foo:'value1',
    bar:"value2"
}

//Object.values-----------------返回对象值
// console.log(Object.values(obj));



//Object.entries------------------返回键值对，可以直接用for of 遍历对象
// console.log(Object.entries(obj));
// for (const [key,value] of Object.entries(obj)){
//     console.log(key,value);
// }

// console.log(new Map(Object.entries(obj)));



//Object.getOwnPropertyDescriptions ----------------------获取对象的完整描述信息
const p1={
    firstName:'Lei',
    lastName:'Wang',
    get fullName(){
        return this.firstName +''+this.lastName
    }
}

// const p2 =Object.assign({},p1)
// p2.firstName='zsh'
// console.log(p2);


const descriptors=Object.getOwnPropertyDescriptors(p1)
// console.log(descriptors);
const p2=Object.defineProperties({},descriptors)
p2.firstName='zce'
console.log(p2.fullName);

//Object.prototype.padStart / Object.prototype.padEnd ---------------

const books={
    html:5,
    css:16,
    javascript:128
}

for(const [name,count] of Object.entries(books)){
    console.log(`${name.padEnd(16,'-')}|${count.toString().padStart(3,'0')}`);
}
// 允许在函数参数中添加尾逗号 ----------------------

function foo(bar,baz,){

}
//生成器generator 解决在复杂函数中的回调函数嵌套，提供更好的异步编程解决方案

//在函数名前加个*号就变成了生成器函数
// function * foo(){
//     console.log('zsh');
//     return 100;
// }

// const result=foo()
// console.log(result.next());
//打印出生成器对象

//在使用的时候会配合yield
//生成器函数会返回一个生成器对象，调用next()才会使函数体执行，执行过程中遇到yield,函数的执行就会被暂停下来，而且yield后面的值将会作为next的结果返回

// function * foo (){
//     console.log('1111');
//     yield 100;
//     console.log('2222');
//     yield 200;
//     console.log('3333');
//     yield 300
// }

// const generator=foo()

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());


//Genrator生成器的应用

//案例1 发号器  自增id

// function * createIdMaker (){
//     let id=1
//     while (true) {
//         yield id++
//     }
// }

// const idMaker=createIdMaker()

// console.log(idMaker.next().value);

//案例2 使用Generator 函数实现 iterator 方法
const todos = {
    life: ['吃饭', '睡觉', '打豆豆'],
    learn: ['语文', '数学', '外语'],
    work: ['喝茶'],

    [Symbol.iterator]: function * () {
        const all = [...this.life, ...this.work, ...this.learn]
        for(const item of all){
            yield item;
        }
    }
}

for (const item of todos){
    console.log(item);
}
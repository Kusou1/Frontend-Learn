//异步执行模式
//异步模式的api不会等待这个任务的结束才开始下一个任务
//对于耗时操作，都是开启过后就立即往后执行下一个任务
//后续逻辑一般会通过回调函数的方式定义
//异步模式对Javascript非常重要，因为没有它单线程的Javascript语言就无法同时处理大量耗时任务
//但是难点就在于，单线程下的异步执行顺序并不会像同步代码一样通俗易懂，代码的执行顺序相对混乱

console.log('global begin');

setTimeout(() => {
    console.log('timer1 invoke');
}, 1800);

setTimeout(() => {
    console.log('timer2 invoke');

    setTimeout(() => {
        console.log('inner invoke');
    }, 1000);
}, 1000);

console.log('global end');


// 回调函数   所有异步编程方案的根基，可以理解为一件你想要做的事情，明确知道这件事如何一步步往下做，但不知道所依赖的步骤什么时候能够完成，最好的方式就是把这件事所依赖的步骤，写到一个函数当中

// 由调用者定义，交给执行者执行的函数，就被称为回调函数
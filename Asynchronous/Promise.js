//Promise  一种更优的异步编程统一方案

//直接使用传统回调的方式去完成复杂的异步流程，就无法避免大量的回调嵌套
//CommonJS社区提出了Promise的规范，一种更合理，更强大的统一解决方案

//Promise对象用来表示异步任务结束过后究竟是成功还是失败，不论成功或失败，都会有相对应的反应

//Promise基本用法
const promise = new Promise (function(resolve,reject){
    //这里用于“兑现”承诺
    resolve(100)//承诺达成

    // reject(new Error('promise rejected'))//承诺失败

})

promise.then(function (value){
    console.log('resolved',value);
},function (error){
    console.log('rejected',error);
})


//promise在后面执行
console.log('end')
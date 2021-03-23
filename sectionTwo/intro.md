* 异步编程
* 单线程JavaScript异步方案
* 采用单线程模式的原因和他一开始的设计初衷有关，一开始出现的原因就是一门运行在浏览器端的脚本语言，目的是实现页面上的动态交互
* 实现页面上交互的核心就是Dom操作，所以要使用单线程，不然就会出现很复杂的线程同步问题
* JS执行环境中负责执行代码的线程只有一个
* 缺点是，如果遇到一个特别耗时的任务，那后面的这些任务都必须要去排队等待任务的结束，这就会导致这个任务的执行拖延，假死的情况
* 为了解决这个问题，JavaScript把执行模式分为了同步模式和异步模式


**内容概要**

*  同步模式与异步模式
*  事件循环与消息队列
*  异步编程的几种方式
*  Promise异步方案、宏任务/微任务队列
*  Generator异步方案、Async/Await语法糖
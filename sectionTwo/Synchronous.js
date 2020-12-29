//同步模式指的代码当中的任务要等待前一个任务的结束下一个任务才执行，这种方式会比较简单，大多数任务会以同步模式执行

console.log('global begin');

function bar(){
    console.log('bar task');
}
function foo() {
    console.log('foo task');
    bar()
}


foo()

console.log('global end');
// 1 资源：内存
// console.log(process.memoryUsage())
// cpu
// console.log(process.cpuUsage())

// 2 运行环境：运行目录、node环境、cpu架构、用户环境、系统平台
/* console.log(process.cwd())
console.log(process.version)
// console.log(process.versions)
console.log(process.arch)
console.log(process.env.NODE_ENV)
// console.log(process.env.PATH)
console.log(process.env.USERPROFILE)  // HOME
/系统平台
console.log(process.platform) */

// 3 运行状态： 启动参数、PID、运行时间
/* console.log(process.argv)
console.log(process.argv0)  // execArgv
console.log(process.pid) */  // ppid 

//运行开始到结束的时间
// setTimeout(() => {
//   console.log(process.uptime())
// }, 3000)

// 4 事件监听
// process.on('exit', (code) => {
//     console.log('exit ' + code);
// })
// process.on('beforeExit', (code) => {
//     console.log('beforeExit' + code);
//     //在里面只能执行同步代码，异步是不支持的
// })
// console.log('代码执行完了');

// process.exit()

// // 5 标准输出 输入 错误
// console.log = function (params) {
//     process.stdout.write('---' + data + '\n')
// }

// console.log(11);

// console.log(22);

// const fs = require('fs')

// fs.createReadStream('test.txt')
//     //输出
//     .pipe(process.stdout)

// console.log(process.platform);

process.stdin.pipe(process.stdout)

process.stdin.setEncoding('utf-8')

process.stdin.on('readable',()=>{
    let chunk = process.stdin.read()
    if (chunk !== null){
        process.stdin.write('data ' + chunk)
    }
})
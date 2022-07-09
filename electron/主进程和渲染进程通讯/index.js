const {ipcRenderer} = require('electron')

window.onload = function () {
    // 获取元素
    let aBtn = document.getElementsByTagName('button')
    console.log(aBtn)

    // 01 采用异步的 API 在渲染进程中给主进程发送消息
    aBtn[0].addEventListener('click',() => {
        ipcRenderer.send('msg1', '当前是来自于渲染进程的一题哦异步消息')
    })

    // 02 采用同步的方式完成数据通信
    aBtn[1].addEventListener('click',()=>{
        let value = ipcRenderer.sendSync('msg2', '当前是来自于渲染进程的一题哦同步消息')
        console.log(value);
    })

    aBtn[2].addEventListener('click',()=>{
        ipcRenderer.send('openWin2')

        // 打开窗口2之后，保存数据到localStorage
        localStorage.setItem('name','kusou1')
    })

    // 当前区域是接收消息
    ipcRenderer.on('msg1Re',(ev,data)=>{
        console.log(data);
    })

    ipcRenderer.on('mtp',(ev,data)=>{
        console.log(data);
    })

    ipcRenderer.on('mti',(ev,data)=>{
        console.log(data);
    })
}
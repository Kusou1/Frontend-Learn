const electron = require('electron')
const {ipcRenderer} = electron
const electronRemote = process.type === 'browser' ? electron : require('@electron/remote')
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

    aBtn[3].addEventListener('click',()=>{
        // 显示对话框
        electronRemote.dialog.showOpenDialog({
            defaultPath: __dirname,
            buttonLabel:'请选择', // 修改确认按钮
            title: 'kusou1',
            properties: ['openFile','openDirectory','multiSelections'],
            filters:[
                {"name":'代码文件',extensions:['js','json','html']},
                {"name":'图片文件',extensions:['ico','jpeg','png']},
                {"name":'媒体类型',extensions:['avi','gif','mp4']},
            ]
        }).then((ret)=>{
            console.log(ret);
        })
    })
    
    aBtn[4].addEventListener('click',()=>{
        // 显示错误对话框
        electronRemote.dialog.showErrorBox('自定义错误标题','当前错误内容')
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
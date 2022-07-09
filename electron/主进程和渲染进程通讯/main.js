// Modules to control application life and create native browser window
const electron = require('electron')
const electronRemote = process.type === 'browser' ? electron : require('@electron/remote')
const { app, ipcMain, Menu } = require('electron')
const BrowserWindow = electronRemote.BrowserWindow

const { initialize, enable } = require('@electron/remote/main')
initialize()

// 定义全局变量，存放主窗口id
let mainwinId = null
function createWindow() {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            contextIsolation: false
        }
    })
    enable(mainWindow.webContents)

    let temp = [
        {
            label: 'send',
            submenu: [
                {
                    label: 'Hello',
                    accelerator: 'Shift+CmdOrCtrl+H',
                    click() {
                        console.log('Oh, hi there!')
                        BrowserWindow.getFocusedWindow().webContents.send('mtp', '来自主进程的消息')
                    }
                }
            ]
        }
    ]
    let menu = Menu.buildFromTemplate(temp)
    Menu.setApplicationMenu(menu)

    // and load the index.html of the app.
    mainWindow.loadFile('index.html')
    mainwinId = mainWindow.id
    mainWindow.on('ready-to-show', () => {
        mainWindow.show()
    })
    // Open the DevTools.
    mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    createWindow()

    app.on('activate', function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

// 主进程接收消息操作
ipcMain.on('msg1', (ev, data) => {
    console.log(data)
    ev.sender.send('msg1Re', '这是一条来自主进程的异步消息')
})

ipcMain.on('msg2', (ev, data) => {
    console.log(data)
    ev.returnValue = '这是一条来自主进程的同步消息'
})

ipcMain.on('stm', (ev, data) => {
    let mainWindow = BrowserWindow.fromId(mainwinId)
    mainWindow.webContents.send('mti', data)
    // ev.sender.send('msg1Re', '这是一条来自主进程的异步消息')
})

ipcMain.on('openWin2', (ev, data) => {
    // 接收到渲染进程中按钮点击信息之后完成窗口2 打开
    let subWin1 = new BrowserWindow({
        width: 400,
        height: 300,
        parent: BrowserWindow.fromId(mainwinId), //设置父窗口
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,  
            contextIsolation: false
        }
    })
    subWin1.loadFile('subWin1.html')
    subWin1.on('close', () => {
        subWin1 = null
    })
    // 此时我们是可以直接拿到 sub 进程的窗口对象，因此我们需要考虑就是等到它所有内容
    // 加载完成后再执行数据发送
    subWin1.webContents.on('did-finish-load',()=>{
        subWin1.webContents.send('its',data)
    })
    subWin1.webContents.openDevTools()
})

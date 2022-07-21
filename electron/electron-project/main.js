// Modules to control application life and create native browser window
const electron = require('electron')
const electronRemote = process.type === 'browser' ? electron : require('@electron/remote')
const { app, ipcMain, Menu, globalShortcut } = require('electron')
const BrowserWindow = electronRemote.BrowserWindow

const isDev = require('electron-is-dev')
const { initialize, enable } = require('@electron/remote/main')
initialize()
const Store = require('electron-store')

Store.initRenderer()

let mainWindow

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1024,
        height: 900,
        minWidth: 600,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            contextIsolation: false
        }
    })
    enable(mainWindow.webContents)

    const urlLocation = isDev ? 'http://localhost:3000' : 'myUrl'

    mainWindow.loadURL(urlLocation)
    globalShortcut.register('CommandOrControl+S', () => {
        mainWindow.send('saveFile')
    })
})


app.on('will-quit',()=>{
    globalShortcut.unregisterAll()
})
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

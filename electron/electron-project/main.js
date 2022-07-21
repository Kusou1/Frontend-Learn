// Modules to control application life and create native browser window
const electron = require('electron')
const electronRemote = process.type === 'browser' ? electron : require('@electron/remote')
const { app, ipcMain, Menu, globalShortcut } = require('electron')
const BrowserWindow = electronRemote.BrowserWindow

const isDev= require('electron-is-dev')
const { initialize, enable } = require('@electron/remote/main')
initialize()
const Store = require('electron-store')

Store.initRenderer()

let mainWindow

app.on('ready', ()=>{
    mainWindow = new BrowserWindow({
        width: 1024,
        height: 900,
        minWidth:600,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            contextIsolation: false
        }
    })
    enable(mainWindow.webContents)
    
    const urlLocation = isDev ? "http://localhost:3000" : 'myUrl'

    mainWindow.loadURL(urlLocation)

})
// Modules to control application life and create native browser window
const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')

function createWindow() {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        }
    })

    // and load the index.html of the app.
    mainWindow.loadFile('index.html')
    mainWindow.on('ready-to-show', () => {
        mainWindow.show()
    })
    // const template = [
    //   {
    //     label: 'Filter',
    //     submenu: [
    //       {
    //         label: 'Hello',
    //         accelerator: 'Shift+CmdOrCtrl+H',
    //         click() {
    //             console.log('Oh, hi there!')
    //         }
    //       }
    //     ]
    //   }
    // ];
    // Menu.setApplicationMenu(Menu.buildFromTemplate(template));
    // 定义自己需要的菜单项
    let menuTemp = [
        {
            label: 'main'
        },
        {
            label: '编辑',
            submenu: [
                {
                    label: 'Hello',
                    accelerator: 'Shift+CmdOrCtrl+H',
                    click() {
                        console.log('Oh, hi there!')
                    }
                },
                {
                    type: 'separator' // 分割线 
                },
                {
                    label: '复制',
                    accelerator: 'CmdOrCtrl+C',
                    click() {
                        console.log('复制咯')
                    }
                }
            ]
        },
        {
          label: '菜单角色',
          submenu: [
            {label: '复制', role: 'copy'},
            {label: '剪切', role: 'cut'},
            {label: '粘贴', role: 'paste'},
            {label: '最小化', role: 'minimize'},
          ]
        },
        {
          label: '类型',
          submenu: [
            {label: '选项1', type: 'checkbox'},
            {label: '选项2', type: 'checkbox'},
            {label: '选项3', type: 'checkbox'},
            {type:'separator'},
            {label: 'item1', type: 'radio'},
            {label: 'item2', type: 'radio'},
            {type:'separator'},
            {label: 'windows', type:'submenu',role:'windowMenu'}
            
          ]
        },
        {
            label: '其他',
            submenu: [
                {
                    label: '打开',
                    icon: './racism.png',
                    accelerator: 'Shift+CmdOrCtrl+H',
                    click() {
                        console.log('Oh, hi there!')
                    }
                }
            ]
        }
    ]

    // 利用上述的模版然后生成一个菜单项
    let menu = Menu.buildFromTemplate(menuTemp)

    // 将上述的自定义菜单添加到应用里
    Menu.setApplicationMenu(menu)
    // Open the DevTools.
    // mainWindow.webContents.openDevTools()
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

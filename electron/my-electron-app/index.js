const BrowserWindow = require('@electron/remote').BrowserWindow

window.addEventListener('DOMContentLoaded', () => {
    // 点击按钮，打开一个新窗口
    const oBtn = document.getElementById('btn')
    oBtn.addEventListener('click', () => {
        // 如何创建新窗口
        let indexMin = new BrowserWindow({
            width: 200,
            height: 200
        })
        indexMin.loadFile('list.html')

        indexMin.on('close', () => {
            indexMin = null
        })
    })
})

const remote = require('@electron/remote')
const Menu =remote.Menu

// 定义菜单的内容
let contextTemp = [
    {label: 'Run code'},
    {label: '转到定义'},
    {type: 'separator'},
    {
        label: '其他功能',
        click(){
            console.log('其他功能选项被点击了');
        }
    }
]

// 依据上述的内容来创建 menu
let menu = Menu.buildFromTemplate(contextTemp)

// 给鼠标右击添加监听
window.addEventListener('DOMContentLoaded',()=>{
    window.addEventListener('contextmenu',(ev)=>{
        ev.preventDefault()
        menu.popup({window:remote.getCurrentWindow()})
    },false)
})

//  创建一个自定义的菜单内容
//  在鼠标右键行为发生后显示出来
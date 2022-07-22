### 说明

一个基于 Electron + React 开发的Markdown编辑器。

所用技术栈：

- Electron 19
- React

已支持的平台：

- Windows 7 及以上
- Mac OS
- Linux
#### 数据存储路径

默认情况下，Markdown的数据存储在：

- Windows：`%APPDATA%/`
- Linux：`$XDG_CONFIG_HOME/` 或 `~/.config/`
- macOS：`~/Library/Application Support/`。


### UI界面

![ui-1](/src/assets/ui-1.jpg)
![ui-2](/src/assets/ui-2.jpg)


## 快捷键

CmdOrCtrl 指 win为Ctrl，mac为Cmd

|快捷键|作用|
|:---|:---|
|CmdOrCtrl + X|剪切|
|CmdOrCtrl + C|复制|
|CmdOrCtrl + V|复制|
|CmdOrCtrl + Z|撤销|
|CmdOrCtrl + A|全选|
|Shift + CmdOrCtrl + Z|重做|
|Shift + CmdOrCtrl + R|刷新|
|Ctrl+Command+F或F11|切换全屏|
|Option + CmdOrCtrl + I或Ctrl+Shift+I|打开开发者工具|
|CmdOrCtrl + M|缩小|
|CmdOrCtrl + W|关闭|
|CtrlOrCommend + N|新建Markdown文件|
|CtrlOrCommend + S|保存当前编辑文件|
|CtrlOrCommend + F|搜索文件|
|CtrlOrCommend + O|导入Markdown文件|



## How To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](https://www.npmjs.com/)) installed on your computer. From your command line:

``` bash
# Clone this repository
git clone https://github.com/Kusou1/Electron-Markdown-Editor.git
# Go into the repository
cd Electron-Markdown-Editor
# Install dependencies and run the app
yarn && yarn dev
```


### [Download Released App](https://github.com/Kusou1/Electron-Markdown-Editor)

#### License [MIT](LICENSE.md)
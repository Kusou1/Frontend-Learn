import './App.css'
import React, { useState } from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'

import SearchFile from './components/SearchFile'
import FileList from './components/FileList'
import ButtonItem from './components/ButtonItem'
import TabList from './components/TabList'

import initFiles from './utils/initFiles'
import { faFileImport, faPlus, faFileAlt, faEdit, faTrashAlt, faTimes } from '@fortawesome/free-solid-svg-icons'
import SimpleMDE from 'react-simplemde-editor'
import 'easymde/dist/easymde.min.css'
import { v4 } from 'uuid'
import { objToArr, mapArr, readFile, writeFile, renameFile, deleteFile } from './utils/helper'

const path = window.require('path')
const { app, dialog } = window.require('@electron/remote')
const Store = window.require('electron-store')

const fileStore = new Store({ name: 'filesInfo' })

// 定义方法实现具体属性数据的持久化存储
const saveInfoToStore = (files) => {
    const storeObj = objToArr(files).reduce((ret, file) => {
        const { id, title, createTime, path } = file
        ret[id] = {
            id,
            path,
            title,
            createTime
        }
        return ret
    }, {})
    fileStore.set('files', storeObj)
}

// 自定义左侧容器
let LeftDiv = styled.div.attrs({
    className: 'col-3 left-panel'
})`
    background-color: #22a6b3;
    min-height: 100vh;
    position: relative;
    .btn_list {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        p {
            width: 50%;
            color: #fff;
            margin-bottom: 0 !important;
        }
        p:nth-of-type(1) {
            background-color: #ff7979;
        }
        p:nth-of-type(2) {
            background-color: #ffbe76;
        }
    }
`
// 自定义右侧容器
let RightDiv = styled.div.attrs({
    className: 'col-9 right-panel'
})`
    background-color: #c7ecee;
    .init-page {
        color: #888;
        text-align: center;
        font: normal 28px/300px '微软雅黑';
    }
`

function App() {
    const [files, setFiles] = useState(fileStore.get('files') || {}) // 代表所有的文件信息
    const [searchFiles, setSearchFiles] = useState([]) // 搜索结果文件
    const [activeId, setActiveId] = useState('') // 当前正在编辑的文件id
    const [openIds, setOpenIds] = useState([]) // 当前已打开的所有文件信息
    const [unSaveIds, setUnSaveIds] = useState([]) // 当前未被保存的所有文件信息 ids

    // 自定义一个当前磁盘里存放文件的路径
    const savedPath = app.getPath('userData')
    // 已打开的所有文件信息
    const openFiles = openIds.map((openId) => {
        return files[openId]
    })

    // 正在编辑的文件信息
    const activeFile = files[activeId]

    // 点击左侧文件显示编辑页
    const openItem = (id) => {
        // 将当前id设置成active
        setActiveId(id)

        // 点击某个文件项时读取它里面的内容显示
        const currentFile = files[id]
        if (!currentFile.isLoaded) {
            readFile(currentFile.path).then((data) => {
                const newFile = { ...currentFile, body: data, isLoaded: true }
                setFiles({ ...files, [id]: newFile })
            })
        }

        // 将id添加至 open ids
        if (!openIds.includes(id)) {
            setOpenIds([...openIds, id])
        }
    }

    // 计算当前左侧列表需要展示的信息
    const fileList = searchFiles.length > 0 ? searchFiles : objToArr(files)

    // 点击选项卡 切换选项卡
    const changeActiveItem = (id) => {
        setActiveId(id)
    }

    // 关闭选项卡
    const closeItem = (id) => {
        let retOpen = openIds.filter((openId) => openId !== id)
        setOpenIds(retOpen)

        if (retOpen.length > 0 && activeId === id) {
            setActiveId(retOpen[0])
        } else if (retOpen.length > 0 && activeId !== id) {
            setActiveId(activeId)
        } else {
            setActiveId('')
        }
    }

    // 当文件内容更新时
    const changeFile = (id, newValue) => {
        if (!unSaveIds.includes(id)) {
            setUnSaveIds([...unSaveIds, id])
        }

        // 某个内容更新之后我们需要生成新的files
        const newFile = { ...files[id], body: newValue }
        setFiles({ ...files, [id]: newFile })
    }

    // 删除文件项
    const deleteItem = (id) => {
        const file = files[id]
        if (!file.isNew) {
            deleteFile(path.join(savedPath, `${files[id].title}.md`)).then(() => {
                delete files[id]
                setFiles(files)
                saveInfoToStore(files)
                // 如果当前想要关闭的项被打开，删除后应该将其关闭
                closeItem(id)
            })
        } else {
            delete files[id]
            setFiles(files)
            saveInfoToStore(files)
            // 如果当前想要关闭的项被打开，删除后应该将其关闭
            closeItem(id)
        }
    }

    // 依据关键字搜索文件
    const searchFile = (keyWord) => {
        const newFiles = objToArr(files).filter((file) => file.title.includes(keyWord))
        setSearchFiles(newFiles)
    }

    // 文件重命名
    const saveData = (id, newTitle, isNew) => {
        const item = objToArr(files).find((file) => file.title === newTitle)
        if (item) {
            newTitle += '_copy'
        }
        let newPath = path.join(savedPath, `${newTitle}.md`)
        const newFile = { ...files[id], title: newTitle, isNew: false, path: newPath }
        const newFiles = { ...files, [id]: newFile }
        if (isNew) {
            // 执行创建
            writeFile(newPath, files[id].body).then(() => {
                setFiles(newFiles)
                saveInfoToStore(newFiles)
            })
        } else {
            // 执行更新
            const oldPath = path.join(savedPath, `${files[id].title}.md`)
            renameFile(oldPath, newPath).then(() => {
                setFiles(newFiles)
            })
        }
    }

    // 新建文件
    const createFile = () => {
        const newId = v4()
        const newFile = {
            id: newId,
            title: '',
            isNew: true,
            body: '## 初始化内容',
            createTime: new Date().getTime()
        }
        let flag = objToArr(files).find((file) => file.isNew)
        if (!flag) {
            setFiles({ ...files, [newId]: newFile })
        }
    }

    // 保存正在编辑的文件
    const saveCurrentFile = () => {
        writeFile(path.join(savedPath, `${activeFile.title}.md`), activeFile.body).then(() => {
            setUnSaveIds(unSaveIds.filter((id) => id !== activeFile.id))
        })
    }

    // 外部markdown文件的导入
    const importFile = () => {
        dialog
            .showOpenDialog({
                defaultPath: __dirname,
                buttonLabel: '请选择',
                title: '选择md文件',
                properties: ['openFile', 'multiSelections'],
                filters: [
                    { name: 'markdown', extenstions: ['md'] },
                    { name: '其他类型', extenstions: ['js', 'json', 'html'] }
                ]
            })
            .then((ret) => {
                const paths = ret.filePaths
                if (paths.length) {
                    // 01 判断当前路径，是否存在于 files 当中，则无需再执行导入操作
                    const validPaths = paths.filter((filePath) => {
                        // 判断当前filePath是否已经存在过了
                        const existed = Object.values(files).find((file) => {
                            return file.path == filePath
                        })
                        return !existed
                    })

                    // 将上述路径信息组装成 files 格式， id title path
                    const packageData = validPaths.map((filePath) => {
                        return {
                            id: v4(),
                            title: path.basename(filePath, '.md'),
                            path: filePath
                        }
                    })

                    // 将上述的数据格式处理为 files 所需要的数据
                    const newFiles = { ...files, ...mapArr(packageData) }

                    // 更新数据重新渲染
                    setFiles(newFiles)

                    // 弹窗提示成功导入
                    if (packageData.length) {
                        dialog.showMessageBox({
                            type:'info',
                            message:'导入markdown成功咯🎊',
                            detail:"恭喜恭喜",
                            icon:'./src/assets/good-luck.png'
                        })
                    }
                    // saveInfoToStore(newFiles)
                } else {
                    console.log('未选择文件导入')
                }
            })
    }

    return (
        <div className="App contain-fluid px-0">
            <div className="row g-0">
                <LeftDiv>
                    <SearchFile title="我的文档" onSearch={searchFile}></SearchFile>
                    <FileList files={fileList} editFile={openItem} deleteFile={deleteItem} saveFile={saveData}></FileList>

                    <div className="btn_list">
                        <ButtonItem title={'新建'} icon={faPlus} btnClick={createFile} />
                        <ButtonItem title={'导入'} icon={faFileImport} btnClick={importFile} />
                    </div>
                </LeftDiv>
                <RightDiv>
                    <button onClick={saveCurrentFile}>保存</button>
                    {activeId ? (
                        <>
                            <TabList files={openFiles} activeItem={activeId} unSaveItems={unSaveIds} clickItem={changeActiveItem} closeItem={closeItem}></TabList>
                            <SimpleMDE
                                key={activeFile?.id}
                                onChange={(value) => {
                                    changeFile(activeFile.id, value)
                                }}
                                options={{ autofocus: true, spellChecker: false, minHeight: '525px' }}
                                value={activeFile?.body}
                            />
                        </>
                    ) : (
                        <div className="init-page">新建或导入具体的文档</div>
                    )}
                </RightDiv>
            </div>
        </div>
    )
}

export default App

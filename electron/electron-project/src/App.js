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
    const [files, setFiles] = useState(initFiles) // 代表所有的文件信息
    const [searchFiles, setSearchFiles] = useState([]) // 搜索结果文件
    const [activeId, setActiveId] = useState('') // 当前正在编辑的文件id
    const [openIds, setOpenIds] = useState([]) // 当前已打开的所有文件信息
    const [unSaveIds, setUnSaveIds] = useState([]) // 当前未被保存的所有文件信息 ids

    // 已打开的所有文件信息
    const openFiles = openIds.map((openId) => {
        return files.find((file) => file.id === openId)
    })

    // 正在编辑的文件信息
    const activeFile = files.find((file) => file.id === activeId)

    // 点击左侧文件显示编辑页
    const openItem = (id) => {
        // 将当前id设置成active
        setActiveId(id)

        // 将id添加至 open ids
        if (!openIds.includes(id)) {
            setOpenIds([...openIds, id])
        }
    }

    // 计算当前左侧列表需要展示的信息
    const fileList = searchFiles.length > 0 ? searchFiles : files

    // 点击选项卡 切换选项卡
    const changeActiveItem = (id) => {
        setActiveId(id)
    }

    // 关闭选项卡
    const closeItem = (id) => {
        let retOpen = openIds.filter((openId) => openId !== id)
        setOpenIds(retOpen)

        if (retOpen.length > 0 && (activeId === id)) {
            setActiveId(retOpen[0])
        } else if (retOpen.length > 0 && (activeId !== id)){
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
        const newFiles = files.map((file) => {
            if (file.id === id) {
                file.body = newValue
            }
            return file
        })

        setFiles(newFiles)
    }

    // 删除文件项
    const deleteItem = (id) => {
        const newFiles = files.filter((file) => file.id !== id)
        setFiles(newFiles)

        // 如果当前想要关闭的项被打开，删除后应该将其关闭
        closeItem(id)
    }

    // 依据关键字搜索文件
    const searchFile = (keyWord) => {
        const newFiles = files.filter((file) => file.title.includes(keyWord))
        setSearchFiles(newFiles)
    }

    // 文件重命名
    const reName = (id, newTitle) => {
        const newFiles = files.map((file) => {
            if (file.id === id) {
                file.title = newTitle
                file.isNew = false
            }
            return file
        })
        setFiles(newFiles)
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
        let flag = files.find((file) => file.isNew)
        if (!flag) {
            setFiles([...files, newFile])
        }
    }

    return (
        <div className="App contain-fluid px-0">
            <div className="row g-0">
                <LeftDiv>
                    <SearchFile title="我的文档" onSearch={searchFile}></SearchFile>
                    <FileList files={fileList} editFile={openItem} deleteFile={deleteItem} saveFile={reName}></FileList>

                    <div className="btn_list">
                        <ButtonItem title={'新建'} icon={faPlus} btnClick={createFile} />
                        <ButtonItem title={'导入'} icon={faFileImport} />
                    </div>
                </LeftDiv>
                <RightDiv>
                    {activeId ? (
                        <>
                            <TabList files={openFiles} activeItem={activeId} unSaveItems={unSaveIds} clickItem={changeActiveItem} closeItem={closeItem}></TabList>
                            <SimpleMDE
                                key={activeFile?.id}
                                onChange={(value) => {
                                    changeFile(activeFile.id, value)
                                }}
                                options={{ autofocus: true, spellChecker: false, minHeight: '575px' }}
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

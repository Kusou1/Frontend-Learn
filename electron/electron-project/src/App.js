import './App.css'
import React from 'react'
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
`

function App() {
    return (
        <div className="App contain-fluid px-0">
            <div className="row g-0">
                <LeftDiv>
                    <SearchFile
                        title="我的文档"
                        onSearch={(value) => {
                            console.log(value)
                        }}
                    ></SearchFile>
                    <FileList
                        files={initFiles}
                        editFile={(id) => {
                            console.log(id)
                        }}
                        deleteFile={(id) => {
                            console.log(id)
                        }}
                        saveFile={(id, value) => {
                            console.log(id, value)
                        }}
                    ></FileList>

                    <div className="btn_list">
                        <ButtonItem title={'新建'} icon={faPlus} />
                        <ButtonItem title={'导入'} icon={faFileImport} />
                    </div>
                </LeftDiv>
                <RightDiv>
                    <TabList
                        files={initFiles}
                        activeItem={'1'}
                        unSaveItems={['1', '2']}
                        clickItem={(id) => {
                            console.log(id)
                        }}
                        closeItem={(id) => {
                            console.log('close', id)
                        }}
                    ></TabList>
                    <SimpleMDE options={{ autofocus: true, spellChecker: false,minHeight:"575px" }} value={initFiles[0].body} />
                </RightDiv>
            </div>
        </div>
    )
}

export default App

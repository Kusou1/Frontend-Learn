import './App.css'
import React from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css'

import SearchFile from './components/SearchFile'
import FileList from './components/FileList'
import initFiles from './utils/initFiles'

// 自定义左侧容器
let LeftDiv = styled.div.attrs({
    className: 'col-3 left-panel'
})`
    background-color: #6ab04c;
    min-height: 100vh;
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
                </LeftDiv>
                <RightDiv>右侧</RightDiv>
            </div>
        </div>
    )
}

export default App

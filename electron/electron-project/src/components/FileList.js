import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faEdit, faTrashAlt, faTimes } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
import useKeyHandler from '../hooks/useKeyHandler'

// ul 标签
let GroupUl = styled.ul.attrs({
    className: 'list-group list-group-flush'
})`
    li {
        color: #fff;
        background: none;
    }
`

const FileList = ({ files, editFile, saveFile, deleteFile }) => {
    const [editItem, setEditItem] = useState(false)
    const [value, setValue] = useState('')

    // 定义关闭行为
    const closeFn = () => {
        setEditItem(false)
        setValue('')

        const currentFile = files.find(file => file.id === editItem)
        if(currentFile && currentFile.isNew){
            deleteFile(currentFile.id)
        }
    }

    // 键盘事件操作
    const enterPress = useKeyHandler(13)
    const escPress = useKeyHandler(27)

    useEffect(() => {
        if (enterPress && editItem && value.trim() !== '') {
            saveFile(editItem, value)
            closeFn()
        }

        if (escPress && editItem) {
            closeFn()
        }
    })

    useEffect(() => {
        const newFile = files.find((file) => file.isNew)
        if(newFile){
            setEditItem(newFile.id)
            setValue(newFile.title)
        }
    },[files])

    useEffect(() => {
        const newFile = files.find((file) => file.isNew)
        if(newFile && editItem !== newFile.id){
            deleteFile(newFile.id)
        }
        if(editItem){
            setValue(files.find(file=>file.id == editItem).title)
        }
    },[editItem])

    return (
        <GroupUl>
            {files.map((file) => {
                return (
                    <li className="list-group-item d-flex align-items-center" key={file.id}>
                        {file.id !== editItem && !file.isNew && (
                            <>
                                <span className="col-1 mr-2">
                                    <FontAwesomeIcon icon={faFileAlt}></FontAwesomeIcon>
                                </span>
                                <span
                                    className="col-8"
                                    onClick={() => {
                                        editFile(file.id);
                                        closeFn()
                                    }}
                                >
                                    {file.title}
                                </span>
                                <span
                                    className="col-2 "
                                    onClick={() => {
                                        setEditItem(file.id)
                                    }}
                                >
                                    <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                                </span>
                                <span
                                    className="col-1"
                                    onClick={() => {
                                        deleteFile(file.id)
                                    }}
                                >
                                    <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                                </span>
                            </>
                        )}
                        {(file.id === editItem || file.isNew) && (
                            <>
                                <input
                                    className="col-9"
                                    value={value}
                                    onChange={(e) => {
                                        setValue(e.target.value)
                                    }}
                                ></input>
                                <span className="col-3 text-center" onClick={closeFn}>
                                    <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                                </span>
                            </>
                        )}
                    </li>
                )
            })}
        </GroupUl>
    )
}

FileList.propTypes = {
    files: PropTypes.array,
    editFile: PropTypes.func.isRequired,
    saveFile: PropTypes.func.isRequired,
    deleteFile: PropTypes.func.isRequired
}

export default FileList

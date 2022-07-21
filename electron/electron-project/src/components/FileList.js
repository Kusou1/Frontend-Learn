import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faEdit, faTrashAlt, faTimes } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
import useKeyHandler from '../hooks/useKeyHandler'
import useContextMenu from '../hooks/useContextMenu'
import { getParentNode } from '../utils/helper'
import classnames from 'classnames'

// ul 标签
let GroupUl = styled.ul.attrs({
    className: 'list-group list-group-flush menu-box'
})`
    li {
        color: #fff;
        background: none;
        cursor: pointer;
    }
`

const FileList = ({ files, editFile, saveFile, deleteFile }) => {
    const [editItem, setEditItem] = useState(false)
    const [value, setValue] = useState('')

    // 定义关闭行为
    const closeFn = () => {
        setEditItem(false)
        setValue('')
    }

    // 定制一个菜单的选项
    const contextMenuTmp = [
        {
            label: '重命名',
            click() {
                let retNode = getParentNode(currentEle.current, 'menu-item')
                setEditItem(retNode.dataset.id)
            }
        },
        {
            label: '删除',
            click() {
                let retNode = getParentNode(currentEle.current, 'menu-item')
                deleteFile(retNode.dataset.id)
            }
        }
    ]

    const currentEle = useContextMenu(contextMenuTmp, 'menu-box', 'menu-item-edit')

    // 键盘事件操作
    const enterPress = useKeyHandler(13)
    const escPress = useKeyHandler(27)

    useEffect(() => {
        if (enterPress && editItem && value.trim() !== '') {
            const file = files.find((file) => file.id === editItem)
            saveFile(editItem, value, file.isNew)
            closeFn()
        }

        if (escPress && editItem) {
            closeFn()
        }
    })

    useEffect(() => {
        const newFile = files.find((file) => file.isNew)
        if (newFile) {
            setEditItem(newFile.id)
            setValue(newFile.title)
        }
    }, [files])

    useEffect(() => {
        const newFile = files.find((file) => file.isNew)
        if (newFile && editItem !== newFile.id) {
            deleteFile(newFile.id)
        }
        if (editItem) {
            setValue(files.find((file) => file.id == editItem).title)
        }
    }, [editItem])

    return (
        <GroupUl>
            {files.map((file) => {
                let finalClass = classnames({
                    'menu-item': file.id !== editItem && !file.isNew,
                    'menu-item-edit': file.id === editItem || file.isNew,
                    'list-group-item': true,
                    'd-flex': true,
                    'align-items-center': true
                })
                return (
                    <li className={finalClass} key={file.id} data-id={file.id} data-title={file.title}>
                        {file.id !== editItem && !file.isNew && (
                            <>
                                <span className="col-1 mr-2">
                                    <FontAwesomeIcon icon={faFileAlt}></FontAwesomeIcon>
                                </span>
                                <span
                                    className="col-8"
                                    onClick={() => {
                                        editFile(file.id)
                                        closeFn()
                                    }}
                                >
                                    {file.title}
                                </span>
                                {/* <span
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
                                </span> */}
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

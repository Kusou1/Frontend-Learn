import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classnames from 'classnames'
import { faTimes, faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// 自定义 ul 标签
let TabUl = styled.ul.attrs({
    className: 'nav nav-pills'
})`
    border-bottom: 1px solid #fff;
    height:42px;
    li a {
        border-radius: 0px !important;
        height:100%;
    }
    li a.active {
        background: #333 !important;
    }
    .nav-link{
        color:#666
    }
    .nav-link.unSaveMark .rounded-circle {
        
    }
    .nav-link.unSaveMark .icon-close {
        display:none
    }
    .nav-link.unSaveMark:hover .icon-close {
        display:inline-block
    }
    .nav-link.unSaveMark:hover .rounded-circle {
        display:none
    }
`

const TabList = ({ files, activeItem, unSaveItems, clickItem, closeItem }) => {
    return (
        <TabUl>
            {files.map((file) => {
                // 定义变量控制未保存状态
                let unSaveMark = unSaveItems.includes(file.id)
                // 组合类名
                let finalClass = classnames({
                    'nav-link': true,
                    active: activeItem === file.id,
                    unSaveMark: unSaveMark
                })
                return (
                    <li className="nav-item" key={file.id}>
                        <a
                            href="#"
                            className={finalClass}
                            onClick={(e) => {
                                e.preventDefault()
                                clickItem(file.id)
                            }}
                        >
                            {file.title}
                            <span
                                className="ms-2 icon-close"
                                onClick={(e) => {
                                    e.stopPropagation()
                                    closeItem(file.id)
                                }}
                            >
                                <FontAwesomeIcon icon={faTimes} />
                            </span>
                            {unSaveMark && (
                                <span
                                    className="ms-2 rounded-circle"
                                >
                                    <FontAwesomeIcon icon={faCircle} size="2xs" />
                                </span>
                            )}
                        </a>
                    </li>
                )
            })}
        </TabUl>
    )
}

TabList.propTypes = {
    files: PropTypes.array,
    activeItem: PropTypes.string,
    unSaveItems: PropTypes.array,
    clickItem: PropTypes.func,
    closeItem: PropTypes.func
}

TabList.defaultProps = {
    unSaveItems: []
}

export default TabList

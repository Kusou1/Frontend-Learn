import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classnames from 'classnames'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// 自定义 ul 标签
let TabUl = styled.ul.attrs({
    className: 'nav nav-pills'
})`
    li a {
        border-radius: 0px !important;
    }
    li a.active {
        background: #ff7979 !important;
    }
`

const TabList = ({ files, activeItem, unSaveItems, clickItem, closeItem }) => {
    return (
        <TabUl>
            {files.map((file) => {
                let finalClass = classnames({
                    'nav-link': true,
                    active: activeItem === file.id
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
                            <span className='ms-2'>
                                <FontAwesomeIcon icon={faTimes} />
                            </span>
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

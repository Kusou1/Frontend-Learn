import useIpcRenderer from '../hooks/useIpcRenderer'
import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faSearch } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
import useKeyHandler from '../hooks/useKeyHandler'
const { ipcRenderer } = window.require('electron')

// 自定义搜索区域的div
let SearchDiv = styled.div.attrs({
    className: 'd-flex align-items-center justify-content-between'
})`
    border-bottom: 1px solid #fff;
    span {
        color: #fff;
        padding: 0 10px;
        font: normal 16px/40px '微软雅黑';
        &.btn {
            cursor: pointer;
        }
    }
    input {
        margin-left: 10px;
        border: none;
        border-radius: 4px;
        width: calc(100% - 70px);
    }
`

const SearchFile = ({ title, onSearch }) => {
    const [searchActive, setSearchActive] = useState(false)
    const [value, setValue] = useState('')

    const oInput = useRef(null)

    const closeSearch = () => {
        setSearchActive(false)
        setValue('')

        // 当我们关闭搜索功能的时候，可以给他提供一个空字符
        // 这样就没有满足条件的搜索结果
        // 就能将原来的列表数据重新展示
        onSearch('')
    }

    const enterPress = useKeyHandler(13)
    const escPress = useKeyHandler(27)

    useEffect(() => {
        if (enterPress && searchActive) {
            onSearch(value)
        }

        if (escPress && searchActive) {
            closeSearch()
        }
    })

    useIpcRenderer({
        'execute-search-file': () => {
            setSearchActive(!searchActive)
        }
    })

    useEffect(() => {
        if (searchActive) {
            oInput.current.focus()
        }
    }, [searchActive])

    return (
        <>
            {!searchActive && (
                <>
                    <SearchDiv>
                        <span>{title}</span>
                        <span
                            onClick={() => {
                                setSearchActive(true)
                            }}
                            className="btn"
                        >
                            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                        </span>
                    </SearchDiv>
                </>
            )}
            {searchActive && (
                <>
                    <SearchDiv>
                        <input
                            value={value}
                            onChange={(e) => {
                                setValue(e.target.value)
                            }}
                            ref={oInput}
                        />
                        <span onClick={closeSearch} className="btn">
                            <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                        </span>
                    </SearchDiv>
                </>
            )}
        </>
    )
}

SearchFile.propTypes = {
    title: PropTypes.string,
    onSearch: PropTypes.func.isRequired
}

SearchFile.defaultProps = {
    title: '文档列表'
}

export default SearchFile

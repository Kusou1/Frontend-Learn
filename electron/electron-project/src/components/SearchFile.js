import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

// 自定义搜索区域的div
let SearchDiv = styled.div.attrs({
    className: 'd-flex align-items-center justify-content-between'
})`
    border-bottom: 1px solid #fff;
    span {
        color: #fff;
        padding: 0 10px;
        font: normal 16px/40px '微软雅黑';
        &.btn{
            cursor:pointer;
        }
    }
    input {
        margin-left: 10px;
        border: none;
        border-radius: 4px;
        width:calc(100% - 80px);
    }
`

const SearchFile = ({ title, onSearch }) => {
    const [searchActive, setSearchActive] = useState(false)
    const [value, setValue] = useState('')

    const oInput = useRef(null)

    const closeSearch = () =>{
        setSearchActive(false)
        setValue('')
    }
    useEffect(()=>{
        const searchHandle = (ev)=>{
            const {keyCode} =ev
            if(keyCode ===13 && searchActive){
                onSearch(value)
            }

            if(keyCode ===27 && searchActive){
                closeSearch()
            }
        }
        document.addEventListener('keyup',searchHandle)
        return ()=>{
            document.removeEventListener('keyup',searchHandle)
        }
    })

    useEffect(()=>{
        if(searchActive){
            oInput.current.focus()
        }
    },[searchActive])

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
                            className='btn'
                        >
                            搜索
                        </span>
                    </SearchDiv>
                </>
            )}
            {searchActive && (
                <>
                    <SearchDiv>
                        <input 
                            value={value}
                            onChange={(e)=>{ setValue(e.target.value)}}
                            ref={oInput}
                        />
                        <span
                            onClick={closeSearch}
                            className='btn'
                        >
                            关闭
                        </span>
                    </SearchDiv>
                </>
            )}
        </>
    )
}

export default SearchFile

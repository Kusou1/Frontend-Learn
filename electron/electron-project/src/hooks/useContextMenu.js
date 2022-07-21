import { useEffect, useRef } from 'react'
import {getParentNode} from '../utils/helper'
const { Menu, getCurrentWindow } = window.require('@electron/remote')
function useContextMenu(contextMenuTmp, areaClass,ignoreClass) {
    const currentEle = useRef(null)
    useEffect(() => {
        // 获取需要触发右键菜单的区域的元素
        const areaEle = document.querySelector(`.${areaClass}`)
        const menu = Menu.buildFromTemplate(contextMenuTmp)

        // 右键操作事件监听
        const contextMenuHandle = (ev) => {
            let ignore = getParentNode(ev.target, ignoreClass)
            if ( !ignore && areaEle.contains(ev.target)) {
                currentEle.current = ev.target
                menu.popup({ window: getCurrentWindow })
            }
        }
        window.addEventListener('contextmenu', contextMenuHandle)
        return () => {
            window.removeEventListener('contextmenu', contextMenuHandle)
        }
    })

    return currentEle
}

export default useContextMenu

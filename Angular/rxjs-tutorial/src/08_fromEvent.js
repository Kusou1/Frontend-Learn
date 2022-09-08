//将事件转换为 Observable。

import { fromEvent } from "rxjs"
import {map,pluck} from 'rxjs/operators'
const btn = document.getElementById("btn")
// 可以将 Observer 简写成一个函数，表示 next
fromEvent(btn, "click").subscribe(e => console.log(e))

fromEvent(btn, 'click').pipe(
    // (map(event => event.target))
    pluck("target")
).subscribe(console.log)
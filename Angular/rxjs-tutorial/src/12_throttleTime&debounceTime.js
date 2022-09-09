import { fromEvent } from "rxjs"
import { throttleTime, debounceTime } from "rxjs/operators"

const button = document.getElementById('btn')
// 节流，可观察对象高频次向外部发出数据流，通过 throttleTime 限制在规定时间内每次只向订阅者传递一次数据流。
fromEvent(button, "click")
    .pipe(throttleTime(2000))
    .subscribe(x => console.log(x))



//防抖，触发高频事件，只响应最后一次。
fromEvent(button, "click")
    .pipe(debounceTime(1000))
    .subscribe(x => console.log(x))
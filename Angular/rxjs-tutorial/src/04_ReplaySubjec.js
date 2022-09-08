import { ReplaySubject } from "rxjs"

// 功能类似 Subject，但有新订阅者时两者处理方式不同，Subject 不会广播历史结果，而 ReplaySubject 会广播所有历史结果。

const rSubject = new ReplaySubject()

rSubject.subscribe(value => {
  console.log(value)
})

rSubject.next("Hello 1")
rSubject.next("Hello 2")

setTimeout(function () {
  rSubject.subscribe({next: function (value) {console.log(value)}})
}, 3000)
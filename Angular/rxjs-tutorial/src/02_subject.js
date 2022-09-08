import { Subject } from "rxjs"

const demoSubject = new Subject()

demoSubject.subscribe({next: function (value) {console.log(value)}})
demoSubject.subscribe({next: function (value) {console.log(value)}})

setTimeout(function () {
  demoSubject.next("hahaha")
}, 3000)
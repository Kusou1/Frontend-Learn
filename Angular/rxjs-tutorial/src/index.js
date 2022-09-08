import { fromEvent, from } from "rxjs"
import { concatMap } from "rxjs/operators"
import axios from "axios"
// import './01_observer'
// import './02_subject'
// import './03_BehaviorSubject'
// import './04_ReplaySubjec'
// import './05_operators'
// import './06_from'
// import './07_forkJoin'
import './08_fromEvent'



// const button = document.getElementById("btn")

// fromEvent(button, "click")
//   .pipe(
//     concatMap(event => from(axios.get("http://localhost:3005/token"))),
//     concatMap(token => from(axios.get("http://localhost:3005/userInfo")))
//   )
//   .subscribe(console.log)

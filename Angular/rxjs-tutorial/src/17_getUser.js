import axios from "axios"
import { from, fromEvent } from "rxjs"
import { pluck, concatMap } from "rxjs/operators"

const button = document.getElementById("btn")

fromEvent(button, "click")
  .pipe(
    concatMap(event =>
      from(axios.get("http://localhost:3005/token")).pipe(
        pluck("data", "token")
      )
    ),
    concatMap(token =>
      from(axios.get("http://localhost:3005/userInfo")).pipe(pluck("data"))
    )
  )
  .subscribe(console.log)
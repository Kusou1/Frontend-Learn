import { fromEvent, interval } from "rxjs"
import { switchMap } from "rxjs/operators"

const button = document.getElementById('btn')

fromEvent(button, "click")
  .pipe(switchMap(ev => interval(1000)))
  .subscribe(x => console.log(x))
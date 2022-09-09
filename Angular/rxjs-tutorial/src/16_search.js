import { fromEvent, from, throwError } from "rxjs"
import { debounceTime, distinctUntilChanged, map, switchMap, catchError } from "rxjs/operators"
import axios from "axios"

const search = document.getElementById("search")

fromEvent(search, "keyup")
    .pipe(
        debounceTime(700),
        map(event => event.target.value),
        distinctUntilChanged(),
        switchMap(keyword =>
            from(
                axios.get(`https://jsonplaceholder.typicode.com/posts?q=${keyword}`)
            ).pipe(
                map(response => response.data),
                catchError(error => throwError(`发生了错误: ${error.message}`))
            )
        )
    )
    .subscribe({
        next: value => {
            console.log(value)
        },
        error: error => {
            console.log(error)
        }
    })
import { range } from "rxjs";
import { map } from "rxjs/operators"

range(1, 10).pipe(
    map(n => n * 10)
).subscribe(function (value) {
    console.log(value)
})
import { from } from "rxjs"

function p() {
  return new Promise(function (resolve) {
    resolve([100, 200])
  })
}
from(p()).subscribe(v => console.log(v))
// [100, 200]
from(["a", "b", "c"]).subscribe(v => console.log(v))
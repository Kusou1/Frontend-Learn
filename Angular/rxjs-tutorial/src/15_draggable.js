const box = document.getElementById("box")
// 原生 JavaScript
// box.onmousedown = function (event) {
//     let distanceX = event.clientX - event.target.offsetLeft
//     let distanceY = event.clientY - event.target.offsetTop
//     document.onmousemove = function (event) {
//         let positionX = event.clientX - distanceX
//         let positionY = event.clientY - distanceY
//         box.style.left = positionX + "px"
//         box.style.top = positionY + "px"
//     }
//     box.onmouseup = function () {
//         document.onmousemove = null
//     }
// }


// RxJS
import { fromEvent } from "rxjs"
import { map, switchMap, takeUntil } from "rxjs/operators"


fromEvent(box, "mousedown")
    .pipe(
        map(event => ({
            distanceX: event.clientX - event.target.offsetLeft,
            distanceY: event.clientY - event.target.offsetTop
        })),
        switchMap(({ distanceX, distanceY }) =>
            fromEvent(document, "mousemove").pipe(
                map(event => ({
                    positionX: event.clientX - distanceX,
                    positionY: event.clientY - distanceY
                })),
                takeUntil(fromEvent(document, "mouseup"))
            )
        )
    )
    .subscribe(({ positionX, positionY }) => {
        box.style.left = positionX + "px"
        box.style.top = positionY + "px"
    })
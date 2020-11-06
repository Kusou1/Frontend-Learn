// if(true){
//     var foo = 'zsh'
// }
// console.log(foo)

// for(var i=0;i<3;i++){
//     for (var i = 0; i < 3; i++) {
//         console.log(i)
//     }
//     console.log('内层结束 i=' + i)
// }

// for (let i = 0; i < 3; i++) {
//     for (let i = 0; i < 3; i++) {
//         console.log(i)
//     }
//     console.log('内层结束 i=' + i)
// }

//-----------------------------------------

// var elements=[{},{},{}]
// for(var i=0;i<elements.length;i++){
//     elements[i].onclick=function () {
//         console.log(i)
//     }
// }
// elements[0].onclick()

var elements = [{}, {}, {}]
for (let i = 0; i < elements.length; i++) {
    elements[i].onclick = function () {
        console.log(i)
    }
}
elements[0].onclick()
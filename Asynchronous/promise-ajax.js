//Promise 方式的  AJAX

function ajax(url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest()
        xhr.open('GET', url)
        xhr.responseType='json'//设置response的类型 请求完成后直接返回一个json对象而不是一个字符串
        xhr.onload=function () {
            if(this.status===200){
                resolve(this.response)
            }else{
                reject(new Error(this.statusText))
            }
        }
        xhr.send()
    })
}

ajax('')
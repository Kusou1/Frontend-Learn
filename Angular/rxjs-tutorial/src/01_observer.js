import {Observable} from 'rxjs'

const  observable = new Observable(function(observer){
    let index = 0
    setInterval(function(){
      let timer = observer.next(index++)
      if(index === 3){
        observer.complete()
        clearInterval(timer)
      }
    },2000)
  })
  
  const observer = {
    next: function(value){
      console.log(value)
    }
  }
  
  observable.subscribe(observer)
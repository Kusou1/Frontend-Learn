import { makeObservable, observable, action } from "mobx"

class TodoStore {
  id = Math.random()
  title = ""
  completed = false
  constructor(title) {
    this.title = title
    makeObservable(this, {
      completed: observable,
      toggle: action.bound // 使 action 方法始终拥有正确的 this 指向
    })
  }
  toggle() {
    this.completed = !this.completed
  }
}
export default TodoStore
